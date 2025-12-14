"use client";

import React from "react";
import Link from "next/link";

export default function UserDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 font-display">
      {/* Sidebar Navigation */}
      <aside className="w-72 hidden md:flex flex-col bg-white dark:bg-surface-dark border-r border-[#f0f4f2] dark:border-[#2a4032] transition-colors duration-200">
        <div className="flex flex-col h-full p-6">
          {/* Logo & User Profile Summary */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-sm"
              data-alt="User profile picture showing a smiling man"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbR2TWiq1bYrNdxJ6yiB9QPz6d9M-8db6EMEPQpcb_15x_Cu4jOR33c_mAgSx6zZJTIGZdmXiW0CfUOFJ8Nsz-0wY8bWOlb-F7gthSfysQgCb0fKF_0XPfJykz3c5nmHb9DIb3Ajbsf-aHA3BzupdnvNI1qX1h-Jnd9oLXR-gX6aUpWSBCDeLXeGrHBmwSTulKzas9r8EeAz4ISECDCU7nQmc2hue1CVAhRj7eVLVxcDIJN6-GJCR8ocSck1rcFqS7amIPWpQQx1U")',
              }}
            ></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-text-main dark:text-white text-base font-bold leading-tight truncate">
                Marco Rossi
              </h1>
              <p className="text-text-secondary dark:text-gray-400 text-xs font-medium leading-normal">
                Premium Member
              </p>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 flex-1">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/20 dark:bg-primary/10 text-text-main dark:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                dashboard
              </span>
              <p className="text-sm font-bold leading-normal">Dashboard</p>
            </a>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-[#f0f4f2] dark:hover:bg-[#2a4032] transition-colors"
              href="/search"
            >
              <span className="material-symbols-outlined text-[24px]">
                search
              </span>
              <p className="text-sm font-medium leading-normal">Cerca</p>
            </Link>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-[#f0f4f2] dark:hover:bg-[#2a4032] transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                calendar_month
              </span>
              <p className="text-sm font-medium leading-normal">Prenotazioni</p>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-[#f0f4f2] dark:hover:bg-[#2a4032] transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                history
              </span>
              <p className="text-sm font-medium leading-normal">Storico</p>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-[#f0f4f2] dark:hover:bg-[#2a4032] transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                chat
              </span>
              <p className="text-sm font-medium leading-normal">Messaggi</p>
            </a>
          </nav>
          {/* Bottom Links */}
          <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-[#f0f4f2] dark:border-[#2a4032]">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-[#f0f4f2] dark:hover:bg-[#2a4032] transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                settings
              </span>
              <p className="text-sm font-medium leading-normal">Impostazioni</p>
            </a>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-[#f0f4f2] dark:hover:bg-[#2a4032] transition-colors"
              href="/login"
            >
              <span className="material-symbols-outlined text-[24px]">
                logout
              </span>
              <p className="text-sm font-medium leading-normal">Esci</p>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative scroll-smooth">
        {/* Top Mobile Header (Visible only on small screens) */}
        <header className="md:hidden flex items-center justify-between px-6 py-4 bg-white dark:bg-surface-dark border-b border-[#f0f4f2] dark:border-[#2a4032] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-text-main dark:text-white">
              menu
            </span>
            <h1 className="text-lg font-bold text-text-main dark:text-white">
              WellnessConnect
            </h1>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
            data-alt="User profile picture small"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWKcaZWNXSQBc2O5CyYVS9RTevygdrZ9QfNlk97KFRe3gVJzpjeN91Ykpw4HZ21b5b0Cebv0193bxz8rsd6YtMesxn-Lv7RaSPV_Qt8ObtDCZcbJOI6TZByWRO9maLKGCCkFVycPVp_GFMbVT8xfFvZs2_SUsi0Upuq6hGIfjDFw6Tztq6XucG7drdCdJuZ5YJ4lP82W96E3pBvKBE7PCD12F93tMnAQAesProjLyrNOCYfJ1pekPtP_d55AfihEUtU5hVX2dlHLg")',
            }}
          ></div>
        </header>

        {/* Desktop Top Bar (User Actions) */}
        <div className="hidden md:flex justify-between items-center px-10 py-5 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
          <h2 className="text-xl font-bold text-text-main dark:text-white tracking-tight">
            Dashboard Utente
          </h2>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark text-text-main dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-[#2a4032] transition">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark text-text-main dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-[#2a4032] transition">
              <span className="material-symbols-outlined text-[20px]">
                help
              </span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="px-6 md:px-10 pb-10 flex flex-col gap-8 max-w-[1280px] mx-auto w-full">
          {/* Welcome & Search Section */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white leading-tight tracking-[-0.033em]">
                Bentornato, Marco!
              </h1>
              <p className="text-text-secondary dark:text-gray-400 text-base md:text-lg">
                Di cosa hai bisogno per la tua salute oggi?
              </p>
            </div>
            {/* Search Box */}
            <div className="bg-white dark:bg-surface-dark p-4 md:p-6 rounded-2xl shadow-sm border border-[#f0f4f2] dark:border-[#2a4032]">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <label className="flex flex-col w-full md:flex-1">
                  <p className="text-text-main dark:text-gray-200 text-sm font-bold leading-normal pb-2 ml-1">
                    Specialista o Trattamento
                  </p>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
                      <span className="material-symbols-outlined">search</span>
                    </span>
                    <input
                      className="w-full h-12 md:h-14 pl-12 pr-4 rounded-xl bg-[#f6f8f6] dark:bg-[#102216] border-transparent focus:border-primary focus:ring-0 text-text-main dark:text-white placeholder:text-text-secondary text-base font-medium transition-all"
                      placeholder="Es. Fisioterapista, Massaggio..."
                    />
                  </div>
                </label>
                <label className="flex flex-col w-full md:flex-1">
                  <p className="text-text-main dark:text-gray-200 text-sm font-bold leading-normal pb-2 ml-1">
                    Località
                  </p>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </span>
                    <input
                      className="w-full h-12 md:h-14 pl-12 pr-4 rounded-xl bg-[#f6f8f6] dark:bg-[#102216] border-transparent focus:border-primary focus:ring-0 text-text-main dark:text-white placeholder:text-text-secondary text-base font-medium transition-all"
                      placeholder="Es. Roma, Milano..."
                    />
                  </div>
                </label>
                <Link href="/search">
                  <button className="w-full md:w-auto h-12 md:h-14 px-8 bg-primary hover:bg-primary/90 text-text-main rounded-xl font-bold text-base shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">search</span>
                    <span>Cerca</span>
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column (Main) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Upcoming Appointment */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text-main dark:text-white">
                    Prossimo Appuntamento
                  </h3>
                  <a
                    className="text-primary text-sm font-bold hover:underline"
                    href="#"
                  >
                    Vedi tutti
                  </a>
                </div>
                {/* Appointment Card */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border-l-8 border-primary relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-primary/10 text-green-800 dark:text-green-300 px-3 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
                    Confermato
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/* Date Badge */}
                    <div className="flex-shrink-0 flex flex-col items-center justify-center bg-[#f0f4f2] dark:bg-[#2a4032] rounded-xl w-20 h-20 text-text-main dark:text-white">
                      <span className="text-xs font-bold uppercase text-text-secondary">
                        OTT
                      </span>
                      <span className="text-3xl font-black">24</span>
                    </div>
                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-text-secondary dark:text-gray-400 text-sm font-medium mb-1">
                        <span className="material-symbols-outlined text-[18px]">
                          schedule
                        </span>
                        15:30 - 16:30
                      </div>
                      <h4 className="text-xl font-bold text-text-main dark:text-white mb-1">
                        Visita Fisioterapica
                      </h4>
                      <div className="flex items-center gap-2">
                        <div
                          className="size-6 rounded-full bg-cover bg-center"
                          data-alt="Doctor profile picture"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBe2Jv1mEgAvIN4hJbetbDUXcu8Kcsuy4kQMPbTobG7F8AfFkcy2xBleVmX4h2a8gXFbT11ptjRfp9OL9Z1XuruurGmYxznMZHPDua-lhfNGTFXhAKNvUBdqlPNeZ0tvdN8O-gNat5WjiK1RSDE-_Zju-UVFpnm2YTsaBGPlHckg3KCeJxqLyGfnfBkmqacZ9IyNco4Yn3c6EEvDTJSoAuPVfUR3_NxsYsWp_V2wtaLBTwGbuZOu5U-KE8JtDnheB8o3QT6C9dH02A")',
                          }}
                        ></div>
                        <p className="text-sm font-medium text-text-main dark:text-gray-200">
                          Dott.ssa Giulia Bianchi
                        </p>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-3 w-full md:w-auto mt-2 md:mt-0">
                      <button className="flex-1 md:flex-none px-5 py-2.5 rounded-lg border border-[#dbe6df] dark:border-[#2a4032] text-text-main dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-[#2a4032] transition">
                        Gestisci
                      </button>
                      <button className="flex-1 md:flex-none px-5 py-2.5 rounded-lg bg-[#111813] dark:bg-white text-white dark:text-[#111813] font-bold text-sm hover:opacity-90 transition flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">
                          videocam
                        </span>
                        Entra
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories / Explore */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-text-main dark:text-white">
                  Esplora Categorie
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Card 1 */}
                  <Link
                    className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col items-center text-center gap-3 group"
                    href="/search"
                  >
                    <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">spa</span>
                    </div>
                    <p className="font-bold text-text-main dark:text-white text-sm">
                      Fisioterapia
                    </p>
                  </Link>
                  {/* Card 2 */}
                  <Link
                    className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col items-center text-center gap-3 group"
                    href="/search"
                  >
                    <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">
                        nutrition
                      </span>
                    </div>
                    <p className="font-bold text-text-main dark:text-white text-sm">
                      Nutrizione
                    </p>
                  </Link>
                  {/* Card 3 */}
                  <Link
                    className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col items-center text-center gap-3 group"
                    href="/search"
                  >
                    <div className="size-12 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">
                        self_improvement
                      </span>
                    </div>
                    <p className="font-bold text-text-main dark:text-white text-sm">
                      Psicologia
                    </p>
                  </Link>
                  {/* Card 4 */}
                  <Link
                    className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col items-center text-center gap-3 group"
                    href="/search"
                  >
                    <div className="size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">
                        fitness_center
                      </span>
                    </div>
                    <p className="font-bold text-text-main dark:text-white text-sm">
                      Personal Trainer
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar Widgets) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Profile/Health Status Widget */}
              <div className="bg-[#111813] text-white rounded-2xl p-6 relative overflow-hidden">
                {/* Abstract decoration */}
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg">Il tuo Profilo Salute</h3>
                    <span className="bg-primary text-[#111813] text-xs font-bold px-2 py-1 rounded">
                      85%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    Completa le tue informazioni mediche per ricevere consigli
                    più accurati.
                  </p>
                  <button className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition">
                    Aggiorna Profilo
                  </button>
                </div>
              </div>

              {/* Recent History */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text-main dark:text-white">
                    Storico Recente
                  </h3>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-2 shadow-sm border border-[#f0f4f2] dark:border-[#2a4032]">
                  {/* History Item 1 */}
                  <div className="flex items-center gap-3 p-3 hover:bg-[#f6f8f6] dark:hover:bg-[#2a4032] rounded-xl transition cursor-pointer">
                    <div className="size-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                      <span className="material-symbols-outlined text-[20px]">
                        check_circle
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-text-main dark:text-white">
                        Massaggio Sportivo
                      </p>
                      <p className="text-xs text-text-secondary">
                        12 Ottobre • Completato
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 text-[20px]">
                      chevron_right
                    </span>
                  </div>
                  {/* History Item 2 */}
                  <div className="flex items-center gap-3 p-3 hover:bg-[#f6f8f6] dark:hover:bg-[#2a4032] rounded-xl transition cursor-pointer">
                    <div className="size-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                      <span className="material-symbols-outlined text-[20px]">
                        check_circle
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-text-main dark:text-white">
                        Visita Nutrizionale
                      </p>
                      <p className="text-xs text-text-secondary">
                        28 Settembre • Completato
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 text-[20px]">
                      chevron_right
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}