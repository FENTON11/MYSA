import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn');
    setIsAdminLoggedIn(loggedIn === 'true');  // important: compare to string
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Schedule", path: "/schedule" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
    // Conditionally add admin links
    isAdminLoggedIn
      ? { name: "Admin", path: "/admin" }
      : { name: "Admin Login", path: "/admin/login" },
  ];

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Maragua Youth Soccer Academy</h1>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-accent transition duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-primary px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-accent transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
