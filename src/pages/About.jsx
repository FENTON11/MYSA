
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white text-dark py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary">Maragua Youth Soccer Academy</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Located in Gakoigo, Maragua, our academy is dedicated to developing young football talent
          between the ages of 7 and 19. We provide structured training, mentorship, and opportunities to grow on and off the pitch.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "🏃 Age Groups",
              text: "We welcome boys and girls aged 7–19 with tailored training by age level.",
            },
            {
              title: "⚽ Expert Coaching",
              text: "Led by passionate coaches to guide skill, discipline, and teamwork.",
            },
            {
              title: "🌱 Growth & Discipline",
              text: "We emphasize character, academic balance, and leadership through sports.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-200 rounded-lg bg-background hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-accent">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
