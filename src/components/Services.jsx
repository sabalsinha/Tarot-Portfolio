import React, { useState } from "react";

export default function Services() {
  const services = [
    { name: "Love Guidance Spread", price: "₹299", details: "A detailed tarot spread focusing on your love life, relationships, and emotional clarity." },
    { name: "Career Path Reading", price: "₹349", details: "Guidance for your career path, job opportunities, and future professional growth." },
    { name: "Full Life Guidance", price: "₹599", details: "Covers all aspects of life including love, career, finances, and spiritual well-being." },
    { name: "Numerology Name Analysis", price: "₹399", details: "Analyze your name and date of birth to find your life path and unlock hidden potentials." },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <h2 className="text-3xl font-bold text-pink-400 mb-8">Services & Packages 💫</h2>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedService(service)}
            className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="mt-2 text-pink-300">{service.price}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full relative animate-scaleIn">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              onClick={() => setSelectedService(null)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">
              {selectedService.name}
            </h3>
            <p className="mb-4">{selectedService.details}</p>
            <p className="text-lg font-semibold text-pink-500">
              {selectedService.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
