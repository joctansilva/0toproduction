"use-client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./SimpleUploadButton";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b  p-4  text-xl font-semibold">
      <div>
        <a href="/">Gallery</a>
      </div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
