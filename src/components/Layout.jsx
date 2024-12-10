import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f5f5f5' }}>
        <div>
          <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
          <Link to="/dashboard" style={{ margin: '0 1rem' }}>Dashboard</Link>
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
