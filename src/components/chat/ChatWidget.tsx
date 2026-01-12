"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

// Types
type MessageType = "text" | "options" | "action" | "assessment";

type MessageAction = {
  type: "link" | "search" | "book" | "call";
  label: string;
  value: string;
};

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: MessageType;
  options?: string[];
  actions?: MessageAction[];
};

type ConversationState =
  | "idle"
  | "greeting"
  | "assessment_start"
  | "assessment_category"
  | "assessment_urgency"
  | "assessment_preference"
  | "assessment_complete"
  | "searching"
  | "booking_help"
  | "faq"
  | "human_request";

type UserProfile = {
  category?: string;
  urgency?: string;
  preference?: string;
  previousSearches?: string[];
};

// Knowledge Base
const CATEGORIES = {
  mental: {
    name: "Salute Mentale",
    keywords: ["psicologo", "psicologa", "ansia", "stress", "depressione", "terapia", "terapeuta", "psicoterapia", "mentale", "emotivo", "panico", "insonnia"],
    specialists: ["Psicologi", "Psicoterapeuti", "Counselor"],
    icon: "psychology"
  },
  fitness: {
    name: "Fitness & Sport",
    keywords: ["personal trainer", "pt", "palestra", "allenamento", "fitness", "sport", "muscoli", "dimagrire", "tonificare", "esercizio"],
    specialists: ["Personal Trainer", "Coach sportivi", "Preparatori atletici"],
    icon: "fitness_center"
  },
  nutrition: {
    name: "Nutrizione",
    keywords: ["nutrizionista", "dieta", "alimentazione", "nutrizione", "mangiare", "peso", "calorie", "intolleranze", "allergie", "vegetariano", "vegano"],
    specialists: ["Nutrizionisti", "Dietologi", "Dietisti"],
    icon: "nutrition"
  },
  physio: {
    name: "Fisioterapia",
    keywords: ["fisioterapista", "fisioterapia", "mal di schiena", "dolore", "postura", "riabilitazione", "muscolare", "articolazioni", "cervicale", "lombare"],
    specialists: ["Fisioterapisti", "Osteopati", "Chiropratici"],
    icon: "accessibility_new"
  }
};

const FAQ_DATABASE = [
  {
    keywords: ["prenotare", "prenotazione", "appuntamento", "visita"],
    question: "Come posso prenotare?",
    answer: "Prenotare è semplicissimo! Cerca il professionista che fa per te, visita il suo profilo e clicca 'Prenota Ora'. Scegli data e ora dalle disponibilità e conferma. Riceverai una email di conferma immediata."
  },
  {
    keywords: ["pagamento", "pagare", "costo", "prezzo", "quanto costa", "carta", "paypal"],
    question: "Come funzionano i pagamenti?",
    answer: "Accettiamo carte di credito/debito (Visa, Mastercard, Amex) e PayPal. Il pagamento avviene in modo sicuro al momento della prenotazione. I prezzi variano: una prima visita parte da circa 50€, ma ogni professionista indica le sue tariffe sul profilo."
  },
  {
    keywords: ["cancellare", "disdire", "annullare", "cancellazione", "rimborso"],
    question: "Posso cancellare una prenotazione?",
    answer: "Sì! Puoi cancellare gratuitamente fino a 24 ore prima dell'appuntamento dalla tua area personale. Per cancellazioni tardive potrebbe essere applicata una penale del 50%. In caso di emergenza, contattaci e valuteremo caso per caso."
  },
  {
    keywords: ["video", "online", "videochiamata", "distanza", "remoto", "teleconsulto"],
    question: "Come funzionano le visite online?",
    answer: "15 minuti prima dell'appuntamento riceverai un link via email e nella dashboard. Basta cliccare per connetterti - funziona da browser, niente da installare. Assicurati di avere una connessione stabile e un ambiente tranquillo."
  },
  {
    keywords: ["professionista", "verificato", "affidabile", "sicuro", "certificato"],
    question: "I professionisti sono verificati?",
    answer: "Assolutamente sì! Ogni professionista passa un processo di verifica: controlliamo titoli di studio, iscrizione agli albi professionali e raccogliamo recensioni reali dei pazienti. La tua sicurezza è la nostra priorità."
  },
  {
    keywords: ["registrare", "account", "iscrizione", "registrazione"],
    question: "Come mi registro?",
    answer: "Clicca su 'Accedi' in alto a destra e poi 'Registrati'. Puoi usare email e password oppure accedere rapidamente con Google o Apple. In 30 secondi sei dentro!"
  }
];

// Smart Response Engine
const analyzeIntent = (text: string): { intent: string; category?: string; confidence: number } => {
  const lowerText = text.toLowerCase().trim();

  // Greetings
  if (/^(ciao|salve|buongiorno|buonasera|hey|hello|ehi)/.test(lowerText)) {
    return { intent: "greeting", confidence: 0.95 };
  }

  // Help request
  if (/aiut|help|assistenza|supporto/.test(lowerText)) {
    return { intent: "help", confidence: 0.9 };
  }

  // Human request
  if (/operator|umano|persona|parlare con|chiamare/.test(lowerText)) {
    return { intent: "human", confidence: 0.95 };
  }

  // Booking related
  if (/prenotare|appuntamento|visita|disponibil/.test(lowerText)) {
    return { intent: "booking", confidence: 0.85 };
  }

  // Category detection
  for (const [key, cat] of Object.entries(CATEGORIES)) {
    for (const keyword of cat.keywords) {
      if (lowerText.includes(keyword)) {
        return { intent: "search_category", category: key, confidence: 0.9 };
      }
    }
  }

  // FAQ detection
  for (const faq of FAQ_DATABASE) {
    for (const keyword of faq.keywords) {
      if (lowerText.includes(keyword)) {
        return { intent: "faq", confidence: 0.8 };
      }
    }
  }

  // Price inquiry
  if (/prezz|cost|quant|tariffa|euro|€/.test(lowerText)) {
    return { intent: "pricing", confidence: 0.85 };
  }

  // Thank you
  if (/grazie|thank|perfetto|ottimo|capito/.test(lowerText)) {
    return { intent: "thanks", confidence: 0.9 };
  }

  return { intent: "unknown", confidence: 0.3 };
};

const findFaqAnswer = (text: string): string | null => {
  const lowerText = text.toLowerCase();
  for (const faq of FAQ_DATABASE) {
    const matchCount = faq.keywords.filter(k => lowerText.includes(k)).length;
    if (matchCount > 0) {
      return faq.answer;
    }
  }
  return null;
};

const detectCategory = (text: string): string | null => {
  const lowerText = text.toLowerCase();
  for (const [key, cat] of Object.entries(CATEGORIES)) {
    for (const keyword of cat.keywords) {
      if (lowerText.includes(keyword)) {
        return key;
      }
    }
  }
  return null;
};

export default function ChatWidget() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [conversationState, setConversationState] = useState<ConversationState>("idle");
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Ciao! Sono l'assistente di Wellness Connect. Posso aiutarti a trovare il professionista perfetto per te, rispondere alle tue domande o guidarti nella prenotazione. Come posso aiutarti oggi?",
      sender: "bot",
      timestamp: new Date(),
      type: "options",
      options: [
        "Cerco un professionista",
        "Ho una domanda",
        "Come funziona?"
      ]
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Context-aware suggestions based on current page
  const getContextualSuggestions = useCallback((): string[] => {
    if (pathname === "/search") {
      return ["Filtra per disponibilità", "Visite online", "Ordina per prezzo"];
    }
    if (pathname?.startsWith("/professionals/")) {
      return ["Mostra recensioni", "Disponibilità", "Prenota ora"];
    }
    if (pathname === "/book") {
      return ["Metodi di pagamento", "Politica cancellazione", "Assistenza"];
    }
    if (pathname?.includes("/dashboard")) {
      return ["I miei appuntamenti", "Modifica profilo", "Assistenza"];
    }
    return ["Cerco un professionista", "Come funziona?", "Prezzi"];
  }, [pathname]);

  const addBotMessage = useCallback((
    text: string,
    options?: {
      type?: MessageType;
      messageOptions?: string[];
      actions?: MessageAction[];
      delay?: number;
    }
  ) => {
    const delay = options?.delay ?? (800 + Math.random() * 700);

    setIsTyping(true);
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now().toString(),
        text,
        sender: "bot",
        timestamp: new Date(),
        type: options?.type,
        options: options?.messageOptions,
        actions: options?.actions,
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  }, []);

  const handleAssessmentFlow = useCallback((userText: string, currentState: ConversationState) => {
    const lowerText = userText.toLowerCase();

    switch (currentState) {
      case "assessment_start":
      case "assessment_category": {
        // Detect category from response
        let detectedCategory: string | null = null;

        if (lowerText.includes("mental") || lowerText.includes("psicolog") || lowerText.includes("ansia") || lowerText.includes("stress")) {
          detectedCategory = "mental";
        } else if (lowerText.includes("fitness") || lowerText.includes("trainer") || lowerText.includes("allena")) {
          detectedCategory = "fitness";
        } else if (lowerText.includes("nutri") || lowerText.includes("dieta") || lowerText.includes("alimenta")) {
          detectedCategory = "nutrition";
        } else if (lowerText.includes("fisio") || lowerText.includes("dolore") || lowerText.includes("schiena") || lowerText.includes("riabilit")) {
          detectedCategory = "physio";
        }

        if (detectedCategory) {
          setUserProfile(prev => ({ ...prev, category: detectedCategory! }));
          setConversationState("assessment_urgency");

          const cat = CATEGORIES[detectedCategory as keyof typeof CATEGORIES];
          addBotMessage(
            `Perfetto, ${cat.name}! Tra i nostri specialisti abbiamo: ${cat.specialists.join(", ")}. Quanto è urgente per te?`,
            {
              type: "options",
              messageOptions: [
                "Urgente - questa settimana",
                "Presto - entro 2 settimane",
                "Con calma - quando capita"
              ]
            }
          );
        } else {
          addBotMessage(
            "Capisco! Per aiutarti meglio, in quale area posso cercare?",
            {
              type: "options",
              messageOptions: [
                "Salute Mentale",
                "Fitness & Sport",
                "Nutrizione",
                "Fisioterapia"
              ]
            }
          );
        }
        break;
      }

      case "assessment_urgency": {
        let urgency = "normal";
        if (lowerText.includes("urgent") || lowerText.includes("settimana")) {
          urgency = "urgent";
        } else if (lowerText.includes("calma") || lowerText.includes("quando")) {
          urgency = "relaxed";
        }

        setUserProfile(prev => ({ ...prev, urgency }));
        setConversationState("assessment_preference");

        addBotMessage(
          "Ultimo dettaglio: preferisci una visita in presenza, online o a domicilio?",
          {
            type: "options",
            messageOptions: [
              "In studio - di persona",
              "Online - videochiamata",
              "A domicilio - a casa tua",
              "Tutte le opzioni"
            ]
          }
        );
        break;
      }

      case "assessment_preference": {
        let preference = "all";
        if (lowerText.includes("studio") || lowerText.includes("persona")) {
          preference = "in_person";
        } else if (lowerText.includes("online") || lowerText.includes("video")) {
          preference = "online";
        } else if (lowerText.includes("domicilio") || lowerText.includes("casa")) {
          preference = "home";
        }

        setUserProfile(prev => ({ ...prev, preference }));
        setConversationState("assessment_complete");

        const category = userProfile.category;
        const cat = category ? CATEGORIES[category as keyof typeof CATEGORIES] : null;

        const preferenceText =
          preference === "online" ? " per videoconsulto" :
          preference === "in_person" ? " per visite in studio" :
          preference === "home" ? " disponibili per visite a domicilio" : "";

        addBotMessage(
          `Ottimo! Ho trovato diversi ${cat?.specialists[0] || "professionisti"}${preferenceText}${userProfile.urgency === "urgent" ? " con disponibilità immediata" : ""}. Vuoi che ti mostri i risultati?`,
          {
            type: "options",
            messageOptions: ["Mostra risultati", "Aggiungi filtri", "Ricomincia"],
            actions: [
              {
                type: "link",
                label: "Vai alla ricerca",
                value: `/search?category=${category || "all"}${preference === "online" ? "&mode=online" : preference === "home" ? "&mode=domicilio" : preference === "in_person" ? "&mode=studio" : ""}`
              }
            ]
          }
        );
        break;
      }

      default:
        break;
    }
  }, [userProfile, addBotMessage]);

  const processUserMessage = useCallback((userText: string) => {
    const { intent, category, confidence } = analyzeIntent(userText);

    // If in assessment flow, handle it
    if (conversationState.startsWith("assessment_")) {
      handleAssessmentFlow(userText, conversationState);
      return;
    }

    switch (intent) {
      case "greeting":
        addBotMessage(
          "Ciao! Sono qui per aiutarti. Stai cercando un professionista specifico o hai qualche domanda?",
          {
            type: "options",
            messageOptions: ["Cerco un professionista", "Ho una domanda", "Come funziona?"]
          }
        );
        break;

      case "help":
        addBotMessage(
          "Certo, sono qui per questo! Posso aiutarti a: trovare professionisti della salute, prenotare visite, rispondere a domande sul servizio. Cosa ti serve?",
          {
            type: "options",
            messageOptions: ["Trova professionista", "Prenota visita", "Domande frequenti"]
          }
        );
        break;

      case "human":
        setConversationState("human_request");
        addBotMessage(
          "Capisco che preferiresti parlare con una persona. Puoi contattare il nostro supporto via email a supporto@wellnessconnect.it oppure chiamare il numero verde. Vuoi che ti dia più informazioni?",
          {
            actions: [
              { type: "link", label: "Contattaci", value: "/contatti" }
            ]
          }
        );
        break;

      case "search_category":
        if (category) {
          const cat = CATEGORIES[category as keyof typeof CATEGORIES];
          setUserProfile(prev => ({ ...prev, category }));
          setConversationState("assessment_urgency");

          addBotMessage(
            `Ottima scelta! Per ${cat.name} abbiamo molti specialisti qualificati: ${cat.specialists.join(", ")}. Per trovarti il match perfetto, quanto è urgente la tua esigenza?`,
            {
              type: "options",
              messageOptions: [
                "Urgente - questa settimana",
                "Presto - entro 2 settimane",
                "Con calma"
              ]
            }
          );
        }
        break;

      case "booking":
        addBotMessage(
          "Per prenotare una visita, il processo è semplice:\n\n1. Cerca il professionista\n2. Visita il suo profilo\n3. Clicca 'Prenota Ora'\n4. Scegli data e ora\n5. Conferma e paga\n\nVuoi che ti aiuti a trovare un professionista?",
          {
            type: "options",
            messageOptions: ["Sì, aiutami", "Vai alla ricerca"],
            actions: [
              { type: "link", label: "Cerca professionisti", value: "/search" }
            ]
          }
        );
        break;

      case "faq": {
        const faqAnswer = findFaqAnswer(userText);
        if (faqAnswer) {
          addBotMessage(faqAnswer, {
            type: "options",
            messageOptions: ["Altra domanda", "Cerca professionista"]
          });
        } else {
          addBotMessage(
            "Non ho trovato una risposta specifica, ma posso aiutarti! Riformula la domanda o scegli un argomento:",
            {
              type: "options",
              messageOptions: ["Prenotazioni", "Pagamenti", "Cancellazioni", "Visite online"]
            }
          );
        }
        break;
      }

      case "pricing":
        addBotMessage(
          "I prezzi variano in base al professionista e al tipo di visita. In generale:\n\n• Prima visita: da 50€\n• Visite successive: da 40€\n• Pacchetti: sconti fino al 20%\n\nOgni professionista indica le sue tariffe esatte sul profilo. Vuoi cercare per fascia di prezzo?",
          {
            type: "options",
            messageOptions: ["Cerca per prezzo", "Vedi professionisti"],
            actions: [
              { type: "link", label: "Cerca", value: "/search" }
            ]
          }
        );
        break;

      case "thanks":
        addBotMessage(
          "Di nulla! Se hai altre domande sono qui. In bocca al lupo per il tuo percorso di benessere! 🍀",
          {
            type: "options",
            messageOptions: getContextualSuggestions()
          }
        );
        break;

      default:
        // Check if it might be a category search or FAQ
        const possibleCategory = detectCategory(userText);
        const possibleFaq = findFaqAnswer(userText);

        if (possibleCategory) {
          const cat = CATEGORIES[possibleCategory as keyof typeof CATEGORIES];
          addBotMessage(
            `Stai cercando un ${cat.name}? Posso aiutarti a trovare il professionista perfetto!`,
            {
              type: "options",
              messageOptions: ["Sì, cercane uno", "No, altro"],
              actions: [
                { type: "link", label: `Cerca ${cat.specialists[0]}`, value: `/search?category=${possibleCategory}` }
              ]
            }
          );
        } else if (possibleFaq) {
          addBotMessage(possibleFaq);
        } else {
          // Fallback with helpful options
          addBotMessage(
            "Non sono sicuro di aver capito bene. Posso aiutarti con:",
            {
              type: "options",
              messageOptions: [
                "Trovare un professionista",
                "Informazioni su prenotazioni",
                "Domande sul servizio",
                "Parlare con supporto"
              ]
            }
          );
        }
        break;
    }
  }, [conversationState, handleAssessmentFlow, addBotMessage, getContextualSuggestions]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue("");
    setHasInteracted(true);

    const userMsg: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);

    processUserMessage(userText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleOptionClick = (option: string) => {
    setHasInteracted(true);

    const userMsg: Message = {
      id: Date.now().toString(),
      text: option,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);

    // Handle specific options
    if (option === "Cerco un professionista" || option === "Trova professionista" || option === "Sì, aiutami" || option === "Trovare un professionista") {
      setConversationState("assessment_category");
      addBotMessage(
        "Perfetto! Per trovarti il match ideale, dimmi: che tipo di professionista stai cercando?",
        {
          type: "options",
          messageOptions: [
            "Salute Mentale",
            "Fitness & Sport",
            "Nutrizione",
            "Fisioterapia"
          ]
        }
      );
    } else if (option === "Come funziona?" || option === "Domande frequenti") {
      addBotMessage(
        "Wellness Connect ti permette di trovare e prenotare professionisti della salute in pochi click. Scegli un argomento:",
        {
          type: "options",
          messageOptions: [
            "Come prenotare",
            "Pagamenti",
            "Visite online",
            "Cancellazioni"
          ]
        }
      );
    } else if (option === "Ho una domanda" || option === "Altra domanda") {
      addBotMessage(
        "Certo! Dimmi pure la tua domanda, oppure scegli tra gli argomenti più frequenti:",
        {
          type: "options",
          messageOptions: ["Prenotazioni", "Pagamenti", "Cancellazioni", "Professionisti"]
        }
      );
    } else if (option === "Mostra risultati" || option === "Vai alla ricerca" || option === "Vedi professionisti" || option === "Cerca professionisti") {
      let searchUrl = "/search";
      const params = new URLSearchParams();
      if (userProfile.category) params.set("category", userProfile.category);
      if (userProfile.preference === "online") params.set("mode", "online");
      else if (userProfile.preference === "home") params.set("mode", "domicilio");
      else if (userProfile.preference === "in_person") params.set("mode", "studio");
      if (params.toString()) searchUrl += `?${params.toString()}`;
      router.push(searchUrl);
      addBotMessage(
        "Ti porto alla pagina di ricerca! Troverai tutti i professionisti disponibili con i filtri già applicati. Buona ricerca!",
        { delay: 300 }
      );
    } else if (option === "Ricomincia") {
      setConversationState("idle");
      setUserProfile({});
      addBotMessage(
        "Nessun problema, ricominciamo! Come posso aiutarti?",
        {
          type: "options",
          messageOptions: ["Cerco un professionista", "Ho una domanda", "Come funziona?"]
        }
      );
    } else {
      // Process as normal message
      processUserMessage(option);
    }
  };

  const handleActionClick = (action: MessageAction) => {
    if (action.type === "link") {
      router.push(action.value);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[600px] bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#102216] to-[#1a3a25] p-4 flex items-center justify-between text-white shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  smart_toy
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Wellness Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(19,236,91,0.5)]" />
                  <span className="text-xs text-gray-300">Online ora</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Chiudi chat"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1f1c] dark:to-[#151916]">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-primary text-[#111813] font-medium rounded-br-sm"
                        : "bg-white dark:bg-[#232825] text-text-main dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-bl-sm"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div className={`text-[10px] mt-2 text-right ${
                      msg.sender === "user" ? "text-[#111813]/50" : "text-gray-400"
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>

                {/* Options buttons */}
                {msg.sender === "bot" && msg.options && (
                  <div className="flex flex-wrap gap-2 ml-2">
                    {msg.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        disabled={isTyping}
                        className="text-xs bg-white dark:bg-[#232825] hover:bg-primary/10 hover:border-primary text-gray-700 dark:text-gray-300 px-3 py-2 rounded-xl transition-all border border-gray-200 dark:border-gray-700 hover:shadow-sm disabled:opacity-50"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {/* Action buttons */}
                {msg.sender === "bot" && msg.actions && (
                  <div className="flex flex-wrap gap-2 ml-2 mt-2">
                    {msg.actions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActionClick(action)}
                        className="text-xs bg-primary hover:bg-primary/90 text-[#111813] font-semibold px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {action.type === "link" ? "arrow_forward" : action.type === "call" ? "call" : "search"}
                        </span>
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#232825] border border-gray-100 dark:border-gray-800 rounded-2xl rounded-bl-sm p-4 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions for new conversations */}
          {!hasInteracted && messages.length <= 2 && (
            <div className="px-4 py-2 bg-gray-50 dark:bg-[#1a1f1c] border-t border-gray-100 dark:border-gray-800">
              <p className="text-[10px] text-gray-400 mb-2 uppercase tracking-wide">Suggerimenti</p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {getContextualSuggestions().map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(suggestion)}
                    className="text-xs bg-white dark:bg-[#232825] text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <input
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none dark:text-white placeholder:text-gray-400"
                placeholder="Scrivi un messaggio..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="p-3 rounded-xl bg-primary text-[#111813] hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
                aria-label="Invia messaggio"
              >
                <span className="material-symbols-outlined text-[20px] leading-none">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
          isOpen ? "bg-[#102216] text-white" : "bg-primary text-[#111813]"
        }`}
        aria-label={isOpen ? "Chiudi assistente" : "Apri assistente"}
      >
        <span
          className={`material-symbols-outlined text-[28px] transition-all duration-300 ${
            isOpen ? "rotate-0 scale-0 absolute" : "scale-100"
          }`}
        >
          chat
        </span>
        <span
          className={`material-symbols-outlined text-[28px] transition-all duration-300 ${
            isOpen ? "scale-100" : "-rotate-90 scale-0 absolute"
          }`}
        >
          close
        </span>

        {/* Notification badge */}
        {!isOpen && !hasInteracted && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-[10px] text-white font-bold">1</span>
          </span>
        )}
      </button>

      {/* Tooltip on hover */}
      {!isOpen && (
        <div className="absolute bottom-16 right-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-[#102216] text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            Hai bisogno di aiuto?
          </div>
        </div>
      )}
    </div>
  );
}
