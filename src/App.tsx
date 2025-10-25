import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import './App.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from './components/NavBar';
import { TooltipProvider } from './components/ui/tooltip';
import React, { Suspense } from 'react';

// Lazy-loaded pages
const Login = React.lazy(() => import('./pages/auth/login'));
const SignUp = React.lazy(() => import('./pages/auth/resgister'));
const Main = React.lazy(() => import('./pages/Main'));
const Tickets = React.lazy(() => import('./pages/app/Ticket'));
const Dashboard = React.lazy(() => import('./pages/app/Dashboard'));
const NotFound = React.lazy(() => import('./pages/app/NotFound'));

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <div className="max-w-[1440px] mx-auto px-4">
          <Layout />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;

function Layout() {
  const location = useLocation();

  // Paths where we want to hide the Navbar
  const hideNavbarOn = ["/dashboard", "/tickets"];

  return (
    <>
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-2xl font-bold">
      Loading...
    </div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
