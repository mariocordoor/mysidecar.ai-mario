import { NextResponse } from "next/server";
import { User } from "@/lib/types";

const mockUsers: User[] = [
  { id: "khsdeefh7328asfs", name: "Mario", email: "mario.demko@cordoor.com" },
  { id: "y78237467ryeqeds", name: "Borja", email: "borja@mysidecar.ai" },
];

const findUser = (email: string, name: string): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (user) => user.email === email && user.name === name,
      );
      resolve(user);
    }, 1500);
  });
};

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();
    const user = await findUser(email, name);

    // Handle user not found
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const response = NextResponse.json(user);
    return response;
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
