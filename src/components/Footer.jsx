import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-dark text-text py-10 mt-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-2">
            Maragua Youth Soccer Academy
          </h2>
          <p className="text-sm text-gray-300">
            Building talent, discipline, and future leaders through football. We empower youth between ages 7 and 19 with structured training and life skills.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-primary mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Schedule", "Register", "Contact"].map((text) => (
              <li key={text}>
                <Link
                  to={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
                  className="hover:text-accent transition-all duration-300"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-primary mb-3">Contact</h3>
          <p className="text-sm mb-2">
            Email:{" "}
            <a href="mailto:info@mysa.org" className="text-accent hover:underline">
              info@mysa.org
            </a>
          </p>
          <p className="text-sm mb-4">Location: Maragua, Kenya</p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-accent"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-xs text-gray-400 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        &copy; {new Date().getFullYear()} Maragua Youth Soccer Academy. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}


