import { renderHook, act } from "@testing-library/react";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: { success: jest.fn(), error: jest.fn() },
}));

const mockRouter = { push: jest.fn() };

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => mockRouter),
}));

describe("useAuth hook", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("initializes with user from localStorage", () => {
    const userMock = { email: "test@example.com", name: "Test User" };
    localStorage.setItem("user", JSON.stringify(userMock));

    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toEqual(userMock);
    expect(result.current.isLoading).toBe(false);
  });

  it("handles invalid user data in localStorage", () => {
    localStorage.setItem("user", "invalid_json");

    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
  });

  it("logs in successfully and stores user in localStorage", async () => {
    const userMock = { email: "test@example.com", name: "Test User" };
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve(userMock) }),
    );

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login("test@example.com", "Test User");
    });

    expect(result.current.user).toEqual(userMock);
    expect(localStorage.getItem("user")).toEqual(JSON.stringify(userMock));
    expect(toast.success).toHaveBeenCalledWith("Login successful", {
      autoClose: 3000,
    });
  });

  it("handles login failure with 404 error", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: false, status: 404 }));
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login("wrong@example.com", "Wrong User");
    });

    expect(result.current.user).toBeNull();
    expect(toast.error).toHaveBeenCalledWith("User not found", {
      autoClose: 3000,
    });
  });

  it.only("logs out and redirects to login page", () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "test@example.com", name: "Test User" }),
    );
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
    expect(mockRouter.push).toHaveBeenCalledWith("/login");
  });
});
