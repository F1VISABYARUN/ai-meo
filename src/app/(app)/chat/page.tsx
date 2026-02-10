"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
    id: number;
    role: "user" | "ai";
    content: string;
    time: string;
}

const initialMessages: Message[] = [
    { id: 1, role: "ai", content: "Hey Rohan! 👋 I'm your AI clone. I've been trained on your documents and I'm ready to chat as you. Try asking me something, or tell me to draft a message for someone.", time: "2:00 PM" },
    { id: 2, role: "user", content: "What does our company policy say about remote work?", time: "2:01 PM" },
    { id: 3, role: "ai", content: "Based on the Company Policy Handbook 2026, our remote work policy allows:\n\n• **Full-time remote** for engineering and product roles\n• **Hybrid (3 days in-office)** for management and client-facing roles\n• **Equipment allowance** of $1,500/year for home office setup\n• **Core hours** are 10 AM — 4 PM in your local timezone\n\nWant me to pull up any specific section of the policy?", time: "2:01 PM" },
    { id: 4, role: "user", content: "Draft a message to Sarah about the sprint progress", time: "2:03 PM" },
    { id: 5, role: "ai", content: "Here's a draft message for Sarah in your communication style:\n\n---\n\n**To: Sarah K.**\n\nHey Sarah! Quick update on sprint progress — we're at 78% completion with 3 days left. The auth module is done, API layer is in code review, and the dashboard component is on track for tomorrow.\n\nOnly blocker is the third-party payment integration — waiting on API keys from Stripe. I'll escalate if we don't hear back by EOD.\n\nLet me know if you need a more detailed breakdown! 🚀\n\n---\n\nShall I send this, or would you like to edit it?", time: "2:03 PM" },
];

const suggestions = [
    "📋 Summarize today's meetings",
    "📧 Draft reply to Mike's email",
    "📊 What's our sprint velocity?",
    "📄 Explain the leave policy",
    "🗓️ What's on my calendar tomorrow?",
];

const aiResponses = [
    "Based on my knowledge base, here's what I found. Let me compile the relevant information for you...\n\nI've cross-referenced our project documentation and the latest sprint metrics. The data shows we're trending above our velocity target by 15%. Would you like me to prepare a report for the team?",
    "Great question! I've checked the relevant documents in my knowledge base. Here's a comprehensive summary:\n\n• **Key finding 1:** Our Q1 objectives are 82% complete\n• **Key finding 2:** Team satisfaction scores are at an all-time high\n• **Key finding 3:** We've reduced meeting time by 40% since implementing AI MEO\n\nShall I draft a presentation with these insights?",
    "I've analyzed the request and here's my recommendation, speaking as Rohan:\n\nI think we should proceed with Option B — it aligns better with our technical architecture and the team's expertise. I've drafted a brief proposal that outlines the implementation timeline and resource requirements.\n\nWant me to send this to the team or would you prefer to review the details first?",
    "Looking at the latest documents and meeting notes, here's a summary:\n\n📈 **Sprint Progress:** On track — 85% of stories completed\n🐛 **Bugs:** 3 critical bugs fixed, 2 remaining in QA\n🚀 **Deployments:** Staging deployed yesterday, production scheduled for Friday\n\nI can generate a more detailed report if needed!",
];

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const responseIndex = useRef(0);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = (text?: string) => {
        const messageText = text || input;
        if (!messageText.trim()) return;

        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

        const userMessage: Message = {
            id: Date.now(),
            role: "user",
            content: messageText,
            time: timeStr,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiMessage: Message = {
                id: Date.now() + 1,
                role: "ai",
                content: aiResponses[responseIndex.current % aiResponses.length],
                time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
            };
            responseIndex.current++;
            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <div className="page-header">
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{
                        width: "44px", height: "44px", borderRadius: "12px",
                        background: "var(--gradient-1)", display: "flex",
                        alignItems: "center", justifyContent: "center", fontSize: "20px",
                    }}>
                        🧬
                    </div>
                    <div>
                        <h1 style={{ fontSize: "20px" }}>Chat with Your AI Clone</h1>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-4)" }} />
                            <span style={{ fontSize: "12px", color: "var(--accent-4)" }}>Online — responding as Rohan</span>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                    <button className="btn-icon" title="Voice Call">🎙️</button>
                    <button className="btn-icon" title="Video Call">📹</button>
                    <button className="btn-icon" title="Settings">⚙️</button>
                </div>
            </div>

            <div className="page-body" style={{ padding: "0 36px", height: "calc(100vh - 100px)", display: "flex", flexDirection: "column" }}>
                {/* Quick Suggestions */}
                <div style={{ display: "flex", gap: "8px", padding: "16px 0", flexWrap: "wrap" }}>
                    {suggestions.map((s, i) => (
                        <button key={i} className="btn-secondary"
                            style={{ padding: "8px 16px", fontSize: "12px", borderRadius: "20px" }}
                            onClick={() => sendMessage(s.replace(/^[^\s]+ /, ""))}>
                            {s}
                        </button>
                    ))}
                </div>

                {/* Messages */}
                <div className="chat-messages" style={{ flex: 1, overflow: "auto" }}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`chat-message ${msg.role === "user" ? "user" : "ai"}`}>
                            <div className="chat-avatar">
                                {msg.role === "ai" ? "🧬" : "👤"}
                            </div>
                            <div>
                                <div className="chat-bubble">
                                    {msg.content.split("\n").map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < msg.content.split("\n").length - 1 && <br />}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "6px", padding: "0 4px" }}>
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="chat-message ai">
                            <div className="chat-avatar" style={{ background: "var(--gradient-1)" }}>🧬</div>
                            <div className="chat-bubble" style={{ background: "var(--bg-card)", border: "1px solid var(--border-glass)" }}>
                                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-1)", animation: "float 0.6s ease-in-out infinite" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-1)", animation: "float 0.6s ease-in-out infinite", animationDelay: "0.2s" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-1)", animation: "float 0.6s ease-in-out infinite", animationDelay: "0.4s" }} />
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="chat-input-area">
                    <div className="chat-input-wrapper">
                        <input
                            type="text"
                            placeholder="Type a message to your AI clone..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button className="btn-icon" style={{ border: "none", background: "transparent" }}>📎</button>
                        <button className="chat-send-btn" onClick={() => sendMessage()}>
                            ➤
                        </button>
                    </div>
                    <div style={{ textAlign: "center", padding: "8px 0 0", fontSize: "11px", color: "var(--text-muted)" }}>
                        Your AI clone responds using your voice, personality, and knowledge base
                    </div>
                </div>
            </div>
        </>
    );
}
