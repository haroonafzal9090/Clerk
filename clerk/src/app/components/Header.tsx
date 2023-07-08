
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  return (
    <header>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            Sign in
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
