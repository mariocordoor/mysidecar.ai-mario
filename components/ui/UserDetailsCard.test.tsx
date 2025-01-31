import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UserDetailsCard } from "./UserDetailsCard";
import { User } from "../../lib/types";

const mockUser: User = {
  id: "jsdffsdl",
  name: "Mario Demko",
  email: "demko.mario@gmail.com",
};

describe("test the UserDetailsCard component", () => {
  it("renders user details correctly", () => {
    render(<UserDetailsCard user={mockUser} />);

    expect(screen.getByText("User Details")).toBeInTheDocument();

    Object.entries(mockUser).forEach(([key, value]) => {
      const attributeText = screen.getByText(value).textContent;

      expect(attributeText).toBe(`${key}: ${value}`);
    });
  });

  it("displays a message when no user data is available", () => {
    render(<UserDetailsCard user={null} />);

    expect(screen.getByText("No user data available.")).toBeInTheDocument();
  });
});
