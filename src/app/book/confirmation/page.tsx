"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ConfirmationPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animate content after checkmark
    const timer = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // Generate fake confirmation number
  const confirmationNumber = "WC-2024-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full">
          {/* Success Card */}
          <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 text-center">
            {/* Animated Checkmark */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <svg
                  className="w-12 h-12 text-white animate-[scale-in_0.3s_ease-out_0.2s_both]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                    className="animate-[draw_0.4s_ease-out_0.3s_both]"
                    style={{
                      strokeDasharray: 24,
                      strokeDashoffset: 24,
                      animation: "draw 0.4s ease-out 0.3s forwards",
                    }}
                  />
                </svg>
              </div>
            </div>

            <div
              className={`transition-all duration-500 ${
                showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-2xl md:text-3xl font-black text-text-main dark:text-white mb-2">
                Prenotazione Confermata!
              </h1>
              <p className="text-text-secondary dark:text-gray-400 mb-6">
                Abbiamo inviato i dettagli alla tua email
              </p>

              {/* Confirmation Number */}
              <div className="bg-background-light dark:bg-[#15221b] rounded-xl p-4 mb-6">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  Numero Conferma
                </p>
                <p className="text-xl font-mono font-bold text-primary">
                  {confirmationNumber}
                </p>
              </div>

              {/* Appointment Details */}
              <div className="bg-gray-50 dark:bg-[#1a1f1c] rounded-xl p-5 mb-6 text-left">
                <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div
                    className="w-14 h-14 rounded-xl bg-cover bg-center shrink-0"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSuCUs99FXp2uEj-3OQ1Kchq3lX1BPHZdsQszC7KFSda5LkuYomc3BiEEYI7DRFkg-uUq005fxIGD6Z-pvNsAh-HN0QJYDQItwV6ab-ORKvA2UIXQ81Gs3BsN4JIjzChrByPuoQFuLL3E3MUMk-0seD4du4b2W_H_uFlfiime4wlo-y7PI9BPU1WWzmI2C4p4OTpxT7qoh4SbcU2aZVQoGYyUjpusbnkrw797OGQPH9iyKdGTzJdBv2lxp2Y4DKCwllWCzD5BA9wY')",
                    }}
                  />
                  <div>
                    <p className="text-xs font-bold text-primary uppercase">Fisioterapista</p>
                    <h3 className="font-bold text-text-main dark:text-white">Dr. Marco Rossi</h3>
                    <p className="text-sm text-gray-500">Valutazione Iniziale</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">calendar_today</span>
                    <div>
                      <p className="text-sm font-bold text-text-main dark:text-white">
                        5 Ottobre 2023
                      </p>
                      <p className="text-xs text-gray-500">ore 10:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <div>
                      <p className="text-sm font-bold text-text-main dark:text-white">
                        Studio Medico
                      </p>
                      <p className="text-xs text-gray-500">Via Roma 24, Milano</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    <div>
                      <p className="text-sm font-bold text-text-main dark:text-white">
                        Pagato: € 72,00
                      </p>
                      <p className="text-xs text-gray-500">Carta **** 4242</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/dashboard/user" className="flex-1">
                  <button className="w-full bg-primary hover:bg-[#0fd451] text-text-main font-bold py-3 px-6 rounded-xl shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">dashboard</span>
                    Vai alla Dashboard
                  </button>
                </Link>
                <Link href="/" className="flex-1">
                  <button className="w-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-bold py-3 px-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">home</span>
                    Torna alla Home
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Hai domande?{" "}
              <Link href="/contatti" className="text-primary hover:underline font-medium">
                Contatta il supporto
              </Link>
            </p>
          </div>

          {/* Calendar Add Suggestion */}
          <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 flex items-center gap-3 border border-blue-100 dark:border-blue-800">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">
              event
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                Aggiungi al calendario
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                Non dimenticare il tuo appuntamento
              </p>
            </div>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
