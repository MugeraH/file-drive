"use client";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  useSession,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const session = useSession();
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
    </main>
  );
}
