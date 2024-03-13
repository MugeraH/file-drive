"use client";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  useSession,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import { useMutation } from "convex/react";

import { api } from "../../convex/_generated/api";

export default function Home() {
  const session = useSession();
  const createFile = useMutation(api.files.createFile);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="secondary">Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Button variant="destructive">SignOut</Button>
        </SignOutButton>
      </SignedIn>

      <Button
        variant="secondary"
        onClick={() => {
          createFile({
            name: "Fiona Stark",
          });
        }}
      >
        ClickMe
      </Button>
    </main>
  );
}
