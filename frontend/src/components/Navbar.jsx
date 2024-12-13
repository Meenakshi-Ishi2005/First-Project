import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import { Link, Navigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "#f5f5f5",
      }}
    >
      <div>
        <Link to="/" style={{ margin: "0 1rem" }}>
          Home
        </Link>
        <Link to="/dashboard" style={{ margin: "0 1rem" }}>
          Dashboard
        </Link>
      </div>
      <div>
        <SignedOut>
          <SignInButton />
          <Navigate to="/signin" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
