"use client";

import { useState } from "react";
import { Search, Bell, MoreVertical, Send as SendIcon, User } from "lucide-react";
import EmployerHeader from "@/components/EmployerHeader";
import Footer from "@/components/Footer";

interface Conversation {
  id: string;
  name: string;
  initial?: string;
  avatarBg: string;
  time: string;
  lastMessage: string;
  isYou?: boolean;
  online?: boolean;
}

interface Message {
  id: string;
  sender: "me" | "them";
  text: string;
}

const conversations: Conversation[] = [
  {
    id: "lawal",
    name: "Lawal Roqeeb",
    avatarBg: "bg-orange-100 text-gray-800",
    time: "15 Min",
    lastMessage: "Hey whats up",
    isYou: true,
  },
  {
    id: "david",
    name: "David Onyeka",
    avatarBg: "bg-blue-100 text-blue-600",
    time: "30 Min",
    lastMessage: "Welcome to Our G...",
    online: true,
  },
  {
    id: "shina",
    name: "Shina Lawal",
    initial: "Z",
    avatarBg: "bg-yellow-400 text-white",
    time: "12:36 PM",
    lastMessage: "We're Not hiring no...",
  },
  {
    id: "bridgeskill",
    name: "BridgeSkill Team",
    initial: "C",
    avatarBg: "bg-orange-100 text-gray-800",
    time: "12:36 PM",
    lastMessage: "798508 is your verifi...",
  },
];

const conversationMessages: Record<string, Message[]> = {
  david: [
    { id: "1", sender: "me", text: "Hi David! We reviewed your profile and we're impressed. 🎉" },
    { id: "2", sender: "me", text: "We'd love to schedule an interview. Are you available this week?" },
    { id: "3", sender: "them", text: "Yes! I'm available Thursday or Friday afternoon. Looking forward to it!" },
  ],
  lawal: [{ id: "1", sender: "me", text: "Hey whats up" }],
  shina: [{ id: "1", sender: "them", text: "We're Not hiring now, but we'll keep your profile on file." }],
  bridgeskill: [{ id: "1", sender: "them", text: "798508 is your verification code. It expires in 10 minutes." }],
};

export default function MessagesPage() {
  const [activeId, setActiveId] = useState("david");
  const [draft, setDraft] = useState("");
  const [messagesByConvo, setMessagesByConvo] = useState(conversationMessages);
  const [search, setSearch] = useState("");

  const activeConvo = conversations.find((c) => c.id === activeId)!;
  const activeMessages = messagesByConvo[activeId] ?? [];

  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!draft.trim()) return;
    setMessagesByConvo((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] ?? []), { id: crypto.randomUUID(), sender: "me", text: draft.trim() }],
    }));
    setDraft("");
  };

  return (
    <div>
      <EmployerHeader />
      <div className="mt-20 min-h-screen bg-slate-50 px-6 py-10 sm:px-10">
      {/* Page heading */}
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Messages</h1>
        <p className="mt-2 text-lg text-gray-500">Discover verified professionals across Africa</p>

        {/* Search */}
        <div className="mt-6 max-w-xl">
          <div className="flex items-center gap-3 rounded-2xl border border-muted  px-5 py-4 shadow-sm">
            <Search size={20} className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Messages"
              className="w-full bg-transparent text-gray-600 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Messages panel */}
        <div className="mt-8 flex overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          {/* Conversation list */}
          <div className="w-full max-w-[320px] border-r border-gray-100">
            <div className="border-b border-gray-100 p-4">
              <span className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                Messages
              </span>
            </div>

            <div>
              {filteredConversations.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveId(c.id)}
                    className={`relative flex w-full items-start gap-3 border-b border-gray-50 px-4 py-4 text-left transition hover:bg-gray-50 ${
                      isActive ? "bg-blue-50/60" : ""
                    }`}
                  >
                    {isActive && (
                      <span className="absolute right-0 top-0 h-full w-1 bg-blue-600" />
                    )}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${c.avatarBg}`}
                    >
                      {c.initial ? (
                        <span className="text-sm font-bold">{c.initial}</span>
                      ) : (
                        <User size={20} />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate font-semibold text-gray-900">{c.name}</span>
                        <span className="shrink-0 text-xs text-gray-400">{c.time}</span>
                      </div>
                      <p className="mt-0.5 truncate text-sm text-gray-500">
                        {c.isYou && <span className="font-medium text-gray-700">You: </span>}
                        {c.lastMessage}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chat panel */}
          <div className="flex flex-1 flex-col">
            {/* Chat header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{activeConvo.name}</p>
                  <p className="text-sm text-gray-400">{activeConvo.online ? "Online" : "Offline"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Bell size={20} />
                <MoreVertical size={20} />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              <p className="text-center text-sm text-gray-400">Today &bull; 1:21 PM</p>

              {activeMessages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "me" ? "justify-end" : "justify-start"}`}>
                  {m.sender === "them" && (
                    <div className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center self-end rounded-full bg-blue-100 text-blue-600">
                      <User size={16} />
                    </div>
                  )}
                  <div
                    className={`max-w-md rounded-2xl px-5 py-3 text-[15px] leading-snug ${
                      m.sender === "me"
                        ? "rounded-br-md bg-blue-600 text-white"
                        : "rounded-bl-md bg-gray-100 text-gray-800"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-3 bg-indigo-50/50 px-6 py-5">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message"
                className="flex-1 rounded-xl border border-blue-300 bg-white px-5 py-3.5 text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
              <button
                onClick={handleSend}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ── Future Network Hero ── */}
      <section className="mt-16 mx-4 sm:mx-8 md:mx-16 rounded-3xl overflow-hidden  relative flex flex-col items-center pt-10 pb-0 text-center">
        <h2 className="text-[#4B8EF5] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 relative z-10 px-6">
          The Future Network For
          <br className="hidden sm:block" /> Skilled Talent
        </h2>

        <div className="relative w-full max-w-full flex justify-center overflow-visible">
          {/* Purple Frame */}
          <img
            src="/purpleFrame.png"
            alt="Job Status"
            className="
      absolute
      right-[3%]
      top-[15%]
      w-[120px]
      md:w-[295px]
      z-20
      object-contain
    "
          />

          {/* Blue Frame */}
          <img
            src="/blueFrame.png"
            alt="Application Status"
            className="
      absolute
      left-[3%]
      top-[50%]
      w-[120px]
      md:w-[295px]
      z-20
      object-contain
    "
          />

          {/* Globe */}
          <img
            src="/Global.svg"
            className="w-full max-w-full h-auto object-contain"
            alt="Global talent network"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}