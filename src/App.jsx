import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

import useTheme from "./hooks/useTheme";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Prevent the browser from restoring the previous scroll position
    window.history.scrollRestoration = "manual";

    // Always move to the top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] antialiased">
      {/* Automatically scroll to the top whenever the route changes */}
      <ScrollToTop />

      {/* Shared navigation */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main page content */}
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-2" element={<PageTwo />} />
          <Route path="/page-3" element={<PageThree />} />
        </Routes>
      </main>

      {/* Shared footer */}
      <Footer />
    </div>
  );
}