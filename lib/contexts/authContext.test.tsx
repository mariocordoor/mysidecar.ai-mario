import { render, screen } from "@testing-library/react";
import { UserProvider } from "../contexts/authContext";
import { useAuth } from "../hooks/useAuth";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const TestComponent = () => {
  const { user, isLoading } = useAuth();

  return (
    <div>
      <div data-testid="user">{JSON.stringify(user)}</div>
      <div data-testid="isAuthenticated">{user ? "true" : "false"}</div>
      <div data-testid="isLoading">{isLoading.toString()}</div>
    </div>
  );
};

describe("AuthProvider", () => {
  it("provides initial auth state", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    expect(screen.getByTestId("user").textContent).toBe("null");
    expect(screen.getByTestId("isAuthenticated").textContent).toBe("false");
    expect(screen.getByTestId("isLoading").textContent).toBe("false");
  });
});
