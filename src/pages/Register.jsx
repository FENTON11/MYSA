import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    guardian_phone: "",
    position: "",
    honeypot: "", // 👈 Honeypot field
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      alert("Spam detected.");
      return;
    }

    setLoading(true);

    const dataWithTimestamp = {
      name: formData.name,
      age: formData.age,
      guardian_phone: formData.guardian_phone,
      position: formData.position,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://sheetdb.io/api/v1/67gtzy6jhdt9p", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataWithTimestamp }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          age: "",
          guardian_phone: "",
          position: "",
          honeypot: "",
        });
      } else {
        alert("Error submitting. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <motion.h2
          className="text-3xl font-bold text-center text-dark mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Player Registration
        </motion.h2>

        {submitted ? (
          <p className="text-green-700 text-center font-medium">
            ✅ Registration submitted successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot input (invisible to users) */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
            />

            <div>
              <label className="block mb-1 font-medium text-dark">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-gray-400 text-dark"
                placeholder="Enter player's full name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-dark">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min={7}
                max={19}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-gray-400 text-dark"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-dark">Parent/Guardian Phone</label>
              <input
                type="tel"
                name="guardian_phone"
                value={formData.guardian_phone}
                onChange={handleChange}
                placeholder="e.g. 0706xxxxxx"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-gray-400 text-dark"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-dark">Preferred Position</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-gray-400 text-dark"
                required
              >
                <option value="">-- Select --</option>
                <option>Goalkeeper</option>
                <option>Defender</option>
                <option>Midfielder</option>
                <option>Forward</option>
              </select>
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className={`w-full bg-accent text-white py-3 rounded font-semibold transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "hover:bg-green-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
