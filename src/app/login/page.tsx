"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<"Paziente" | "Professionista">(
    "Paziente"
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === "Paziente") {
      router.push("/dashboard/user");
    } else {
      router.push("/dashboard/pro");
    }
  };

  return (
    <main className="flex min-h-screen w-full justify-center">
      <div className="flex w-full max-w-[1440px] flex-col lg:flex-row shadow-sm">
        {/* Left Side: Visual Hero (Hidden on Mobile) */}
        <div className="relative hidden w-full lg:flex lg:w-1/2 flex-col justify-end p-12 overflow-hidden bg-surface-light dark:bg-surface-dark">
          <div className="absolute inset-0 z-0">
            <div
              className="h-full w-full bg-cover opacity-90"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGlPsZtsPSM0vCkreIUrSyYtvoOYxZod37wsaGSTPTG_mDuNQ1t1TEZU_oeGtT1NfNu1new9gPpQpIgrhdXYS9dQwLZg0q46zyznJgSq073eVEDKRxBXA7Ebl_i4DuejraWvh5WihN7Fl4cCuw6MtDSMjBGPSaDAXGYiolUxPp_sUSpkV5adTCUNS29ezZCpWUTmsVQicoG9fF9pd3I8FpA-t2LzQ3MwIYQifFA8N9RoX7kaMauR5HoS0ib9vhztPC1OLi97Suwkg")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-md">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
              La tua salute,
              <br />
              semplificata.
            </h1>
            <p className="text-white/90 text-lg font-medium">
              Connettiti con i migliori professionisti e gestisci il tuo percorso
              di cura in un unico posto sicuro.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center bg-white dark:bg-surface-dark px-6 py-10 sm:px-12 md:px-24">
          <div className="w-full max-w-[480px] mx-auto flex flex-col gap-6">
            <div className="flex justify-center mb-4 lg:hidden">
              <img
                src="/logoconscritta.png"
                alt="Wellness Connect Logo"
                className="h-10 w-auto"
              />
            </div>
            
            {/* Header Text */}
            <div className="flex flex-col gap-2">
              <div className="hidden lg:block mb-2">
                <img src="/logosenzascritta.png" alt="Logo Icon" className="h-12 w-auto" />
              </div>
              <p className="text-text-main dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
                Bentornato
              </p>
              <p className="text-text-secondary dark:text-gray-400 text-base font-normal">
                Accedi alla tua area riservata per gestire la tua salute.
              </p>
            </div>

            {/* Segmented Control for User Type */}
            <div className="w-full">
              <div className="flex h-12 w-full items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1 border border-[#dbe6df] dark:border-[#2a4032]">
                <button
                  onClick={() => setUserType("Paziente")}
                  className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-sm font-bold transition-all duration-200 ${
                    userType === "Paziente"
                      ? "bg-white dark:bg-surface-dark shadow-sm text-text-main dark:text-white"
                      : "text-text-secondary dark:text-gray-400"
                  }`}
                >
                  <span className="truncate">Paziente</span>
                </button>
                <button
                  onClick={() => setUserType("Professionista")}
                  className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-sm font-bold transition-all duration-200 ${
                    userType === "Professionista"
                      ? "bg-white dark:bg-surface-dark shadow-sm text-text-main dark:text-white"
                      : "text-text-secondary dark:text-gray-400"
                  }`}
                >
                  <span className="truncate">Professionista</span>
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              {/* Email Input */}
              <label className="flex flex-col gap-2">
                <span className="text-text-main dark:text-gray-200 text-sm font-bold">
                  Email o Username
                </span>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-text-secondary dark:text-gray-500 material-symbols-outlined">
                    mail
                  </span>
                  <input
                    className="w-full h-12 rounded-lg border border-[#dbe6df] dark:border-[#2a4032] bg-background-light dark:bg-surface-dark text-text-main dark:text-white pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-text-secondary/60 dark:placeholder:text-gray-600 font-medium"
                    placeholder="nome@esempio.com"
                    type="email"
                  />
                </div>
              </label>

              {/* Password Input */}
              <label className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-text-main dark:text-gray-200 text-sm font-bold">
                    Password
                  </span>
                  <a
                    className="text-sm font-bold text-primary hover:underline"
                    href="#"
                  >
                    Recupera password?
                  </a>
                </div>
                <div className="relative flex items-center group">
                  <span className="absolute left-4 text-text-secondary dark:text-gray-500 material-symbols-outlined">
                    lock
                  </span>
                  <input
                    className="w-full h-12 rounded-lg border border-[#dbe6df] dark:border-[#2a4032] bg-background-light dark:bg-surface-dark text-text-main dark:text-white pl-12 pr-12 focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-text-secondary/60 dark:placeholder:text-gray-600 font-medium"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button
                    className="absolute right-4 text-text-secondary hover:text-text-main dark:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      visibility
                    </span>
                  </button>
                </div>
              </label>

              {/* Submit Button */}
              <button className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-primary hover:bg-[#0fd451] active:scale-[0.98] transition-all text-text-main text-base font-bold shadow-sm shadow-primary/20">
                Accedi
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-[#dbe6df] dark:border-[#2a4032]"></div>
              <span className="flex-shrink-0 mx-4 text-xs font-semibold text-text-secondary dark:text-gray-500 uppercase">
                Oppure continua con
              </span>
              <div className="flex-grow border-t border-[#dbe6df] dark:border-[#2a4032]"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#dbe6df] dark:border-[#2a4032] bg-white dark:bg-background-dark hover:bg-gray-50 dark:hover:bg-surface-dark transition-colors text-text-main dark:text-white text-sm font-bold">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                Google
              </button>
              <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#dbe6df] dark:border-[#2a4032] bg-white dark:bg-background-dark hover:bg-gray-50 dark:hover:bg-surface-dark transition-colors text-text-main dark:text-white text-sm font-bold">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.56-2.09-.48-3.08.35 1.04 1.37 4.55.8 6.16-.7.16-.16.32-.32.48-.48-.16-.16-.32-.32-.48-.48-.16.32-.32.64-.48.96zm-3.84-18.4c-1.6.08-2.88 1.12-3.52 2.56 1.76.32 3.2-1.12 3.52-2.56zm4.8 12.32c.16-2.56 2.24-3.84 2.4-3.84-1.28-1.92-3.36-2.08-4-2.08-1.6-.16-3.2.96-4 .96-.8 0-2.24-.96-3.68-.96-1.92 0-3.68 1.12-4.64 2.88-2.08 3.52-.48 8.64 1.44 11.52.96 1.44 2.08 2.88 3.52 2.88 1.44 0 1.92-.96 3.68-.96 1.6 0 2.08.96 3.52.96 1.44 0 2.56-1.44 3.52-2.88.64-.96 1.28-2.08 1.6-3.04-3.52-1.44-4.16-5.76-1.6-7.52z"></path>
                </svg>
                Apple
              </button>
            </div>

            {/* Register Link */}
            <div className="mt-2 text-center">
              <p className="text-text-secondary dark:text-gray-400 text-sm font-medium">
                Non hai ancora un account?{" "}
                <Link
                  className="text-text-main dark:text-white font-bold hover:text-primary transition-colors underline decoration-2 decoration-primary/50 hover:decoration-primary"
                  href="#"
                >
                  Registrati ora
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}