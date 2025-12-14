"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function BookingPage() {
  // Step 1: Date/Time, Step 2: Payment
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white">
      <Navbar />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-40 py-8">
        <div className="flex flex-col max-w-[1200px] w-full mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap gap-2 px-4 mb-6 text-sm">
            <Link
              className="text-text-secondary dark:text-gray-400 font-medium hover:text-primary transition-colors"
              href="/"
            >
              Home
            </Link>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <Link
              className="text-text-secondary dark:text-gray-400 font-medium hover:text-primary transition-colors"
              href="/search"
            >
              Fisioterapia
            </Link>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <span className="text-text-main dark:text-primary font-bold">
              Prenotazione
            </span>
          </nav>

          {/* Page Header */}
          <div className="flex flex-col gap-2 px-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-text-main dark:text-white">
              Completa la tua prenotazione
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg">
              Conferma i dettagli dell'appuntamento e procedi al pagamento sicuro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4">
            {/* LEFT COLUMN: Input Forms */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Step 1: Date & Time */}
              <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-green-700 dark:text-green-400 font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Seleziona Data e Ora</h3>
                </div>
                {/* Always visible or collapsable content */}
                <div className="p-6 flex flex-col md:flex-row gap-8">
                  {/* Calendar */}
                  <div className="flex-1 min-w-[300px]">
                    <div className="flex items-center justify-between mb-4">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <span className="material-symbols-outlined">
                          chevron_left
                        </span>
                      </button>
                      <p className="text-base font-bold text-center">
                        Ottobre 2023
                      </p>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <span className="material-symbols-outlined">
                          chevron_right
                        </span>
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-y-2">
                      <p className="text-center text-xs font-bold text-gray-400 uppercase py-2">
                        Lun
                      </p>
                      <p className="text-center text-xs font-bold text-gray-400 uppercase py-2">
                        Mar
                      </p>
                      <p className="text-center text-xs font-bold text-gray-400 uppercase py-2">
                        Mer
                      </p>
                      <p className="text-center text-xs font-bold text-gray-400 uppercase py-2">
                        Gio
                      </p>
                      <p className="text-center text-xs font-bold text-gray-400 uppercase py-2">
                        Ven
                      </p>
                      <p className="text-center text-xs font-bold text-gray-400 uppercase py-2">
                        Sab
                      </p>
                      <p className="text-center text-xs font-bold text-gray-400 uppercase py-2">
                        Dom
                      </p>
                      {/* Days */}
                      <button className="aspect-square flex items-center justify-center text-sm text-gray-400">
                        28
                      </button>
                      <button className="aspect-square flex items-center justify-center text-sm text-gray-400">
                        29
                      </button>
                      <button className="aspect-square flex items-center justify-center text-sm text-gray-400">
                        30
                      </button>
                      <button className="aspect-square flex items-center justify-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        1
                      </button>
                      <button className="aspect-square flex items-center justify-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        2
                      </button>
                      <button className="aspect-square flex items-center justify-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        3
                      </button>
                      <button className="aspect-square flex items-center justify-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        4
                      </button>
                      <button className="aspect-square flex items-center justify-center text-sm font-bold bg-primary text-text-main rounded-full shadow-md shadow-green-500/20">
                        5
                      </button>
                      <button className="aspect-square flex items-center justify-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        6
                      </button>
                      {/* ... other days ... */}
                    </div>
                  </div>
                  {/* Time Slots */}
                  <div className="flex-1 flex flex-col gap-4 border-l border-gray-100 dark:border-gray-800 pl-0 md:pl-8 pt-4 md:pt-0">
                    <h4 className="font-bold text-gray-700 dark:text-gray-200">
                      Mattina
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <button className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:text-primary dark:hover:text-primary transition-all">
                        09:00
                      </button>
                      <button className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:text-primary dark:hover:text-primary transition-all">
                        09:30
                      </button>
                      <button className="py-2 px-4 rounded-lg bg-primary text-text-main text-sm font-bold shadow-sm">
                        10:00
                      </button>
                      <button className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:text-primary dark:hover:text-primary transition-all text-gray-300 dark:text-gray-600 line-through cursor-not-allowed">
                        10:30
                      </button>
                    </div>
                    <h4 className="font-bold text-gray-700 dark:text-gray-200 mt-2">
                      Pomeriggio
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <button className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:text-primary dark:hover:text-primary transition-all">
                        14:00
                      </button>
                      <button className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:text-primary dark:hover:text-primary transition-all">
                        14:30
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 2: Payment Method */}
              <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-green-700 dark:text-green-400 font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Metodo di Pagamento</h3>
                </div>
                <div className="p-6 space-y-6">
                  {/* Payment Tabs */}
                  <div className="flex gap-4 mb-6 overflow-x-auto hide-scrollbar pb-2">
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary text-green-800 dark:text-green-300 rounded-lg whitespace-nowrap font-bold">
                      <span className="material-symbols-outlined">
                        credit_card
                      </span>
                      Carta di Credito
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg whitespace-nowrap font-medium transition-colors">
                      <span className="material-symbols-outlined">
                        account_balance_wallet
                      </span>
                      PayPal
                    </button>
                  </div>
                  {/* Card Form */}
                  <form className="space-y-5">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        Intestatario Carta
                      </label>
                      <div className="relative">
                        <input
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:text-white"
                          placeholder="Mario Rossi"
                          type="text"
                        />
                        <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">
                          person
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        Numero Carta
                      </label>
                      <div className="relative">
                        <input
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:text-white"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                        <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">
                          credit_card
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          Scadenza
                        </label>
                        <div className="relative">
                          <input
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:text-white"
                            placeholder="MM/YY"
                            type="text"
                          />
                          <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">
                            calendar_month
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                          CVV
                          <span
                            className="material-symbols-outlined text-sm text-gray-400 cursor-help"
                            title="Codice di 3 cifre sul retro"
                          >
                            help
                          </span>
                        </label>
                        <div className="relative">
                          <input
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary dark:text-white"
                            placeholder="123"
                            type="text"
                          />
                          <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">
                            lock
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: Sticky Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-6">
                {/* Summary Card */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                  <h3 className="text-lg font-bold mb-6 text-text-main dark:text-white">
                    Riepilogo Prenotazione
                  </h3>
                  {/* Doctor Info */}
                  <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                    <div
                      className="size-16 rounded-xl bg-cover bg-center shrink-0"
                      data-alt="Dr. Marco Valli profile picture, a male doctor in white coat smiling"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSuCUs99FXp2uEj-3OQ1Kchq3lX1BPHZdsQszC7KFSda5LkuYomc3BiEEYI7DRFkg-uUq005fxIGD6Z-pvNsAh-HN0QJYDQItwV6ab-ORKvA2UIXQ81Gs3BsN4JIjzChrByPuoQFuLL3E3MUMk-0seD4du4b2W_H_uFlfiime4wlo-y7PI9BPU1WWzmI2C4p4OTpxT7qoh4SbcU2aZVQoGYyUjpusbnkrw797OGQPH9iyKdGTzJdBv2lxp2Y4DKCwllWCzD5BA9wY')",
                      }}
                    ></div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wide">
                        Fisioterapista
                      </p>
                      <h4 className="font-bold text-text-main dark:text-white text-lg leading-tight">
                        Dr. Marco Rossi
                      </h4>
                      <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
                        <span className="material-symbols-outlined text-sm">
                          star
                        </span>
                        <span>4.9 (120+ recensioni)</span>
                      </div>
                    </div>
                  </div>
                  {/* Service Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-text-main dark:text-white">
                          Valutazione Iniziale
                        </p>
                        <p className="text-sm text-gray-500">
                          Studio Medico, Via Roma 24
                        </p>
                      </div>
                      <p className="font-medium text-text-main dark:text-white">
                        1h
                      </p>
                    </div>
                    <div className="bg-background-light dark:bg-[#15221b] p-3 rounded-lg flex items-center gap-3">
                      <div className="bg-primary/20 p-2 rounded-lg text-green-700 dark:text-green-400">
                        <span className="material-symbols-outlined">
                          calendar_today
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">
                          Data e Ora
                        </p>
                        <p className="text-sm font-bold text-text-main dark:text-white">
                          5 Ottobre 2023, 10:00
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Price Breakdown */}
                  <div className="space-y-3 pb-6 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Servizio</span>
                      <span>€ 80,00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Costi di servizio</span>
                      <span>€ 2,00</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600 font-medium">
                      <span>Sconto Promo</span>
                      <span>- € 10,00</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 mb-4">
                    <span className="font-bold text-lg text-text-main dark:text-white">
                      Totale
                    </span>
                    <span className="font-black text-2xl text-text-main dark:text-white">
                      € 72,00
                    </span>
                  </div>
                  <button className="w-full bg-primary hover:bg-[#0fd451] text-text-main font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2 group">
                    <span>Paga e Prenota</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      lock
                    </span>
                    Pagamenti sicuri e criptati SSL
                  </p>
                </div>
                {/* Trust/Cancellation Policy */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex gap-3 items-start border border-blue-100 dark:border-blue-900/50">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">
                    verified_user
                  </span>
                  <div>
                    <p className="text-sm font-bold text-blue-800 dark:text-blue-300">
                      Cancellazione Gratuita
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      Puoi cancellare gratuitamente fino a 24 ore prima
                      dell'appuntamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}