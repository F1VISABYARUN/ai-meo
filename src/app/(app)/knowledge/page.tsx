"use client";

import { useState, useRef } from "react";

const existingDocs = [
    { name: "Company Policy Handbook 2026", type: "PDF", size: "2.4 MB", progress: 100, pages: 84, icon: "📕", color: "rgba(108, 92, 231, 0.15)" },
    { name: "Q1 Sprint Planning Doc", type: "DOCX", size: "1.1 MB", progress: 100, pages: 23, icon: "📘", color: "rgba(0, 210, 255, 0.15)" },
    { name: "Product Roadmap 2026", type: "PDF", size: "3.2 MB", progress: 78, pages: 56, icon: "📗", color: "rgba(6, 255, 165, 0.15)" },
    { name: "Engineering Standards v3", type: "PDF", size: "1.8 MB", progress: 100, pages: 42, icon: "📙", color: "rgba(168, 85, 247, 0.15)" },
    { name: "Client Onboarding Guide", type: "PDF", size: "980 KB", progress: 45, pages: 18, icon: "📕", color: "rgba(108, 92, 231, 0.15)" },
    { name: "HR Leave & Benefits Policy", type: "PDF", size: "1.5 MB", progress: 100, pages: 32, icon: "📘", color: "rgba(0, 210, 255, 0.15)" },
];

const categories = [
    { name: "All Documents", count: 12, active: true },
    { name: "Policies", count: 4 },
    { name: "Projects", count: 5 },
    { name: "Meeting Notes", count: 3 },
];

export default function KnowledgePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [activeCategory, setActiveCategory] = useState("All Documents");

    const filteredDocs = existingDocs.filter((d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="page-header">
                <div>
                    <h1>📚 Knowledge Hub</h1>
                    <p>Upload documents and policies for your AI clone to learn from</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span className="badge badge-green">🧠 12 docs indexed</span>
                    <button className="btn-primary" onClick={() => fileInputRef.current?.click()}>
                        ⬆ Upload Document
                    </button>
                </div>
            </div>

            <div className="page-body">
                {/* Upload Area */}
                <input type="file" ref={fileInputRef} multiple accept=".pdf,.docx,.txt,.md,.csv"
                    style={{ display: "none" }} onChange={() => { }} />
                <div
                    className="avatar-preview-area animate-fade-in-up"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
                    style={{
                        minHeight: "180px",
                        marginBottom: "24px",
                        borderColor: dragActive ? "var(--accent-1)" : undefined,
                        background: dragActive ? "rgba(108, 92, 231, 0.05)" : undefined,
                    }}
                >
                    <div className="upload-prompt">
                        <div className="icon">📄</div>
                        <h3>Drop documents here or click to upload</h3>
                        <p>Supports PDF, DOCX, TXT, MD, CSV — up to 50MB per file</p>
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "24px" }}>
                    {/* Categories Sidebar */}
                    <div className="animate-fade-in-up delay-1">
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", fontWeight: 700, marginBottom: "12px", color: "var(--text-secondary)" }}>
                            CATEGORIES
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {categories.map((c) => (
                                <div key={c.name}
                                    onClick={() => setActiveCategory(c.name)}
                                    style={{
                                        padding: "10px 14px",
                                        borderRadius: "var(--radius-sm)",
                                        cursor: "pointer",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        background: activeCategory === c.name ? "rgba(108, 92, 231, 0.15)" : "transparent",
                                        color: activeCategory === c.name ? "var(--accent-1)" : "var(--text-secondary)",
                                        border: activeCategory === c.name ? "1px solid rgba(108, 92, 231, 0.2)" : "1px solid transparent",
                                        transition: "all 0.2s ease",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                    }}>
                                    <span>{c.name}</span>
                                    <span style={{ fontSize: "12px", opacity: 0.7 }}>{c.count}</span>
                                </div>
                            ))}
                        </div>

                        {/* Knowledge Stats */}
                        <div className="glass-card" style={{ padding: "20px", marginTop: "20px" }}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>
                                📊 Knowledge Stats
                            </h3>
                            {[
                                { label: "Total Documents", value: "12" },
                                { label: "Pages Indexed", value: "255" },
                                { label: "Topics Covered", value: "34" },
                                { label: "Last Updated", value: "2 hrs ago" },
                            ].map((s, i) => (
                                <div key={i} style={{
                                    display: "flex", justifyContent: "space-between",
                                    padding: "8px 0",
                                    borderBottom: i < 3 ? "1px solid var(--border-glass)" : "none",
                                }}>
                                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{s.label}</span>
                                    <span style={{ fontSize: "12px", fontWeight: 600 }}>{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents List */}
                    <div className="animate-fade-in-up delay-2">
                        {/* Search */}
                        <div style={{
                            display: "flex", gap: "12px", marginBottom: "20px",
                        }}>
                            <div style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                background: "var(--bg-card)",
                                border: "1px solid var(--border-glass)",
                                borderRadius: "var(--radius-sm)",
                                padding: "0 16px",
                            }}>
                                <span>🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search documents..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        flex: 1,
                                        padding: "12px 0",
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                        color: "var(--text-primary)",
                                        fontSize: "14px",
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Docs Grid */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {filteredDocs.map((doc, i) => (
                                <div key={i} className="doc-card">
                                    <div className="doc-icon" style={{ background: doc.color }}>
                                        {doc.icon}
                                    </div>
                                    <div className="doc-info" style={{ flex: 1 }}>
                                        <h3>{doc.name}</h3>
                                        <p>{doc.type} • {doc.size} • {doc.pages} pages</p>
                                        <div className="doc-progress">
                                            <div className="doc-progress-bar" style={{ width: `${doc.progress}%` }} />
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <span className={`badge ${doc.progress === 100 ? "badge-green" : "badge-blue"}`}>
                                            {doc.progress === 100 ? "✓ Indexed" : `${doc.progress}% Processing`}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
