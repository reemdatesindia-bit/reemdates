'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageCircle, Home as HomeIcon, Info, ShoppingBag } from 'lucide-react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleWhatsAppSend = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappNumber = '916238273976';
        const text = `Hello Reem Premium!%0A%0A*Name:* ${name}%0A*Message:* ${message}`;
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    };

    return (
        <main className="contact-main" style={{ background: 'var(--bg)', minHeight: '100vh', color: '#3b2818', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 0 60px 0' }}>
            {/* Refined Navbar for inner pages */}
            <header className="navbar">
                <div className="nav-container">
                    <div className="logo-container">
                        <Link href="/" className="logo-brand">
                            <Image src="/logo.png" alt="REEM Logo" width={200} height={80} className="logo-img" style={{ objectFit: 'contain' }} />
                        </Link>
                    </div>
                    <div className="nav-links-wrapper">
                        <nav className="nav-links">
                            <Link href="/" className="nav-link">
                                <HomeIcon size={20} className="nav-icon" />
                                <span>Home</span>
                            </Link>
                            <Link href="/#story" className="nav-link">
                                <Info size={20} className="nav-icon" />
                                <span>About</span>
                            </Link>
                            <Link href="/products" className="nav-link">
                                <ShoppingBag size={20} className="nav-icon" />
                                <span>Products</span>
                            </Link>
                            <Link href="/contact" className="nav-link active">
                                <Phone size={20} className="nav-icon" />
                                <span>Contact</span>
                            </Link>
                        </nav>
                    </div>
                    <div className="nav-actions-placeholder"></div>
                </div>
            </header>

            <div className="mobile-top-logo" style={{ position: 'fixed', top: 0, left: 0, width: '100%', background: 'var(--bg)', zIndex: 1001, padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <Link href="/">
                    <div className="logo-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                        <Image src="/logo.png" alt="Reem Logo" width={45} height={45} className="logo-img" />
                        <div className="logo-text">
                            <h3 style={{ color: '#3b2818', margin: 0 }}>REEMDATES.INDIA</h3>
                            <p style={{ color: '#6d5a48', margin: 0, fontSize: '0.7rem', letterSpacing: '1px' }}>QUALITY • FRESHNESS • TRUST</p>
                        </div>
                    </div>
                </Link>
            </div>

            <section className="container">
                <div className="contact-grid">
                    <div className="contact-registry-card">
                        <h2 className="contact-section-heading">Contact<br />Information</h2>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <MapPin size={24} />
                            </div>
                            <div className="contact-content-box">
                                <span className="contact-item-label">Our Location</span>
                                <span className="contact-item-value">Kozhikode, Kerala, India</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <Phone size={24} />
                            </div>
                            <div className="contact-content-box">
                                <span className="contact-item-label">Phone Numbers</span>
                                <span className="contact-item-value">+91 6238 273 976</span>
                                <span className="contact-item-value">+91 8086 304 231</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <Mail size={24} />
                            </div>
                            <div className="contact-content-box">
                                <span className="contact-item-label">Email Address</span>
                                <span className="contact-item-value">reemdatesindia@gmail.com</span>
                            </div>
                        </div>

                        <h4 className="social-heading">Follow Us</h4>
                        <div className="social-links-row">
                            <a href="https://wa.me/916238273976" target="_blank" rel="noopener noreferrer" className="social-circle-btn">
                                <MessageCircle size={20} />
                            </a>
                            <a href="https://www.instagram.com/reemdates.india/?hl=en" target="_blank" rel="noopener noreferrer" className="social-circle-btn">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-circle-btn">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-message-card">
                        <h2 className="contact-message-title">Send Message</h2>
                        <form onSubmit={handleWhatsAppSend}>
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="your name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-textarea"
                                    placeholder="Write your message here..."
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-whatsapp-send">
                                <MessageCircle size={20} />
                                Send Message via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
