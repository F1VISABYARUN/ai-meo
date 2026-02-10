"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/dashboard", icon: "⬡", label: "Dashboard" },
    { href: "/avatar", icon: "🧬", label: "Avatar Studio" },
    { href: "/knowledge", icon: "📚", label: "Knowledge Hub" },
    { href: "/chat", icon: "💬", label: "AI Chat" },
    { href: "/meetings", icon: "📹", label: "Meetings" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <Link href="/" className="sidebar-logo">
                <div className="sidebar-logo-icon">M</div>
                <span className="sidebar-logo-text">AI MEO</span>
            </Link>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`sidebar-link ${pathname === item.href ? "active" : ""}`}
                    >
                        <span className="icon">{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="sidebar-link" style={{ cursor: "default" }}>
                    <span className="icon">👤</span>
                    <span style={{ fontSize: "13px" }}>
                        <strong style={{ display: "block", fontSize: "14px" }}>Rohan</strong>
                        <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>Pro Plan</span>
                    </span>
                </div>
            </div>
        </aside>
    );
}
