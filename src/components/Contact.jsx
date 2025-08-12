import React from "react";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
            <h2 className="text-3xl font-bold text-pink-400 mb-6">Contact Me 📩</h2>
            <p className="mb-4">Book your session via Instagram or WhatsApp</p>
            <div className="flex gap-6">
                <a href="https://instagram.com/tarotwithniishhi" target="_blank" className="hover:text-pink-400">Instagram</a>
                <a
                    href="https://wa.me/8252112037?text=Hi%20I%20would%20like%20to%20book%20a%20session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400"
                >
                    WhatsApp
                </a>
            </div>
        </div>
    );
}
