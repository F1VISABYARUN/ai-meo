"use client";

import { useState } from "react";

const tabs = ["Upcoming", "In Progress", "Completed"];

const upcomingMeetings = [
    {
        id: 1, time: "4:00 PM", endTime: "4:30 PM", title: "Client Check-in",
        team: "Client — Acme Corp", platform: "Zoom", attendees: 4,
        aiMode: "autonomous", status: "upcoming",
        agenda: ["Review Q1 deliverables", "Discuss timeline changes", "Budget update"],
    },
    {
        id: 2, time: "5:00 PM", endTime: "5:45 PM", title: "Tech Architecture Review",
        team: "Engineering Team", platform: "Google Meet", attendees: 6,
        aiMode: "listen-only", status: "upcoming",
        agenda: ["Database migration plan", "API versioning strategy", "Performance benchmarks"],
    },
];

const liveMeetings = [
    {
        id: 3, time: "2:00 PM", endTime: "3:00 PM", title: "Sprint Planning",
        team: "Full Team", platform: "Microsoft Teams", attendees: 12,
        aiMode: "autonomous", status: "live",
        transcript: [
            { speaker: "Sarah K.", text: "Let's start with the backlog grooming. We have 23 stories to estimate.", time: "2:01 PM" },
            { speaker: "AI (Rohan)", text: "Based on our velocity of 34 points from last sprint, I'd suggest we plan for 30-35 points this sprint to maintain sustainable pace.", time: "2:03 PM" },
            { speaker: "Mike R.", text: "Good point. The auth module stories are well-defined. I'd estimate those at 8 points total.", time: "2:05 PM" },
            { speaker: "AI (Rohan)", text: "Agreed. Looking at the engineering standards doc, we should also factor in security review time for the auth module. I'd add 3 more points for that.", time: "2:07 PM" },
        ],
    },
];

const completedMeetings = [
    {
        id: 4, time: "9:00 AM", endTime: "9:20 AM", title: "Daily Standup",
        team: "Engineering Team", platform: "Zoom", attendees: 8,
        aiMode: "autonomous", status: "completed", duration: "20 min",
        summary: "AI delivered Rohan's status update: Auth module at 90% completion, 2 PRs pending review, no blockers. Team discussed deployment timeline for Friday.",
        actionItems: ["Review PR #234", "Update Jira board", "Schedule deployment call"],
    },
    {
        id: 5, time: "11:30 AM", endTime: "12:15 PM", title: "Product Review",
        team: "Product & Design", platform: "Google Meet", attendees: 5,
        aiMode: "autonomous", status: "completed", duration: "45 min",
        summary: "AI presented sprint progress with visual dashboard. Discussed feature prioritization for Q2. Lisa raised concerns about timeline — AI escalated to Rohan for decision.",
        actionItems: ["Finalize Q2 roadmap", "Schedule design review", "Send meeting notes to stakeholders"],
    },
    {
        id: 6, time: "1:00 PM", endTime: "1:30 PM", title: "1:1 with Manager",
        team: "Direct Report", platform: "Zoom", attendees: 2,
        aiMode: "listen-only", status: "completed", duration: "30 min",
        summary: "AI attended in listen-only mode. Notes captured for Rohan's review. Key topics: performance review cycle, promotion discussion, team growth plans.",
        actionItems: ["Prepare self-review document", "Draft team expansion proposal"],
    },
];

export default function MeetingsPage() {
    const [activeTab, setActiveTab] = useState("Upcoming");
    const [expandedMeeting, setExpandedMeeting] = useState<number | null>(3);

    return (
        <>
            <div className="page-header">
                <div>
                    <h1>📹 Meeting Center</h1>
                    <p>Your AI clone attends and participates in meetings for you</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span className="badge badge-green">🔴 1 Live Meeting</span>
                    <button className="btn-primary">+ Schedule AI Meeting</button>
                </div>
            </div>

            <div className="page-body">
                {/* Stats Row */}
                <div className="stats-grid animate-fade-in-up" style={{ marginBottom: "28px" }}>
                    {[
                        { icon: "📹", value: "156", label: "Total Meetings Attended", bg: "rgba(108, 92, 231, 0.15)", color: "#6c5ce7" },
                        { icon: "⏱️", value: "78hrs", label: "Time Saved", bg: "rgba(0, 210, 255, 0.15)", color: "#00d2ff" },
                        { icon: "📝", value: "342", label: "Action Items Captured", bg: "rgba(168, 85, 247, 0.15)", color: "#a855f7" },
                        { icon: "🎯", value: "94%", label: "Accuracy Score", bg: "rgba(6, 255, 165, 0.15)", color: "#06ffa5" },
                    ].map((s, i) => (
                        <div key={i} className="stat-card">
                            <div className="stat-icon" style={{ background: s.bg }}>{s.icon}</div>
                            <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="tabs animate-fade-in-up delay-1">
                    {tabs.map((tab) => (
                        <button key={tab}
                            className={`tab ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}>
                            {tab}
                            {tab === "In Progress" && <span style={{ marginLeft: "6px", fontSize: "10px" }}>🔴</span>}
                        </button>
                    ))}
                </div>

                {/* Meeting Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {activeTab === "Upcoming" && upcomingMeetings.map((m) => (
                        <div key={m.id} className="glass-card animate-fade-in-up" style={{ padding: "0", overflow: "hidden" }}>
                            <div style={{ padding: "24px", display: "flex", alignItems: "center", gap: "20px", cursor: "pointer" }}
                                onClick={() => setExpandedMeeting(expandedMeeting === m.id ? null : m.id)}>
                                <div className="meeting-time">
                                    <div className="time">{m.time}</div>
                                    <div className="period">to {m.endTime}</div>
                                </div>
                                <div style={{ width: "1px", height: "50px", background: "var(--border-glass)" }} />
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{m.title}</h3>
                                    <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{m.team} • {m.platform} • {m.attendees} attendees</p>
                                </div>
                                <span className="badge badge-purple">🤖 {m.aiMode === "autonomous" ? "Full Auto" : "Listen Only"}</span>
                                <span className="meeting-status upcoming">🕐 Upcoming</span>
                            </div>
                            {expandedMeeting === m.id && (
                                <div style={{ padding: "0 24px 24px", borderTop: "1px solid var(--border-glass)", paddingTop: "20px" }}>
                                    <h4 style={{ fontSize: "13px", fontWeight: 600, marginBottom: "12px", color: "var(--text-secondary)" }}>📋 AGENDA</h4>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        {m.agenda.map((item, i) => (
                                            <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px" }}>
                                                <span style={{ color: "var(--accent-1)" }}>•</span> {item}
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                                        <button className="btn-primary" style={{ fontSize: "13px", padding: "10px 20px" }}>🤖 Send AI Clone</button>
                                        <button className="btn-secondary" style={{ fontSize: "13px", padding: "10px 20px" }}>✏️ Edit Instructions</button>
                                        <button className="btn-secondary" style={{ fontSize: "13px", padding: "10px 20px" }}>❌ Cancel</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {activeTab === "In Progress" && liveMeetings.map((m) => (
                        <div key={m.id} className="glass-card animate-fade-in-up" style={{
                            padding: "0", overflow: "hidden",
                            border: "1px solid rgba(6, 255, 165, 0.3)",
                            boxShadow: "0 0 20px rgba(6, 255, 165, 0.1)",
                        }}>
                            <div style={{ padding: "24px", display: "flex", alignItems: "center", gap: "20px" }}>
                                <div style={{ position: "relative" }}>
                                    <div className="meeting-time">
                                        <div className="time">{m.time}</div>
                                        <div className="period">to {m.endTime}</div>
                                    </div>
                                    <div style={{
                                        position: "absolute", top: "-4px", right: "-4px",
                                        width: "12px", height: "12px", borderRadius: "50%",
                                        background: "#ff4444", animation: "pulse-glow 1s infinite",
                                    }} />
                                </div>
                                <div style={{ width: "1px", height: "50px", background: "var(--border-glass)" }} />
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{m.title}</h3>
                                    <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{m.team} • {m.platform} • {m.attendees} attendees</p>
                                </div>
                                <span className="meeting-status live">🔴 Live Now</span>
                            </div>
                            {/* Live Transcript */}
                            <div style={{ padding: "0 24px 24px", borderTop: "1px solid var(--border-glass)", paddingTop: "20px" }}>
                                <h4 style={{ fontSize: "13px", fontWeight: 600, marginBottom: "16px", color: "var(--text-secondary)" }}>📝 LIVE TRANSCRIPT</h4>
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxHeight: "300px", overflow: "auto" }}>
                                    {m.transcript.map((t, i) => (
                                        <div key={i} style={{
                                            display: "flex", gap: "12px", alignItems: "flex-start",
                                            padding: "12px",
                                            borderRadius: "var(--radius-sm)",
                                            background: t.speaker.includes("AI") ? "rgba(108, 92, 231, 0.08)" : "transparent",
                                            border: t.speaker.includes("AI") ? "1px solid rgba(108, 92, 231, 0.15)" : "none",
                                        }}>
                                            <div style={{
                                                width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
                                                background: t.speaker.includes("AI") ? "var(--gradient-1)" : "rgba(255,255,255,0.05)",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                fontSize: "14px",
                                            }}>
                                                {t.speaker.includes("AI") ? "🧬" : "👤"}
                                            </div>
                                            <div>
                                                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                                                    <span style={{ fontSize: "13px", fontWeight: 600, color: t.speaker.includes("AI") ? "var(--accent-1)" : "var(--text-primary)" }}>
                                                        {t.speaker}
                                                    </span>
                                                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{t.time}</span>
                                                </div>
                                                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{t.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                                    <button className="btn-primary" style={{ fontSize: "13px", padding: "10px 20px" }}>👁️ Watch Live</button>
                                    <button className="btn-secondary" style={{ fontSize: "13px", padding: "10px 20px" }}>✋ Take Over</button>
                                    <button className="btn-secondary" style={{ fontSize: "13px", padding: "10px 20px" }}>💬 Send Message to AI</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {activeTab === "Completed" && completedMeetings.map((m) => (
                        <div key={m.id} className="glass-card animate-fade-in-up" style={{ padding: "0", overflow: "hidden" }}
                            onClick={() => setExpandedMeeting(expandedMeeting === m.id ? null : m.id)}>
                            <div style={{ padding: "24px", display: "flex", alignItems: "center", gap: "20px", cursor: "pointer" }}>
                                <div className="meeting-time">
                                    <div className="time">{m.time}</div>
                                    <div className="period">{m.duration}</div>
                                </div>
                                <div style={{ width: "1px", height: "50px", background: "var(--border-glass)" }} />
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{m.title}</h3>
                                    <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{m.team} • {m.platform} • {m.attendees} attendees</p>
                                </div>
                                <span className="badge badge-purple">🤖 {m.aiMode === "autonomous" ? "Full Auto" : "Listen Only"}</span>
                                <span className="meeting-status completed">✓ Completed</span>
                            </div>
                            {expandedMeeting === m.id && (
                                <div style={{ padding: "0 24px 24px", borderTop: "1px solid var(--border-glass)", paddingTop: "20px" }}>
                                    <h4 style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px", color: "var(--text-secondary)" }}>📝 SUMMARY</h4>
                                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>{m.summary}</p>
                                    <h4 style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px", color: "var(--text-secondary)" }}>✅ ACTION ITEMS</h4>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                        {m.actionItems.map((item, i) => (
                                            <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px" }}>
                                                <span style={{ color: "var(--accent-4)" }}>☐</span> {item}
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                                        <button className="btn-secondary" style={{ fontSize: "13px", padding: "10px 20px" }}>📄 Full Transcript</button>
                                        <button className="btn-secondary" style={{ fontSize: "13px", padding: "10px 20px" }}>📧 Share Notes</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
