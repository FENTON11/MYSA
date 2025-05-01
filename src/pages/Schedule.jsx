
import React from "react";
import { motion } from "framer-motion";

export default function Schedule() {
  return (
    <section className="bg-white text-dark py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Training Schedule
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We train children between 7 and 19 years. Here's our training schedule:
        </motion.p>

        <div className="bg-background p-6 rounded-lg shadow-md space-y-4 text-left">
          <div>
            <h3 className="text-xl font-semibold text-accent">🗓️ School Holidays</h3>
            <p className="ml-4">Monday – Saturday: <strong>9:00 AM – 11:00 AM</strong></p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent">📅 School Days</h3>
            <p className="ml-4">Monday – Saturday: <strong>4:00 PM – 6:00 PM</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}
