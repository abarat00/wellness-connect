"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ProfessionalProfilePage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Main Profile Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Profile Header Card */}
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="relative shrink-0">
                  <div
                    aria-label="Portrait of Dr. Marco Rossi"
                    className="h-32 w-32 rounded-full overflow-hidden border-4 border-background-light dark:border-gray-700 bg-gray-200"
                    role="img"
                  >
                    <img
                      alt="Professional portrait of a male doctor smiling"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf0WkZAjPkmJ5uZh88NNuKGvnc4s90ZVKXoCv6-IRNkFJbDE4dzBi8gqBqQ9tc5OAGuOOxAuaCMFBZc5yaN8a-xKS-SWyXlQYcfBCTw7AzdU_ReTPFU0F3ENW7mbduItaxU-BUpM5e-xNcZDPenCjPqdXSwBx0-KJXPcBAHG0hH51eFgFD5W9JKG6_RO2LZE4mZv5rdNQ_zeTUHhZOBV5XUCt96CFjc21IFdbOwuZuHN32R69Na3iCYBUzxo0GjIAI-Gd4NKJ3zZU"
                    />
                  </div>
                  <div
                    className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-white dark:border-surface-dark flex items-center justify-center"
                    title="Verified Professional"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">
                        Dr. Marco Rossi
                      </h1>
                      <p className="text-text-secondary dark:text-gray-400 font-medium">
                        Fisioterapista & Osteopata
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full border border-yellow-100 dark:border-yellow-900/50">
                      <span className="material-symbols-outlined text-yellow-500 text-sm">
                        star
                      </span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                        4.9
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        (128 recensioni)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary dark:text-gray-400 mt-2">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">
                        location_on
                      </span>
                      <span>Milano, Italia</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">
                        work_history
                      </span>
                      <span>15+ anni di esperienza</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">
                        translate
                      </span>
                      <span>Italiano, Inglese</span>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-10 px-6 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-main dark:text-white text-sm font-bold transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        share
                      </span>
                      <span>Condividi</span>
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-10 px-6 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-main dark:text-white text-sm font-bold transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        favorite
                      </span>
                      <span>Salva</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden sticky top-[72px] z-40">
              <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-gray-800">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`px-6 py-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                    activeTab === "about"
                      ? "border-primary text-text-main dark:text-white"
                      : "border-transparent text-text-secondary dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  Chi sono
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`px-6 py-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                    activeTab === "services"
                      ? "border-primary text-text-main dark:text-white"
                      : "border-transparent text-text-secondary dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  Servizi e Prezzi
                </button>
                <button
                  onClick={() => setActiveTab("credentials")}
                  className={`px-6 py-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                    activeTab === "credentials"
                      ? "border-primary text-text-main dark:text-white"
                      : "border-transparent text-text-secondary dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  Esperienza
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-6 py-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                    activeTab === "reviews"
                      ? "border-primary text-text-main dark:text-white"
                      : "border-transparent text-text-secondary dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  Recensioni
                </button>
              </div>
            </div>

            {/* About Section */}
            {activeTab === "about" && (
              <section
                className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8"
                id="about"
              >
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    person
                  </span>
                  Biografia
                </h3>
                <div className="prose prose-green dark:prose-invert max-w-none text-text-secondary dark:text-gray-300 leading-relaxed">
                  <p>
                    Sono un fisioterapista specializzato nella riabilitazione
                    post-traumatica e sportiva con oltre 15 anni di esperienza
                    clinica. Il mio approccio è olistico e combina tecniche
                    manuali avanzate con esercizi terapeutici personalizzati per
                    garantire non solo un recupero rapido, ma duraturo nel
                    tempo.
                  </p>
                  <p className="mt-4">
                    Credo fermamente nell'educazione del paziente: il mio
                    obiettivo è darti gli strumenti per comprendere il tuo corpo
                    e prevenire futuri infortuni. Ho lavorato con atleti
                    professionisti e squadre olimpiche, portando lo stesso
                    livello di cura e attenzione a tutti i miei pazienti.
                  </p>
                </div>
              </section>
            )}

            {/* Services Section */}
            {activeTab === "services" && (
              <section
                className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8"
                id="services"
              >
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    medical_services
                  </span>
                  Servizi Offerti
                </h3>
                <div className="grid gap-4">
                  {/* Service Item 1 */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary/50 hover:bg-green-50/30 dark:hover:bg-green-900/10 transition-all cursor-pointer group">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                          Prima Visita Fisioterapica
                        </h4>
                        <span
                          className="material-symbols-outlined text-gray-400 text-sm"
                          title="Info"
                        >
                          info
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                        Valutazione completa, diagnosi e piano di trattamento
                        iniziale.
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-0 text-right min-w-[100px]">
                      <p className="font-bold text-lg text-text-main dark:text-white">
                        €80
                      </p>
                      <p className="text-xs text-text-secondary dark:text-gray-400">
                        60 min
                      </p>
                    </div>
                  </div>
                  {/* Service Item 2 */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary/50 hover:bg-green-50/30 dark:hover:bg-green-900/10 transition-all cursor-pointer group">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                          Seduta di Osteopatia
                        </h4>
                      </div>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                        Trattamento manuale per ripristinare l'equilibrio
                        strutturale.
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-0 text-right min-w-[100px]">
                      <p className="font-bold text-lg text-text-main dark:text-white">
                        €70
                      </p>
                      <p className="text-xs text-text-secondary dark:text-gray-400">
                        45 min
                      </p>
                    </div>
                  </div>
                  {/* Service Item 3 */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary/50 hover:bg-green-50/30 dark:hover:bg-green-900/10 transition-all cursor-pointer group">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                          Riabilitazione Sportiva
                        </h4>
                      </div>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                        Percorso specifico per il ritorno all'attività agonistica.
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-0 text-right min-w-[100px]">
                      <p className="font-bold text-lg text-text-main dark:text-white">
                        €60
                      </p>
                      <p className="text-xs text-text-secondary dark:text-gray-400">
                        45 min
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Credentials Section */}
            {activeTab === "credentials" && (
              <section
                className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8"
                id="credentials"
              >
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    school
                  </span>
                  Formazione ed Esperienza
                </h3>
                <div className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-700 space-y-8">
                  {/* Item 1 */}
                  <div className="relative">
                    <div className="absolute -left-[41px] bg-white dark:bg-surface-dark p-1">
                      <div className="h-4 w-4 rounded-full bg-primary border-4 border-white dark:border-surface-dark ring-2 ring-primary/20"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main dark:text-white">
                        Master in Osteopatia
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-gray-400">
                        Università degli Studi di Milano • 2015
                      </p>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="relative">
                    <div className="absolute -left-[41px] bg-white dark:bg-surface-dark p-1">
                      <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white dark:border-surface-dark"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main dark:text-white">
                        Laurea in Fisioterapia
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-gray-400">
                        Università di Bologna • 2010
                      </p>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="relative">
                    <div className="absolute -left-[41px] bg-white dark:bg-surface-dark p-1">
                      <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white dark:border-surface-dark"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main dark:text-white">
                        Fisioterapista Senior
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-gray-400">
                        Centro Medico Santagostino • 2012 - Presente
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Reviews Section */}
            {activeTab === "reviews" && (
              <section
                className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8 mb-8"
                id="reviews"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-text-main dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      reviews
                    </span>
                    Recensioni
                  </h3>
                  <div className="hidden sm:flex gap-2">
                    <select className="form-select text-sm border-gray-200 dark:border-gray-700 rounded-lg dark:bg-surface-dark dark:text-gray-300">
                      <option>Più recenti</option>
                      <option>Voto più alto</option>
                    </select>
                  </div>
                </div>
                {/* Rating Summary */}
                <div className="flex flex-col sm:flex-row gap-8 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col justify-center items-center sm:items-start min-w-[140px]">
                    <span className="text-5xl font-black text-text-main dark:text-white tracking-tighter">
                      4.9
                    </span>
                    <div className="flex text-yellow-500 my-2">
                      <span className="material-symbols-outlined text-[20px] fill-current">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px] fill-current">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px] fill-current">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px] fill-current">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px] fill-current">
                        star_half
                      </span>
                    </div>
                    <span className="text-sm text-text-secondary dark:text-gray-400">
                      Basato su 128 recensioni
                    </span>
                  </div>
                  <div className="flex-1 w-full space-y-2">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="w-3 text-right text-text-main dark:text-gray-300 font-medium">
                        5
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <span className="w-8 text-xs text-text-secondary dark:text-gray-400">
                        85%
                      </span>
                    </div>
                    {/* 4 Stars */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="w-3 text-right text-text-main dark:text-gray-300 font-medium">
                        4
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <span className="w-8 text-xs text-text-secondary dark:text-gray-400">
                        10%
                      </span>
                    </div>
                    {/* 3 Stars */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="w-3 text-right text-text-main dark:text-gray-300 font-medium">
                        3
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "3%" }}
                        ></div>
                      </div>
                      <span className="w-8 text-xs text-text-secondary dark:text-gray-400">
                        3%
                      </span>
                    </div>
                    {/* 2 Stars */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="w-3 text-right text-text-main dark:text-gray-300 font-medium">
                        2
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gray-300 dark:bg-gray-600 rounded-full"
                          style={{ width: "1%" }}
                        ></div>
                      </div>
                      <span className="w-8 text-xs text-text-secondary dark:text-gray-400">
                        1%
                      </span>
                    </div>
                    {/* 1 Star */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="w-3 text-right text-text-main dark:text-gray-300 font-medium">
                        1
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gray-300 dark:bg-gray-600 rounded-full"
                          style={{ width: "1%" }}
                        ></div>
                      </div>
                      <span className="w-8 text-xs text-text-secondary dark:text-gray-400">
                        1%
                      </span>
                    </div>
                  </div>
                </div>
                {/* Individual Reviews */}
                <div className="space-y-6">
                  <div className="border-b border-gray-50 dark:border-gray-800 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center"
                          data-alt="Portrait of Giulia M."
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwMamph611XghJz8EuNXoX7VCYceJs3GGvcndO3FUZI6h9R9ldhpAIRBWN6MuOONBgFULfzxoTL15ujto8fbNMV172xGK6fGJgXEisdewY22I6e1QEkPKjSQaEDOiRr3lh-qj88lpSF_S22sd3rG_Ax25ZFnMCiPN0AyxA9_fPg51YkupG5H4w0LrjaNsdNGEpU9PCKHWGh3AGhatm4LB981jtrFfEaEEQYy9gLfJb5SFwUjxWwUspCSO0gTs8NrzW8QCw2mN13Tg')",
                          }}
                        ></div>
                        <div>
                          <p className="font-bold text-sm text-text-main dark:text-white">
                            Giulia M.
                          </p>
                          <p className="text-xs text-text-secondary dark:text-gray-400">
                            2 settimane fa
                          </p>
                        </div>
                      </div>
                      <div className="flex text-yellow-500">
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                      </div>
                    </div>
                    <p className="text-text-secondary dark:text-gray-300 text-sm leading-relaxed">
                      Il Dott. Rossi mi ha aiutato tantissimo con il mio mal di
                      schiena cronico. Dopo sole tre sedute, il dolore è quasi
                      sparito. Molto professionale e attento.
                    </p>
                  </div>
                  <div className="border-b border-gray-50 dark:border-gray-800 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                          LR
                        </div>
                        <div>
                          <p className="font-bold text-sm text-text-main dark:text-white">
                            Luca R.
                          </p>
                          <p className="text-xs text-text-secondary dark:text-gray-400">
                            1 mese fa
                          </p>
                        </div>
                      </div>
                      <div className="flex text-yellow-500">
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[16px] fill-current">
                          star
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-gray-300">
                          star
                        </span>
                      </div>
                    </div>
                    <p className="text-text-secondary dark:text-gray-300 text-sm leading-relaxed">
                      Ottima esperienza per la riabilitazione del ginocchio.
                      Struttura pulita e moderna.
                    </p>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Mostra tutte le recensioni
                </button>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Main Booking Card */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm font-medium text-text-secondary dark:text-gray-400">
                      Prezzo per visita
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-text-main dark:text-white">
                        €60 - €80
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                    Disponibile oggi
                  </div>
                </div>
                {/* Calendar Visual */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-text-main dark:text-white text-sm">
                      Settembre 2023
                    </h4>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        <span className="material-symbols-outlined text-sm">
                          chevron_left
                        </span>
                      </button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        <span className="material-symbols-outlined text-sm">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* Simple Calendar Grid */}
                  <div className="grid grid-cols-5 gap-2 text-center text-xs mb-3">
                    <div className="text-gray-400">Lun</div>
                    <div className="text-gray-400">Mar</div>
                    <div className="text-gray-400">Mer</div>
                    <div className="text-gray-400">Gio</div>
                    <div className="text-gray-400">Ven</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    <button className="aspect-square flex flex-col items-center justify-center rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-400 cursor-not-allowed opacity-50">
                      <span className="font-bold">18</span>
                    </button>
                    <button className="aspect-square flex flex-col items-center justify-center rounded-lg bg-primary text-text-main hover:bg-[#0fd451] transition-colors shadow-sm ring-2 ring-primary/30">
                      <span className="font-bold">19</span>
                    </button>
                    <button className="aspect-square flex flex-col items-center justify-center rounded-lg border border-primary text-primary hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <span className="font-bold">20</span>
                    </button>
                    <button className="aspect-square flex flex-col items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary transition-colors">
                      <span className="font-bold">21</span>
                    </button>
                    <button className="aspect-square flex flex-col items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary transition-colors">
                      <span className="font-bold">22</span>
                    </button>
                  </div>
                </div>
                {/* Slots */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-text-secondary dark:text-gray-400 uppercase tracking-wider mb-2">
                    Orari disponibili - 19 Set
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="px-2 py-2 rounded border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-primary transition-colors">
                      09:00
                    </button>
                    <button className="px-2 py-2 rounded bg-primary text-text-main text-sm font-bold shadow-sm">
                      10:30
                    </button>
                    <button className="px-2 py-2 rounded border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-primary transition-colors">
                      11:00
                    </button>
                    <button className="px-2 py-2 rounded border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-primary transition-colors">
                      14:30
                    </button>
                    <button className="px-2 py-2 rounded border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-primary transition-colors">
                      16:00
                    </button>
                  </div>
                </div>
                {/* CTA */}
                <Link
                  href="/book"
                  className="w-full bg-primary hover:bg-[#0fd451] text-text-main font-bold py-3 px-4 rounded-xl shadow-md transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Prenota Appuntamento</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
                <p className="text-xs text-center text-text-secondary dark:text-gray-500 mt-3">
                  Nessun pagamento richiesto ora.
                </p>
              </div>
              {/* Map/Location Widget */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-text-secondary">
                    map
                  </span>
                  <h4 className="font-bold text-text-main dark:text-white text-sm">
                    Studio Medico
                  </h4>
                </div>
                <div className="h-32 w-full rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden mb-3">
                  <img
                    alt="Map snippet showing location in Milan"
                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMK02F3DVZBhpyHDAG1EFEeI1bwvAljl5LpvxQEnmM35olc1miZRsaeVq_8k7tp3e__RUY9Sxjgl_lHCBkBf9TeCVmtuxxyZixfH4OnaHYVSUuq2zEFeZkrX3psH5gu94MPLnM3AeRtOI2-1alwolK7FguOewPpIHKvWRlVWoo6oFBt-vPv1pf3bU7kEI90Q5wCPKw5HpjzueqIv9Qg8PmRYgxbzmrzYcPvCFfz4rUdiGaFjIpcYym3HlS_BwIFcfh-QGfmHgLQPY"
                  />
                </div>
                <p className="text-sm text-text-secondary dark:text-gray-400">
                  Via Dante Alighieri 12, Milano
                </p>
                <a
                  className="text-xs font-bold text-primary hover:underline mt-1 block"
                  href="#"
                >
                  Ottieni indicazioni
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}