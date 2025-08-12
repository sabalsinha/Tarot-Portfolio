import React from "react";

export default function Feedback() {
  const feedbacks = [
    { name: "Priya", text: "The reading was so accurate, I felt seen and understood!" },
    { name: "Rahul", text: "Numerology session changed my perspective on life and choices." },
    { name: "Sabal", text: "So warm and insightful. Highly recommend!" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12bg-blue-900 text-white">
      <h2 className="text-3xl font-bold text-pink-400 mb-8">Client Feedback ❤️</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {feedbacks.map((fb, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-pink-500/20 to-purple-500/20 border border-pink-400/50 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all"
          >
            <p className="italic text-gray-200">"{fb.text}"</p>
            <p className="mt-4 text-pink-300 font-semibold">- {fb.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

