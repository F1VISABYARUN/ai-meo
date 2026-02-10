"use client";

import { useState, useRef } from "react";

export default function AvatarPage() {
    const [avatarImage, setAvatarImage] = useState<string | null>(null);
    const [voiceRecorded, setVoiceRecorded] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [avatarName, setAvatarName] = useState("Rohan's Clone");
    const [personality, setPersonality] = useState("professional");
    const [step, setStep] = useState(1);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarImage(reader.result as string);
                setStep(2);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleRecording = () => {
        if (isRecording) {
            setIsRecording(false);
            setVoiceRecorded(true);
            setStep(3);
        } else {
            setIsRecording(true);
        }
    };

    return (
        <>
            <div className="page-header">
                <div>
                    <h1>🧬 Avatar Studio</h1>
                    <p>Create and customize your AI digital twin</p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                    <span className={`badge ${step >= 1 ? "badge-purple" : ""}`}>1. Face</span>
                    <span className={`badge ${step >= 2 ? "badge-blue" : ""}`}>2. Voice</span>
                    <span className={`badge ${step >= 3 ? "badge-green" : ""}`}>3. Personality</span>
                </div>
            </div>

            <div className="page-body">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                    {/* Left: Upload & Preview */}
                    <div>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
                            📸 Face Upload
                        </h2>
                        <input
                            type="file"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: "none" }}
                        />
                        <div
                            className="avatar-preview-area"
                            onClick={() => fileInputRef.current?.click()}
                            style={avatarImage ? { border: "1px solid var(--border-glass)" } : {}}
                        >
                            {avatarImage ? (
                                <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={avatarImage}
                                        alt="Avatar"
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            border: "3px solid var(--accent-1)",
                                            boxShadow: "0 0 30px rgba(108, 92, 231, 0.3)",
                                        }}
                                    />
                                    <div style={{ marginTop: "16px", textAlign: "center" }}>
                                        <div className="badge badge-green">✓ Face Captured</div>
                                        <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "8px" }}>Click to change photo</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="upload-prompt">
                                    <div className="icon">📷</div>
                                    <h3>Upload Your Photo</h3>
                                    <p>Click or drag a clear front-facing photo</p>
                                    <p style={{ marginTop: "8px", fontSize: "12px" }}>Supported: JPG, PNG, WEBP</p>
                                </div>
                            )}
                        </div>

                        {/* Voice Recording */}
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 700, marginBottom: "16px", marginTop: "24px" }}>
                            🎤 Voice Cloning
                        </h2>
                        <div className="glass-card" style={{ padding: "24px" }}>
                            {voiceRecorded ? (
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "48px", marginBottom: "12px" }}>✅</div>
                                    <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>Voice Captured!</h3>
                                    <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Your voice has been recorded and is being processed for cloning.</p>
                                    <div style={{ marginTop: "16px", display: "flex", gap: "12px", justifyContent: "center" }}>
                                        <button className="btn-secondary" style={{ fontSize: "13px", padding: "8px 20px" }}
                                            onClick={() => { setVoiceRecorded(false); }}>
                                            🔄 Re-record
                                        </button>
                                        <button className="btn-primary" style={{ fontSize: "13px", padding: "8px 20px" }}>
                                            ▶ Preview Voice
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ textAlign: "center" }}>
                                    <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "20px" }}>
                                        Read the following text aloud for voice cloning (takes ~2 minutes):
                                    </p>
                                    <div style={{
                                        background: "rgba(108, 92, 231, 0.08)",
                                        borderRadius: "12px",
                                        padding: "20px",
                                        marginBottom: "20px",
                                        border: "1px solid rgba(108, 92, 231, 0.15)",
                                        fontSize: "14px",
                                        lineHeight: 1.7,
                                        color: "var(--text-secondary)",
                                        fontStyle: "italic",
                                    }}>
                                        &quot;Hello, my name is Rohan and I&apos;m testing my AI voice clone. The quick brown fox jumps over the lazy dog.
                                        I believe in building great products that make a real difference in people&apos;s lives.
                                        Let&apos;s schedule a follow-up meeting to discuss the roadmap for next quarter.&quot;
                                    </div>
                                    <button
                                        className={isRecording ? "btn-secondary" : "btn-primary"}
                                        onClick={toggleRecording}
                                        style={{
                                            padding: "14px 32px",
                                            animation: isRecording ? "pulse-glow 1.5s infinite" : "none",
                                        }}
                                    >
                                        {isRecording ? "⏹ Stop Recording" : "🎙️ Start Recording"}
                                    </button>
                                    {isRecording && (
                                        <div style={{ marginTop: "16px", display: "flex", gap: "4px", justifyContent: "center", alignItems: "center" }}>
                                            {[...Array(12)].map((_, i) => (
                                                <div key={i} style={{
                                                    width: "3px",
                                                    background: "var(--accent-1)",
                                                    borderRadius: "2px",
                                                    animation: `float ${0.5 + Math.random() * 0.5}s ease-in-out infinite`,
                                                    animationDelay: `${i * 0.1}s`,
                                                    height: `${10 + Math.random() * 25}px`,
                                                }} />
                                            ))}
                                            <span style={{ marginLeft: "12px", fontSize: "13px", color: "var(--accent-1)" }}>Recording...</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Avatar Config */}
                    <div>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
                            ⚙️ Avatar Configuration
                        </h2>

                        {/* Avatar Preview Card */}
                        <div className="glass-card" style={{
                            padding: "32px",
                            textAlign: "center",
                            marginBottom: "24px",
                            background: "linear-gradient(135deg, rgba(108, 92, 231, 0.08) 0%, rgba(0, 210, 255, 0.08) 100%)",
                        }}>
                            <div style={{
                                width: "120px", height: "120px", borderRadius: "50%",
                                background: avatarImage ? "transparent" : "var(--gradient-1)",
                                margin: "0 auto 16px",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: avatarImage ? "0" : "48px",
                                border: "3px solid var(--accent-1)",
                                overflow: "hidden",
                                boxShadow: "0 0 30px rgba(108, 92, 231, 0.3)",
                            }}>
                                {avatarImage ? (
                                    <img src={avatarImage} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                ) : "🧬"}
                            </div>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: 700 }}>
                                {avatarName}
                            </h3>
                            <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "12px" }}>
                                <span className={`badge ${avatarImage ? "badge-green" : "badge-purple"}`}>
                                    {avatarImage ? "✓ Face" : "○ Face"}
                                </span>
                                <span className={`badge ${voiceRecorded ? "badge-green" : "badge-purple"}`}>
                                    {voiceRecorded ? "✓ Voice" : "○ Voice"}
                                </span>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="glass-card" style={{ padding: "20px", marginBottom: "16px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px", display: "block" }}>
                                Avatar Name
                            </label>
                            <input
                                type="text"
                                value={avatarName}
                                onChange={(e) => setAvatarName(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    background: "var(--bg-glass)",
                                    border: "1px solid var(--border-glass)",
                                    borderRadius: "var(--radius-sm)",
                                    color: "var(--text-primary)",
                                    fontSize: "14px",
                                    outline: "none",
                                    fontFamily: "'Inter', sans-serif",
                                }}
                            />
                        </div>

                        {/* Personality */}
                        <div className="glass-card" style={{ padding: "20px", marginBottom: "16px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 600, marginBottom: "12px", display: "block" }}>
                                Personality Style
                            </label>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                {[
                                    { id: "professional", label: "🎯 Professional", desc: "Formal, concise, business-appropriate" },
                                    { id: "friendly", label: "😊 Friendly", desc: "Warm, approachable, conversational" },
                                    { id: "technical", label: "🔧 Technical", desc: "Detailed, precise, data-driven" },
                                    { id: "creative", label: "🎨 Creative", desc: "Expressive, innovative, dynamic" },
                                ].map((p) => (
                                    <div key={p.id}
                                        onClick={() => setPersonality(p.id)}
                                        style={{
                                            padding: "12px 16px",
                                            borderRadius: "var(--radius-sm)",
                                            border: `1px solid ${personality === p.id ? "var(--accent-1)" : "var(--border-glass)"}`,
                                            background: personality === p.id ? "rgba(108, 92, 231, 0.1)" : "transparent",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}>
                                        <div style={{ fontSize: "14px", fontWeight: 600 }}>{p.label}</div>
                                        <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>{p.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Guardrails */}
                        <div className="glass-card" style={{ padding: "20px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 600, marginBottom: "12px", display: "block" }}>
                                🛡️ Safety Guardrails
                            </label>
                            {[
                                { label: "Require approval before sending messages", defaultOn: false },
                                { label: "Escalate to me for unknown topics", defaultOn: true },
                                { label: "Never share financial information", defaultOn: true },
                                { label: "Disclose AI status when asked", defaultOn: true },
                            ].map((g, i) => (
                                <div key={i} style={{
                                    display: "flex", justifyContent: "space-between", alignItems: "center",
                                    padding: "10px 0",
                                    borderBottom: i < 3 ? "1px solid var(--border-glass)" : "none",
                                }}>
                                    <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{g.label}</span>
                                    <GuardrailToggle defaultOn={g.defaultOn} />
                                </div>
                            ))}
                        </div>

                        {/* Save Button */}
                        <button className="btn-primary" style={{
                            width: "100%", marginTop: "24px", padding: "16px", justifyContent: "center", fontSize: "16px",
                        }}>
                            💾 Save & Activate Avatar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

function GuardrailToggle({ defaultOn }: { defaultOn: boolean }) {
    const [on, setOn] = useState(defaultOn);
    return (
        <div className={`toggle ${on ? "active" : ""}`} onClick={() => setOn(!on)} />
    );
}
