// // src/components/Hero.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import heroImage from "../assets/hero.jpg"
// export default function Hero() {
//   return (
//     <section className="bg-background text-dark px-6 py-16 md:flex items-center justify-between">
//       <div className="md:w-1/2 space-y-6">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Empowering the Next Generation of Champions
//         </h1>
//         <p className="text-lg text-dark/70">
//           At Maragua Youth Soccer Academy, we nurture talent, build discipline, and inspire excellence on and off the pitch.
//         </p>
//         <Link
//           to="/register"
//           className="inline-block bg-accent text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
//         >
//           Join Us Now
//         </Link>
//       </div>

//       <div className="md:w-1/2 mt-10 md:mt-0">
//         <img
//           src={heroImage}
//           alt="Kids playing football"
//           className="w-full max-h-[400px] object-contain"
//         />
//       </div>
//     </section>
//   );
// }
// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg"; // Adjust the path as necessary
export default function Hero() {
  return (
    <section className="bg-background text-dark py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to <span className="text-primary">Maragua Youth Soccer Academy</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            Nurturing football talent from a young age. Ages 7–19 welcome.
            Train hard. Play smart. Become a champion.
          </p>
          <Link
            to="/register"
            className="inline-block bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition duration-300"
          >
            Register Now
          </Link>
        </motion.div>

        {/* Image */}
        <motion.img
          src={heroImage}
          alt="Soccer kids illustration"
          className="w-full md:w-1/2 max-h-[400px] object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </section>
  );
}
