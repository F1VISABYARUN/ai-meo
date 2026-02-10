"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const features = [
  {
    icon: "🧬",
    title: "AI Face Cloning",
    desc: "Upload your photo and create a photorealistic AI avatar that looks and moves like you.",
    color: "rgba(108, 92, 231, 0.15)",
    border: "rgba(108, 92, 231, 0.3)",
  },
  {
    icon: "🗣️",
    title: "Voice Cloning",
    desc: "Record 2 minutes of your voice. Your AI clone speaks in your exact tone and style.",
    color: "rgba(0, 210, 255, 0.15)",
    border: "rgba(0, 210, 255, 0.3)",
  },
  {
    icon: "📹",
    title: "Meeting Autopilot",
    desc: "Your avatar joins Zoom, Teams & Meet. It listens, speaks, and takes notes for you.",
    color: "rgba(168, 85, 247, 0.15)",
    border: "rgba(168, 85, 247, 0.3)",
  },
  {
    icon: "📚",
    title: "Policy & Doc Brain",
    desc: "Upload company policies and docs. Your clone reads, understands, and quotes them.",
    color: "rgba(6, 255, 165, 0.15)",
    border: "rgba(6, 255, 165, 0.3)",
  },
  {
    icon: "💬",
    title: "Chat as You",
    desc: "Your AI responds to Slack, Teams, and in-app messages — writing exactly like you.",
    color: "rgba(108, 92, 231, 0.15)",
    border: "rgba(108, 92, 231, 0.3)",
  },
  {
    icon: "🛡️",
    title: "Full Control",
    desc: "Review everything before it's sent. Set guardrails. Escalate to the real you anytime.",
    color: "rgba(0, 210, 255, 0.15)",
    border: "rgba(0, 210, 255, 0.3)",
  },
];

const stats = [
  { value: "10x", label: "Meeting Productivity" },
  { value: "2hrs", label: "Saved Daily" },
  { value: "99%", label: "Voice Accuracy" },
  { value: "24/7", label: "Always Available" },
];

const steps = [
  { num: "01", title: "Create Your Avatar", desc: "Upload a photo and record your voice. Our AI builds your digital twin in minutes." },
  { num: "02", title: "Feed It Knowledge", desc: "Upload policies, docs, project files. Your clone learns everything you know." },
  { num: "03", title: "Let It Work", desc: "Your AI attends meetings, chats, and delivers updates — as you. You review everything." },
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Background Effects */}
      <div className="hero-bg-effects">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      {/* Navbar */}
      <nav className="landing-nav" style={{ borderColor: scrolled ? "var(--border-glass)" : "transparent" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div className="sidebar-logo-icon">M</div>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "22px", fontWeight: 700, color: "var(--text-primary)" }}>
            AI MEO
          </span>
        </Link>
        <ul className="landing-nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#stats">Impact</a></li>
          <li>
            <Link href="/dashboard" className="btn-primary" style={{ padding: "10px 24px", fontSize: "13px" }}>
              Launch App →
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div className="animate-fade-in-up" style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div className="badge badge-purple" style={{ marginBottom: "24px", display: "inline-flex" }}>
            <span>✨</span> AI-Powered Digital Twin Platform
          </div>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Your AI Clone.{" "}
            <span className="gradient-text">Your Meetings.</span>{" "}
            Your Freedom.
          </h1>
          <p style={{
            fontSize: "18px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}>
            Create a virtual AI twin that looks like you, sounds like you, and represents you in
            meetings, standups, and chats — so you can focus on what truly matters.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/dashboard" className="btn-primary" style={{ padding: "16px 36px", fontSize: "16px" }}>
              🚀 Get Started Free
            </Link>
            <a href="#how-it-works" className="btn-secondary" style={{ padding: "16px 36px", fontSize: "16px" }}>
              ▶ See How It Works
            </a>
          </div>
        </div>

        {/* Floating Mock UI */}
        <div className="animate-fade-in-up delay-3" style={{
          maxWidth: "900px",
          margin: "80px auto 0",
          padding: "0 24px",
        }}>
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-glass)",
            borderRadius: "20px",
            padding: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}>
            {/* Mock browser bar */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px", alignItems: "center" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febd2e" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
              <div style={{
                flex: 1, marginLeft: "12px", background: "rgba(255,255,255,0.05)",
                borderRadius: "8px", padding: "8px 16px", fontSize: "12px", color: "var(--text-muted)"
              }}>
                app.aimeo.ai/dashboard
              </div>
            </div>
            {/* Mock dashboard content */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
              <div style={{
                background: "rgba(108, 92, 231, 0.1)",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid rgba(108, 92, 231, 0.2)",
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>🧬</div>
                <div style={{ fontWeight: 700, fontSize: "20px", fontFamily: "'Outfit', sans-serif" }}>Avatar Ready</div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>Clone active & learning</div>
              </div>
              <div style={{
                background: "rgba(0, 210, 255, 0.1)",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid rgba(0, 210, 255, 0.2)",
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>📹</div>
                <div style={{ fontWeight: 700, fontSize: "20px", fontFamily: "'Outfit', sans-serif" }}>3 Meetings</div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>Attended today by AI</div>
              </div>
              <div style={{
                background: "rgba(6, 255, 165, 0.1)",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid rgba(6, 255, 165, 0.2)",
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>💬</div>
                <div style={{ fontWeight: 700, fontSize: "20px", fontFamily: "'Outfit', sans-serif" }}>12 Chats</div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>Handled autonomously</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section id="stats" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            padding: "40px",
            background: "var(--bg-card)",
            border: "1px solid var(--border-glass)",
            borderRadius: "20px",
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div className="gradient-text" style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "36px",
                  fontWeight: 800,
                }}>
                  {s.value}
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: "13px", marginTop: "4px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="animate-fade-in-up">
          <div className="badge badge-blue" style={{ display: "flex", width: "fit-content", margin: "0 auto 16px" }}>
            ⚡ Core Capabilities
          </div>
          <h2 className="section-title">
            Everything Your <span className="gradient-text">Digital Twin</span> Can Do
          </h2>
          <p className="section-subtitle">
            From face cloning to autonomous meeting attendance — AI MEO is your full workplace proxy.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
              <div className="feature-icon" style={{ background: f.color, border: `1px solid ${f.border}` }}>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section">
        <div className="badge badge-green" style={{ display: "flex", width: "fit-content", margin: "0 auto 16px" }}>
          🎯 Simple 3-Step Process
        </div>
        <h2 className="section-title">
          How <span className="gradient-text-2">AI MEO</span> Works
        </h2>
        <p className="section-subtitle">
          Get your digital twin up and running in under 10 minutes.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "700px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div key={i} className="glass-card animate-fade-in-up" style={{
              padding: "32px",
              display: "flex",
              gap: "24px",
              alignItems: "flex-start",
              animationDelay: `${i * 0.15}s`,
              opacity: 0,
            }}>
              <div className="gradient-text" style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "48px",
                fontWeight: 900,
                lineHeight: 1,
                flexShrink: 0,
              }}>
                {step.num}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center", paddingBottom: "120px" }}>
        <div className="animate-fade-in-up glass-card" style={{
          padding: "60px 40px",
          maxWidth: "700px",
          margin: "0 auto",
          background: "linear-gradient(135deg, rgba(108, 92, 231, 0.1) 0%, rgba(0, 210, 255, 0.1) 100%)",
          border: "1px solid rgba(108, 92, 231, 0.2)",
        }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "36px", fontWeight: 800, marginBottom: "16px" }}>
            Ready to Clone Yourself?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            Stop wasting hours in meetings you don&apos;t need to attend. Let your AI handle it.
          </p>
          <Link href="/dashboard" className="btn-primary" style={{ padding: "16px 40px", fontSize: "16px" }}>
            🚀 Launch AI MEO
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "32px 40px",
        borderTop: "1px solid var(--border-glass)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="sidebar-logo-icon" style={{ width: "32px", height: "32px", fontSize: "14px", borderRadius: "8px" }}>M</div>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "16px" }}>AI MEO</span>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
          © 2026 AI MEO. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
