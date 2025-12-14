import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-10 lg:px-40 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="@container">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                {/* Hero Content */}
                <div className="flex flex-col gap-8 lg:flex-1">
                  <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111813] lg:text-6xl">
                      Il tuo benessere,
                      <br />a portata di click.
                    </h1>
                    <h2 className="text-base font-normal leading-relaxed text-[#61896f] lg:text-lg">
                      Trova i migliori professionisti della salute o espandi la
                      tua attività con noi. Inizia la tua ricerca oggi stesso e
                      prenditi cura di te.
                    </h2>
                  </div>
                  <label className="flex h-14 w-full flex-col lg:h-16 lg:max-w-[540px]">
                    <div className="flex h-full w-full flex-1 items-stretch rounded-xl shadow-sm">
                      <div className="flex items-center justify-center rounded-l-xl border-y border-l border-[#dbe6df] bg-white pl-4 text-[#61896f]">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input
                        className="form-input flex h-full flex-1 resize-none overflow-hidden border-y border-[#dbe6df] bg-white px-4 text-base font-normal leading-normal text-[#111813] placeholder:text-[#61896f] focus:border-primary focus:outline-0 focus:ring-0"
                        placeholder="Cerca un servizio (es. Nutrizionista, PT)..."
                      />
                      <div className="flex items-center justify-center rounded-r-xl border-y border-r border-[#dbe6df] bg-white pr-2">
                        <Link href="/search">
                          <button className="flex h-10 cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold leading-normal tracking-[0.015em] text-[#111813] transition-transform hover:scale-105 lg:h-12 lg:text-base">
                            <span className="truncate">Cerca</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </label>
                  <div className="flex items-center gap-4 text-sm text-[#61896f]">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        check_circle
                      </span>{" "}
                      Professionisti verificati
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        check_circle
                      </span>{" "}
                      Prenotazione immediata
                    </span>
                  </div>
                </div>
                {/* Hero Image */}
                <div
                  className="aspect-square w-full rounded-2xl bg-cover bg-center lg:aspect-[4/3] lg:w-1/2 shadow-2xl"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUkeV36I1f98HX6URUclGueX0mfdB6Sx0vEc08AM7OJdIpumCRZ8bTYnYuFrJ6O9cIiDeucWYZ33Ixqcwc-_r9j04qZRIgz66Do4iENhtw-WuN_zMzyV3lJuPZVKCvSHzefXxiedqVjyMKVtQR3nTI58iVYocqkgVg2ZI4PZ6TvywJBM087cLSBcwzIcVS5nruU0rsBrQired3LEN-IMlvZSd0Y9HdaVT55urxV-8e6O-iY0JH21v5h85nmRnH3StNc4XmFFJmCf0')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-white py-16 px-4 lg:px-40">
          <div className="mx-auto flex max-w-7xl flex-col gap-10">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111813] lg:text-4xl">
                Esplora le categorie
              </h2>
              <p className="max-w-lg text-[#61896f]">
                Trova lo specialista perfetto per ogni tua esigenza di salute.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#dbe6df] bg-background-light p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-[#111813] group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    psychology
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold leading-tight text-[#111813]">
                    Salute Mentale
                  </h3>
                  <p className="text-sm font-normal leading-normal text-[#61896f]">
                    Psicologi e terapeuti certificati per il tuo equilibrio.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#dbe6df] bg-background-light p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-[#111813] group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    fitness_center
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold leading-tight text-[#111813]">
                    Fitness & Sport
                  </h3>
                  <p className="text-sm font-normal leading-normal text-[#61896f]">
                    Personal trainer e coach per raggiungere i tuoi obiettivi.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#dbe6df] bg-background-light p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-[#111813] group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    nutrition
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold leading-tight text-[#111813]">
                    Nutrizione
                  </h3>
                  <p className="text-sm font-normal leading-normal text-[#61896f]">
                    Piani alimentari personalizzati da esperti nutrizionisti.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#dbe6df] bg-background-light p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-[#111813] group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    accessibility_new
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold leading-tight text-[#111813]">
                    Fisioterapia
                  </h3>
                  <p className="text-sm font-normal leading-normal text-[#61896f]">
                    Recupero, riabilitazione e benessere fisico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Pathway Section */}
        <section className="px-4 py-16 lg:px-40">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl bg-[#102216]">
              <div className="flex flex-col lg:flex-row">
                {/* For Users */}
                <div className="flex flex-1 flex-col justify-center gap-6 p-10 lg:p-16 border-b border-white/10 lg:border-b-0 lg:border-r">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined">
                      person_search
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">
                      Cerchi un professionista?
                    </h3>
                    <p className="text-[#dbe6df]">
                      Accedi a una rete di esperti certificati. Leggi le
                      recensioni, confronta i profili e prenota la tua visita in
                      pochi click.
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2 text-[#dbe6df]">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      Nessun costo di prenotazione
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      Calendario in tempo reale
                    </li>
                  </ul>
                  <button className="mt-2 w-fit rounded-lg bg-primary px-6 py-3 text-sm font-bold text-[#111813] hover:bg-white transition-colors">
                    Trova un servizio
                  </button>
                </div>
                {/* For Professionals */}
                <div className="flex flex-1 flex-col justify-center gap-6 p-10 lg:p-16 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <span className="material-symbols-outlined">
                        medical_services
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">
                        Sei un professionista?
                      </h3>
                      <p className="text-[#dbe6df]">
                        Unisciti a Wellness Connect per espandere la tua
                        visibilità, gestire le prenotazioni facilmente e far
                        crescere il tuo business.
                      </p>
                    </div>
                    <button className="mt-8 w-fit rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-[#111813] transition-colors">
                      Registrati come Pro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 lg:px-40 bg-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tight text-[#111813] lg:text-4xl">
              Perché scegliere Wellness Connect?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-background-light text-primary">
                  <span className="material-symbols-outlined text-4xl">
                    verified_user
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#111813]">
                  Sicurezza Garantita
                </h3>
                <p className="text-[#61896f]">
                  Tutti i professionisti sono verificati per garantire la massima
                  qualità e sicurezza.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-background-light text-primary">
                  <span className="material-symbols-outlined text-4xl">
                    calendar_month
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#111813]">
                  Flessibilità Totale
                </h3>
                <p className="text-[#61896f]">
                  Gestisci i tuoi appuntamenti quando e come vuoi, direttamente
                  dalla piattaforma.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-background-light text-primary">
                  <span className="material-symbols-outlined text-4xl">
                    favorite
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#111813]">
                  Benessere a 360°
                </h3>
                <p className="text-[#61896f]">
                  Un approccio olistico che copre mente, corpo e nutrizione in un
                  unico luogo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
