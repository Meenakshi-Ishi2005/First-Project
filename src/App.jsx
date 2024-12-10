import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* Protected route with redirection logic */}
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <Layout><Dashboard /></Layout>
            </SignedIn>
          }
        />

        {/* Redirect signed-out users trying to access /dashboard */}
        <Route
          path="/dashboard"
          element={
            <SignedOut>
              <Navigate to="/" /> {/* Redirecting to Home if not signed in */}
            </SignedOut>
          }
        />

        {/* Catch-all route for invalid paths */}
        <Route path="*" element={<Layout><ErrorPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
