"use client";

import Link from "next/link";

const stats = [
    { icon: "🧬", value: "Active", label: "Avatar Status", bg: "rgba(108, 92, 231, 0.15)", color: "#6c5ce7" },
    { icon: "📹", value: "5", label: "Meetings Today", bg: "rgba(0, 210, 255, 0.15)", color: "#00d2ff" },
    { icon: "💬", value: "23", label: "Messages Handled", bg: "rgba(168, 85, 247, 0.15)", color: "#a855f7" },
    { icon: "📚", value: "12", label: "Documents Indexed", bg: "rgba(6, 255, 165, 0.15)", color: "#06ffa5" },
];

const recentMeetings = [
    { time: "9:00", period: "AM", title: "Daily Standup", team: "Engineering Team", status: "completed" },
    { time: "11:30", period: "AM", title: "Product Review", team: "Product & Design", status: "completed" },
    { time: "2:00", period: "PM", title: "Sprint Planning", team: "Full Team", status: "live" },
    { time: "4:00", period: "PM", title: "Client Check-in", team: "Client — Acme Corp", status: "upcoming" },
];

const recentChats = [
    { from: "Sarah K.", message: "Can you review the latest design mockups?", time: "2 min ago", avatar: "👩‍💼" },
    { from: "Mike R.", message: "Sprint velocity looks great this week!", time: "15 min ago", avatar: "👨‍💻" },
    { from: "Lisa P.", message: "Budget report is ready for review.", time: "1 hr ago", avatar: "👩‍🔬" },
];

const activities = [
    { icon: "📹", text: "AI attended Daily Standup and delivered your update", time: "9:15 AM", color: "rgba(108, 92, 231, 0.15)" },
    { icon: "💬", text: 'Replied to Sarah: "I\'ll review the mockups by EOD"', time: "9:32 AM", color: "rgba(0, 210, 255, 0.15)" },
    { icon: "📚", text: "Indexed new policy document: Q1 2026 Guidelines", time: "10:00 AM", color: "rgba(6, 255, 165, 0.15)" },
    { icon: "📹", text: "Product Review meeting — presented sprint progress", time: "11:30 AM", color: "rgba(168, 85, 247, 0.15)" },
    { icon: "⚠️", text: "Escalated: Client asked about contract terms → sent to you", time: "12:15 PM", color: "rgba(255, 165, 0, 0.15)" },
];

export default function DashboardPage() {
    return (
        <>
            {/* Header */}
            <div className="page-header">
                <div>
                    <h1>Good afternoon, Rohan 👋</h1>
                    <p>Your AI clone has been busy today. Here&apos;s the summary.</p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <Link href="/avatar" className="btn-secondary">🧬 Avatar Studio</Link>
                    <Link href="/chat" className="btn-primary">💬 Open Chat</Link>
                </div>
            </div>

            <div className="page-body">
                {/* Stats */}
                <div className="stats-grid animate-fade-in-up">
                    {stats.map((s, i) => (
                        <div key={i} className="stat-card">
                            <div className="stat-icon" style={{ background: s.bg }}>
                                {s.icon}
                            </div>
                            <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                    {/* Today's Meetings */}
                    <div className="glass-card animate-fade-in-up delay-1" style={{ padding: "24px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 700 }}>
                                📅 Today&apos;s Meetings
                            </h2>
                            <Link href="/meetings" style={{ color: "var(--accent-1)", fontSize: "13px", textDecoration: "none" }}>
                                View All →
                            </Link>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {recentMeetings.map((m, i) => (
                                <div key={i} className="meeting-card" style={{ padding: "16px" }}>
                                    <div className="meeting-time">
                                        <div className="time">{m.time}</div>
                                        <div className="period">{m.period}</div>
                                    </div>
                                    <div style={{ width: "1px", height: "40px", background: "var(--border-glass)" }} />
                                    <div className="meeting-info">
                                        <h3 style={{ fontSize: "14px" }}>{m.title}</h3>
                                        <p>{m.team}</p>
                                    </div>
                                    <span className={`meeting-status ${m.status}`}>
                                        {m.status === "live" ? "🔴 Live" : m.status === "upcoming" ? "🕐 Upcoming" : "✓ Done"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="glass-card animate-fade-in-up delay-2" style={{ padding: "24px" }}>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>
                            ⚡ AI Activity Feed
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            {activities.map((a, i) => (
                                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                    <div style={{
                                        width: "36px", height: "36px", borderRadius: "10px",
                                        background: a.color, display: "flex", alignItems: "center",
                                        justifyContent: "center", fontSize: "16px", flexShrink: 0,
                                    }}>
                                        {a.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontSize: "13px", lineHeight: 1.5 }}>{a.text}</p>
                                        <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{a.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Chats */}
                <div className="glass-card animate-fade-in-up delay-3" style={{ padding: "24px", marginTop: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 700 }}>
                            💬 Recent AI Chat Responses
                        </h2>
                        <Link href="/chat" style={{ color: "var(--accent-1)", fontSize: "13px", textDecoration: "none" }}>
                            Open Chat →
                        </Link>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                        {recentChats.map((c, i) => (
                            <div key={i} style={{
                                background: "var(--bg-glass)",
                                border: "1px solid var(--border-glass)",
                                borderRadius: "var(--radius-sm)",
                                padding: "16px",
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                                    <div style={{
                                        width: "32px", height: "32px", borderRadius: "8px",
                                        background: "rgba(108, 92, 231, 0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                        {c.avatar}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "13px", fontWeight: 600 }}>{c.from}</div>
                                        <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{c.time}</div>
                                    </div>
                                </div>
                                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{c.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
