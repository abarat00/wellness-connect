"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState(150);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white">
      <Navbar />
      
      {/* Main Content Layout */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-6">
        
        {/* Page Heading & Search */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Trova il professionista giusto per te
          </h1>
          <p className="text-text-secondary dark:text-gray-400 text-sm mb-6">
            Esplora tra centinaia di specialisti qualificati per la tua salute.
          </p>
          <div className="bg-white dark:bg-surface-dark p-2 rounded-xl shadow-sm border border-[#f0f4f2] dark:border-[#2a4030] flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center bg-background-light dark:bg-background-dark rounded-lg px-3 h-12">
              <span className="material-symbols-outlined text-text-secondary dark:text-gray-400 mr-2">
                search
              </span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-text-secondary dark:placeholder:text-gray-500 focus:outline-none"
                placeholder="Cerca specialista (es. Cardiologo, Nutrizionista)..."
              />
            </div>
            <div className="flex-1 flex items-center bg-background-light dark:bg-background-dark rounded-lg px-3 h-12">
              <span className="material-symbols-outlined text-text-secondary dark:text-gray-400 mr-2">
                location_on
              </span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-text-secondary dark:placeholder:text-gray-500 focus:outline-none"
                placeholder="Dove? (es. Milano, Online)"
              />
            </div>
            <button className="h-12 px-8 bg-primary hover:bg-[#0fd451] text-text-main font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
              Cerca
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white dark:bg-surface-dark rounded-xl p-5 border border-[#f0f4f2] dark:border-[#2a4030] sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">tune</span> Filtra
                Risultati
              </h2>
              <button className="text-xs text-primary font-medium hover:underline">
                Reset
              </button>
            </div>

            {/* Toggle Online/Studio */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                Modalità visita
              </label>
              <div className="flex bg-background-light dark:bg-background-dark p-1 rounded-lg">
                <button className="flex-1 py-2 text-sm font-medium rounded-md bg-white dark:bg-surface-dark shadow-sm text-center">
                  Tutti
                </button>
                <button className="flex-1 py-2 text-sm font-medium rounded-md text-text-secondary dark:text-gray-400 hover:text-text-main dark:hover:text-white text-center">
                  Online
                </button>
                <button className="flex-1 py-2 text-sm font-medium rounded-md text-text-secondary dark:text-gray-400 hover:text-text-main dark:hover:text-white text-center">
                  In Studio
                </button>
              </div>
            </div>

            <hr className="border-[#f0f4f2] dark:border-[#2a4030] mb-6" />

            {/* Availability */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                Disponibilità
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="form-checkbox rounded text-primary border-gray-300 focus:ring-primary h-4 w-4"
                    type="checkbox"
                  />
                  <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-text-main dark:group-hover:text-white">
                    Oggi
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="form-checkbox rounded text-primary border-gray-300 focus:ring-primary h-4 w-4"
                    type="checkbox"
                    defaultChecked
                  />
                  <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-text-main dark:group-hover:text-white">
                    Domani
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="form-checkbox rounded text-primary border-gray-300 focus:ring-primary h-4 w-4"
                    type="checkbox"
                  />
                  <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-text-main dark:group-hover:text-white">
                    Questa settimana
                  </span>
                </label>
              </div>
            </div>

            <hr className="border-[#f0f4f2] dark:border-[#2a4030] mb-6" />

            {/* Specialization */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                Specializzazione
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="form-checkbox rounded text-primary border-gray-300 focus:ring-primary h-4 w-4"
                    type="checkbox"
                    defaultChecked
                  />
                  <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-text-main dark:group-hover:text-white">
                    Fisioterapista
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="form-checkbox rounded text-primary border-gray-300 focus:ring-primary h-4 w-4"
                    type="checkbox"
                  />
                  <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-text-main dark:group-hover:text-white">
                    Nutrizionista
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="form-checkbox rounded text-primary border-gray-300 focus:ring-primary h-4 w-4"
                    type="checkbox"
                  />
                  <span className="text-sm text-text-secondary dark:text-gray-400 group-hover:text-text-main dark:group-hover:text-white">
                    Psicologo
                  </span>
                </label>
              </div>
            </div>

            <hr className="border-[#f0f4f2] dark:border-[#2a4030] mb-6" />

            {/* Price Range */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold">Prezzo</label>
                <span className="text-xs font-medium text-primary">
                  €0 - €{priceRange}
                </span>
              </div>
              <input
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary"
                max="300"
                min="0"
                type="range"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
              />
              <div className="flex justify-between mt-1 text-xs text-text-secondary dark:text-gray-400">
                <span>€0</span>
                <span>€300+</span>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="w-full lg:w-3/4">
            {/* Sort & Map Toggle Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <p className="text-text-main dark:text-white font-medium">
                <span className="font-bold">32</span> professionisti trovati
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <select className="form-select bg-white dark:bg-surface-dark border-none text-sm font-medium rounded-lg py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary cursor-pointer shadow-sm">
                  <option>Ordina per: Consigliati</option>
                  <option>Prezzo: Crescente</option>
                  <option>Prezzo: Decrescente</option>
                  <option>Disponibilità: Prima possibile</option>
                </select>
                <button className="flex items-center gap-2 bg-white dark:bg-surface-dark px-3 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    map
                  </span>
                  <span className="hidden sm:inline">Mappa</span>
                </button>
              </div>
            </div>

            {/* Cards List */}
            <div className="grid grid-cols-1 gap-4">
              {/* Professional Card 1 */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-[#f0f4f2] dark:border-[#2a4030] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-5">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="size-24 rounded-full overflow-hidden bg-gray-100 relative">
                    <img
                      className="w-full h-full object-cover"
                      alt="Portrait of a smiling male doctor in a white coat"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSH8JSdUDJ0TT-3TVK_X-sGMiuS1pjHcPw_NVP8P554cHchXQETGo8tGKcjRNFFXW2ot6i2LrtUX_Y0_O4wk-MALrS6TGUCJomhwMySVuCaw6si0in6hqzrwSi7v_nuq_MD_t7szxsnmP8pKVK971YZwWggn1-NRdgzQ23n2cXAtlDCOgNyRWKczSZN0nafBbfkjIRsYeLtoWTi4ryKrq_-JILLK8n5W9YcTB2bahSPbp_HqbpGJNjtWjCpzpElE8IYy0A7KXqZmk"
                    />
                    <div
                      className="absolute bottom-1 right-1 size-4 bg-primary rounded-full border-2 border-white dark:border-surface-dark"
                      title="Online now"
                    ></div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                    <span className="material-symbols-outlined text-[18px] fill-current">
                      star
                    </span>
                    4.9{" "}
                    <span className="text-text-secondary dark:text-gray-400 font-normal">
                      (124)
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-text-main dark:text-white">
                        Dr. Marco Rossi
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        Fisioterapista • Osteopata
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 hover:text-red-500 cursor-pointer">
                      favorite
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary dark:text-gray-400 line-clamp-2 mb-3">
                    Specializzato in riabilitazione sportiva e terapia manuale.
                    Oltre 10 anni di esperienza nel trattamento di dolori
                    cronici.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-background-light dark:bg-background-dark text-text-secondary dark:text-gray-400">
                      <span className="material-symbols-outlined text-[14px] mr-1">
                        videocam
                      </span>{" "}
                      Consulto Video
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-background-light dark:bg-background-dark text-text-secondary dark:text-gray-400">
                      <span className="material-symbols-outlined text-[14px] mr-1">
                        translate
                      </span>{" "}
                      English
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-secondary dark:text-gray-400 mb-4">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    Via Roma 24, Milano (MI)
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:border-l md:border-[#f0f4f2] md:dark:border-[#2a4030] md:pl-5 min-w-[180px] justify-center">
                  <div className="text-center md:text-right">
                    <p className="text-xs text-text-secondary dark:text-gray-400">
                      Prima visita
                    </p>
                    <p className="text-lg font-bold">€ 80,00</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-2 text-center">
                    <p className="text-xs text-text-secondary dark:text-gray-400 mb-1">
                      Prossima disponibilità
                    </p>
                    <p className="text-sm font-bold text-green-700 dark:text-green-400">
                      Domani, 10:00
                    </p>
                  </div>
                  <Link
                    href="/professionals/1"
                    className="w-full bg-primary hover:bg-[#0fd451] text-text-main font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm text-center"
                  >
                    Prenota Ora
                  </Link>
                </div>
              </div>

              {/* Professional Card 2 */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-[#f0f4f2] dark:border-[#2a4030] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-5">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="size-24 rounded-full overflow-hidden bg-gray-100 relative">
                    <img
                      className="w-full h-full object-cover"
                      alt="Portrait of a female doctor smiling warmly wearing a stethoscope"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNlkbGIT9ueUUqnLU8cWRi2SesgUYWYcjLSQ1YyrArgR2roLfZxZsu2NGn0-mT2xr7axnJQbo1JnLuXyq5VZrDdWEHOB1KQJ8E_QvEl2cHBG8o9k0ofNrKulcbnO2JZMcngfibKtJO7A968Mxi6TQYpVexutefKwz-I9Xanu7HJKKdDuf5LzXhdpK7GBRR9Hz9nufL4popKW7qdMYWt4AMFJRVtzl48aV-GYuoeIy-oYr4kiI60J2TliXMTDgHML7XvKVpKqWcLuI"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                    <span className="material-symbols-outlined text-[18px] fill-current">
                      star
                    </span>
                    5.0{" "}
                    <span className="text-text-secondary dark:text-gray-400 font-normal">
                      (86)
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-text-main dark:text-white">
                          Dr.ssa Laura Bianchi
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          Nutrizionista
                        </p>
                      </div>
                      <span
                        className="material-symbols-outlined text-primary text-[20px]"
                        title="Verified Professional"
                      >
                        verified
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 hover:text-red-500 cursor-pointer">
                      favorite
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary dark:text-gray-400 line-clamp-2 mb-3">
                    Piani alimentari personalizzati per sportivi e perdita di
                    peso. Approccio olistico al benessere.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-background-light dark:bg-background-dark text-text-secondary dark:text-gray-400">
                      <span className="material-symbols-outlined text-[14px] mr-1">
                        videocam
                      </span>{" "}
                      Solo Online
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-secondary dark:text-gray-400 mb-4">
                    <span className="material-symbols-outlined text-[16px]">
                      map
                    </span>
                    Videochiamata
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:border-l md:border-[#f0f4f2] md:dark:border-[#2a4030] md:pl-5 min-w-[180px] justify-center">
                  <div className="text-center md:text-right">
                    <p className="text-xs text-text-secondary dark:text-gray-400">
                      Prima visita
                    </p>
                    <p className="text-lg font-bold">€ 60,00</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-2 text-center">
                    <p className="text-xs text-text-secondary dark:text-gray-400 mb-1">
                      Prossima disponibilità
                    </p>
                    <p className="text-sm font-bold text-green-700 dark:text-green-400">
                      Oggi, 16:30
                    </p>
                  </div>
                  <button className="w-full bg-primary hover:bg-[#0fd451] text-text-main font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm">
                    Prenota Ora
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-[#f0f4f2] dark:border-[#2a4030] text-text-secondary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined text-sm">
                  arrow_back_ios_new
                </span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-text-main font-bold shadow-md">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-[#f0f4f2] dark:border-[#2a4030] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                2
              </button>
              <span className="flex items-end justify-center px-1 text-text-secondary">
                ...
              </span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-[#f0f4f2] dark:border-[#2a4030] text-text-secondary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined text-sm">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}