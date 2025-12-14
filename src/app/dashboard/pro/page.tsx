"use client";

import React from "react";
import Link from "next/link";

export default function ProDashboard() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display overflow-hidden">
      {/* Side Navigation */}
      <aside className="hidden lg:flex w-72 flex-col justify-between border-r border-[#e5e7eb] dark:border-[#1f2e25] bg-white dark:bg-[#102216] p-4 h-full">
        <div className="flex flex-col gap-6">
          {/* User Profile Snippet in Sidebar */}
          <div className="flex gap-3 items-center px-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary"
              data-alt="Profile picture of a smiling doctor in a white coat"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC9twM_oR1sIF5tsOYUr8lXu_EvRzxFnPlK6smMkCJwVLh0Q1K6qg4csqUpK2RG3av5bSGF_8RLKi5wVkaXEXNx1Nt-xhZp56zT7kJvDd9TWSck_YTzdociulKnn7pzZVKg5sCK7X8N-QTx7DAj7EcpFi2KhKH538pnFi08dUd6weVFplt3UAbllioPNPUmiGxzI_qGraFfunm5gbdOkHctpVDCNqjhdcAZMcd0Js5S7K7h_o2wFI5cpn-BgwJwBVdU2kbzJvbMEU")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-text-main dark:text-white text-base font-bold leading-normal">
                Dr. Rossi
              </h1>
              <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal">
                Fisioterapista
              </p>
            </div>
          </div>
          {/* Nav Links */}
          <nav className="flex flex-col gap-2">
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary group transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-primary">
                dashboard
              </span>
              <span className="text-text-main dark:text-white text-sm font-bold">
                Panoramica
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f0f4f2] dark:hover:bg-[#1a3525] transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-text-secondary group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-white">
                calendar_month
              </span>
              <span className="text-text-main dark:text-white text-sm font-medium">
                Calendario
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f0f4f2] dark:hover:bg-[#1a3525] transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-text-secondary group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-white">
                book_online
              </span>
              <span className="text-text-main dark:text-white text-sm font-medium">
                Prenotazioni
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f0f4f2] dark:hover:bg-[#1a3525] transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-text-secondary group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-white">
                euro
              </span>
              <span className="text-text-main dark:text-white text-sm font-medium">
                Guadagni
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f0f4f2] dark:hover:bg-[#1a3525] transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-text-secondary group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-white">
                star
              </span>
              <span className="text-text-main dark:text-white text-sm font-medium">
                Recensioni
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f0f4f2] dark:hover:bg-[#1a3525] transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-text-secondary group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-white">
                medical_services
              </span>
              <span className="text-text-main dark:text-white text-sm font-medium">
                Servizi
              </span>
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f0f4f2] dark:hover:bg-[#1a3525] transition-colors group"
            href="#"
          >
            <span className="material-symbols-outlined text-text-secondary group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-white">
              settings
            </span>
            <span className="text-text-main dark:text-white text-sm font-medium">
              Impostazioni
            </span>
          </a>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group"
            href="/login"
          >
            <span className="material-symbols-outlined text-red-500">
              logout
            </span>
            <span className="text-red-500 text-sm font-medium">Esci</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Navigation */}
        <header className="flex items-center justify-between border-b border-[#e5e7eb] dark:border-[#1f2e25] bg-white dark:bg-[#102216] px-8 py-4 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-text-main dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">
              Dashboard
            </h2>
          </div>
          <div className="flex items-center gap-6">
            {/* Search Bar (Hidden on mobile) */}
            <div className="hidden md:flex items-center bg-[#f0f4f2] dark:bg-[#1a3525] rounded-full px-4 py-2 w-64">
              <span className="material-symbols-outlined text-text-secondary text-[20px]">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm text-text-main dark:text-white w-full ml-2 placeholder-text-secondary focus:outline-none"
                placeholder="Cerca pazienti..."
                type="text"
              />
            </div>
            <button className="relative flex items-center justify-center rounded-full size-10 hover:bg-[#f0f4f2] dark:hover:bg-[#1a3525] transition-colors text-text-main dark:text-white">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#102216]"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 md:p-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            {/* Heading Section */}
            <div className="flex flex-wrap justify-between items-end gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">
                  Bentornato, Dr. Rossi
                </h1>
                <p className="text-text-secondary dark:text-gray-400 text-base font-normal">
                  Ecco il riepilogo della tua attività di oggi.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-[#1a3525] border border-[#e5e7eb] dark:border-[#2f4235] text-text-main dark:text-white text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-[#253f30] transition-colors">
                  <span className="material-symbols-outlined text-[18px] mr-2">
                    block
                  </span>
                  Blocca Orario
                </button>
                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-text-main text-sm font-bold shadow-md shadow-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-[18px] mr-2">
                    add
                  </span>
                  Aggiungi Disponibilità
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Stat 1 */}
              <div className="flex flex-col justify-between gap-2 rounded-xl p-5 bg-white dark:bg-[#1a3525] border border-[#dbe6df] dark:border-[#2f4235] shadow-sm">
                <div className="flex justify-between items-start">
                  <p className="text-text-secondary dark:text-gray-400 text-sm font-medium">
                    Appuntamenti Oggi
                  </p>
                  <div className="bg-[#f0f4f2] dark:bg-[#253f30] p-2 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      calendar_today
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-text-main dark:text-white text-3xl font-bold">
                    5
                  </p>
                  <span className="flex items-center text-[#078829] dark:text-primary text-sm font-bold bg-[#e6f4ea] dark:bg-primary/10 px-1.5 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[14px] mr-0.5">
                      trending_up
                    </span>
                    +1
                  </span>
                </div>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col justify-between gap-2 rounded-xl p-5 bg-white dark:bg-[#1a3525] border border-[#dbe6df] dark:border-[#2f4235] shadow-sm">
                <div className="flex justify-between items-start">
                  <p className="text-text-secondary dark:text-gray-400 text-sm font-medium">
                    Richieste in Attesa
                  </p>
                  <div className="bg-[#f0f4f2] dark:bg-[#253f30] p-2 rounded-lg text-orange-500">
                    <span className="material-symbols-outlined text-[20px]">
                      pending_actions
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-text-main dark:text-white text-3xl font-bold">
                    3
                  </p>
                  <span className="text-text-secondary text-xs pb-1">
                    Da confermare
                  </span>
                </div>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col justify-between gap-2 rounded-xl p-5 bg-white dark:bg-[#1a3525] border border-[#dbe6df] dark:border-[#2f4235] shadow-sm">
                <div className="flex justify-between items-start">
                  <p className="text-text-secondary dark:text-gray-400 text-sm font-medium">
                    Guadagni (Mese)
                  </p>
                  <div className="bg-[#f0f4f2] dark:bg-[#253f30] p-2 rounded-lg text-blue-500">
                    <span className="material-symbols-outlined text-[20px]">
                      euro
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-text-main dark:text-white text-3xl font-bold">
                    €2,450
                  </p>
                  <span className="flex items-center text-[#078829] dark:text-primary text-sm font-bold bg-[#e6f4ea] dark:bg-primary/10 px-1.5 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[14px] mr-0.5">
                      trending_up
                    </span>
                    +12%
                  </span>
                </div>
              </div>
              {/* Stat 4 */}
              <div className="flex flex-col justify-between gap-2 rounded-xl p-5 bg-white dark:bg-[#1a3525] border border-[#dbe6df] dark:border-[#2f4235] shadow-sm">
                <div className="flex justify-between items-start">
                  <p className="text-text-secondary dark:text-gray-400 text-sm font-medium">
                    Valutazione Media
                  </p>
                  <div className="bg-[#f0f4f2] dark:bg-[#253f30] p-2 rounded-lg text-yellow-500">
                    <span className="material-symbols-outlined text-[20px]">
                      star
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-text-main dark:text-white text-3xl font-bold">
                    4.8
                  </p>
                  <span className="flex items-center text-[#078829] dark:text-primary text-sm font-bold bg-[#e6f4ea] dark:bg-primary/10 px-1.5 py-0.5 rounded">
                    +0.2
                  </span>
                </div>
              </div>
            </div>

            {/* Split Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Left Column (Schedule & Graph) */}
              <div className="xl:col-span-2 flex flex-col gap-6">
                {/* Agenda / Timeline */}
                <div className="bg-white dark:bg-[#1a3525] rounded-xl border border-[#dbe6df] dark:border-[#2f4235] p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-text-main dark:text-white text-lg font-bold">
                      Agenda di Oggi
                    </h3>
                    <a
                      className="text-sm text-primary font-bold hover:underline"
                      href="#"
                    >
                      Vedi calendario completo
                    </a>
                  </div>
                  <div className="flex flex-col gap-0 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[59px] top-4 bottom-4 w-0.5 bg-[#f0f4f2] dark:bg-[#2f4235]"></div>
                    {/* Event 1: Done */}
                    <div className="flex group">
                      <div className="flex flex-col items-end mr-6 w-10 pt-1">
                        <span className="text-xs font-bold text-text-main dark:text-white">
                          09:00
                        </span>
                        <span className="text-[10px] text-text-secondary">
                          AM
                        </span>
                      </div>
                      <div className="relative z-10 flex flex-col flex-1 pb-8">
                        <div className="absolute -left-[29px] top-1.5 size-3 rounded-full bg-[#dbe6df] border-2 border-white dark:border-[#1a3525]"></div>
                        <div className="bg-[#f9fafb] dark:bg-[#102216]/50 p-4 rounded-lg border border-[#e5e7eb] dark:border-[#2f4235] opacity-60">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-text-main dark:text-white line-through">
                                Marco Bianchi
                              </h4>
                              <p className="text-sm text-text-secondary">
                                Prima Visita • 45 min
                              </p>
                            </div>
                            <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                              Completato
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Event 2: Active */}
                    <div className="flex group">
                      <div className="flex flex-col items-end mr-6 w-10 pt-1">
                        <span className="text-xs font-bold text-primary">
                          11:30
                        </span>
                        <span className="text-[10px] text-primary">AM</span>
                      </div>
                      <div className="relative z-10 flex flex-col flex-1 pb-8">
                        <div className="absolute -left-[31px] top-1 size-4 rounded-full bg-primary border-4 border-[#d1fad9] dark:border-primary/30 shadow-[0_0_0_4px_rgba(19,236,91,0.1)]"></div>
                        <div className="bg-white dark:bg-[#203c2b] p-4 rounded-lg border-l-4 border-l-primary shadow-md border-t border-r border-b border-[#e5e7eb] dark:border-[#2f4235]">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-text-main dark:text-white">
                                Giulia Verdi
                              </h4>
                              <p className="text-sm text-text-secondary dark:text-gray-400">
                                Terapia Manuale • 60 min
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <div
                                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6"
                                  data-alt="Patient avatar"
                                  style={{
                                    backgroundImage:
                                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAist10EGpWGSB1xsdGcg3jD2cTC-D1f5cbXA8UE_n2DQr_5CjwrBgMvL_J2cNxOydPpWLIPmsVDRPlOpp7i5cPpp-ko3zJ3AP1kXVWEgMD4BHfrVdfpBcQK-v7I-jwTJQ9od-A3ouyRh1z0kp_tBaeKrb_sIn3IcGyQYdCdK2qRf_kvkQEWADlnfM5qALqhhQxDIMMzrN5yQyl5U9Rr6M05Ub3i7KOHMkQwiK0_9aKCj4eTfcvYiD8xdqhDiHP6mUYjW8QaS48oDw")',
                                  }}
                                ></div>
                                <span className="text-xs text-text-secondary">
                                  Paziente ricorrente
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="size-8 flex items-center justify-center rounded-full bg-[#f0f4f2] dark:bg-[#102216] text-text-main dark:text-white hover:bg-[#e0ebe5] transition-colors">
                                <span className="material-symbols-outlined text-[18px]">
                                  visibility
                                </span>
                              </button>
                              <button className="size-8 flex items-center justify-center rounded-full bg-primary text-text-main hover:bg-primary/90 transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px]">
                                  check
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Event 3: Upcoming */}
                    <div className="flex group">
                      <div className="flex flex-col items-end mr-6 w-10 pt-1">
                        <span className="text-xs font-bold text-text-main dark:text-white">
                          14:00
                        </span>
                        <span className="text-[10px] text-text-secondary">
                          PM
                        </span>
                      </div>
                      <div className="relative z-10 flex flex-col flex-1 pb-8">
                        <div className="absolute -left-[29px] top-1.5 size-3 rounded-full bg-text-main dark:bg-white border-2 border-white dark:border-[#1a3525]"></div>
                        <div className="bg-white dark:bg-[#1a3525] p-4 rounded-lg border border-[#e5e7eb] dark:border-[#2f4235] hover:border-primary/50 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-text-main dark:text-white">
                                Luca Neri
                              </h4>
                              <p className="text-sm text-text-secondary">
                                Controllo Posturale • 30 min
                              </p>
                            </div>
                            <span className="px-2 py-1 rounded text-xs font-medium bg-[#f0f4f2] text-text-main dark:bg-[#253f30] dark:text-white">
                              Confermato
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Requests & Reviews) */}
              <div className="flex flex-col gap-6">
                {/* Pending Requests Widget */}
                <div className="bg-white dark:bg-[#1a3525] rounded-xl border border-[#dbe6df] dark:border-[#2f4235] shadow-sm flex flex-col h-full">
                  <div className="p-5 border-b border-[#f0f4f2] dark:border-[#2f4235] flex justify-between items-center">
                    <h3 className="text-text-main dark:text-white text-lg font-bold">
                      Richieste <span className="text-primary ml-1">(3)</span>
                    </h3>
                    <button className="text-text-secondary hover:text-text-main dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                  <div className="p-4 flex flex-col gap-4">
                    {/* Request Item 1 */}
                    <div className="flex flex-col gap-3 p-3 rounded-lg bg-[#f9fafb] dark:bg-[#102216]/40 border border-[#f0f4f2] dark:border-[#2f4235]">
                      <div className="flex items-center gap-3">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                          data-alt="Patient request avatar"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlSfrZ2GjF8JauAWrvSC1vsDbGA5Dy_W2Y3Tv9EqMRpfTMcb3RYbZoDabFyzjTE5C8_5y6H2aZnO4Dkb-t99m9u1q8xq9YMvAByeeWj1oTn_AWQ60-xnznvIsVy5GCG2B8uXmfuRMLWLY5prZ_9jID0WVBwbGQ6HTDHXYJ89kXrm12O7iB89q5F4V1v6Tt-l3qRgEVyIOVPC95nYe5mOvfiVIeMSVKksR9w7L9wG5LuVxf7y0ps5_VQN37cb4chadwWl3RH7KddjE")',
                          }}
                        ></div>
                        <div>
                          <p className="text-sm font-bold text-text-main dark:text-white">
                            Roberto Mancini
                          </p>
                          <p className="text-xs text-text-secondary">
                            Domani, 10:00 - Fisioterapia
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-1.5 rounded bg-primary text-text-main text-xs font-bold hover:bg-primary/90 transition-colors">
                          Accetta
                        </button>
                        <button className="flex-1 py-1.5 rounded bg-white dark:bg-[#253f30] border border-[#e5e7eb] dark:border-[#2f4235] text-text-main dark:text-white text-xs font-bold hover:bg-gray-50 transition-colors">
                          Rifiuta
                        </button>
                      </div>
                    </div>
                    {/* Request Item 2 */}
                    <div className="flex flex-col gap-3 p-3 rounded-lg bg-[#f9fafb] dark:bg-[#102216]/40 border border-[#f0f4f2] dark:border-[#2f4235]">
                      <div className="flex items-center gap-3">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                          data-alt="Patient request avatar"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMTZoqjLwGqgtkZPkUjcHYV7KXrijomtcmiDSgcEqXk2Wl1EyEODtfueFTxzsU5_lvdWvi6N4wfgyuvua4rMLKdjqA_KAWoBgibBidmnzfErS4NerPTqQUHv-ycXibb8JvfHXLAcopC1Vzu3hQfreISWTucxZHXXIK9DGbesAxWGHHXiFvGMtvFQhkVWuj0qgpY1L-sKXqhInfCqJ0yUU9W-JNZ2TMbYHaegXCoNKNOl_ICykm-IeKAErLgPI464-7SmT-SJZ2m1E")',
                          }}
                        ></div>
                        <div>
                          <p className="text-sm font-bold text-text-main dark:text-white">
                            Anna Rossi
                          </p>
                          <p className="text-xs text-text-secondary">
                            Lun 24, 15:30 - Consulto
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-1.5 rounded bg-primary text-text-main text-xs font-bold hover:bg-primary/90 transition-colors">
                          Accetta
                        </button>
                        <button className="flex-1 py-1.5 rounded bg-white dark:bg-[#253f30] border border-[#e5e7eb] dark:border-[#2f4235] text-text-main dark:text-white text-xs font-bold hover:bg-gray-50 transition-colors">
                          Rifiuta
                        </button>
                      </div>
                    </div>
                    <button className="w-full text-center text-sm text-text-secondary font-medium mt-2 hover:text-primary transition-colors">
                      Vedi tutte le richieste
                    </button>
                  </div>
                </div>

                {/* Recent Review Widget */}
                <div className="bg-white dark:bg-[#1a3525] rounded-xl border border-[#dbe6df] dark:border-[#2f4235] shadow-sm p-5">
                  <h3 className="text-text-main dark:text-white text-lg font-bold mb-4">
                    Ultima Recensione
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                          data-alt="Reviewer avatar"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvVdq9nSGAjVW7PTXHIL9qkbuP3dvk5-WjnoZEYk9ZhPNDl9G-GS8h4P9Ni30UyAXteG60lqSUv3NA26ahBxn3vZMq39d28kPBtinXRPi-VMxVNb_c2EdT3BKUquTm3Qhg8EKxz3ABUTMGsKJioqOD_MsFSKAGjiDDsvjVeeZMTVtgwVBTmGqEma5ZpNf25jfV_ASW9aA-q3xr6YFNPw_eInuDJcbaVEdSTPrqNZmPhy7J7608DU3yY4SbGnJVOtOhodamBRKjuIA")',
                          }}
                        ></div>
                        <p className="text-sm font-bold text-text-main dark:text-white">
                          Luigi B.
                        </p>
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
                    <p className="text-sm text-text-secondary italic line-clamp-3">
                      "Molto professionale e attento. Mi ha spiegato tutto
                      nel dettaglio e mi sono sentito subito a mio agio.
                      Consigliatissimo!"
                    </p>
                    <button className="self-start text-xs font-bold text-primary hover:underline">
                      Rispondi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}