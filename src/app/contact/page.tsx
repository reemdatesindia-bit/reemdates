'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="contact-main" style={{ paddingTop: '150px', background: 'var(--bg)', minHeight: '100vh', color: '#3b2818' }}>
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
                            <Link href="/" className="nav-link">Home</Link>
                            <Link href="/#story" className="nav-link">About</Link>
                            <Link href="/products" className="nav-link">Products</Link>
                            <Link href="/contact" className="nav-link active">Contact</Link>
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

            <section className="container" style={{ paddingBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 className="section-title text-center" style={{ color: '#3b2818', fontSize: '3.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Get in Touch</h1>
                    <p style={{ color: '#6d5a48', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
                        Have questions about our premium dates? We'd love to hear from you. Reach out to us using the form below or through our contact information.
                    </p>
                </div>

                <div className="contact-grid">

                    {/* Contact Info */}
                    <div style={{ background: '#ffffff', padding: '4rem 3rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                        <h3 style={{ color: '#3b2818', fontSize: '1.8rem', marginBottom: '2.5rem', fontFamily: 'var(--font-display)', letterSpacing: '1px' }}>Contact Information</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{ color: 'var(--theme)', marginTop: '0.2rem', background: '#fdfbf7', padding: '12px', borderRadius: '12px', border: '1px solid #e0d5c1' }}><MapPin size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#3b2818', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700 }}>Our Location</h4>
                                    <p style={{ color: '#6d5a48', margin: 0, lineHeight: 1.6 }}>Kozhikode,<br />Kerala, India</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{ color: 'var(--theme)', marginTop: '0.2rem', background: '#fdfbf7', padding: '12px', borderRadius: '12px', border: '1px solid #e0d5c1' }}><Phone size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#3b2818', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700 }}>Phone Numbers</h4>
                                    <p style={{ color: '#6d5a48', margin: 0, lineHeight: 1.6 }}>+91 8086 304 231<br />+91 6238 273 976</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ color: 'var(--theme)', background: '#fdfbf7', padding: '12px', borderRadius: '12px', border: '1px solid #e0d5c1' }}><Mail size={24} /></div>
                                <div>
                                    <h4 style={{ color: '#3b2818', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700 }}>Email Address</h4>
                                    <p style={{ color: '#6d5a48', margin: 0 }}>reemdatesindia@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '3.5rem' }}>
                            <h4 style={{ color: '#3b2818', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Follow Us</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://wa.me/918086304231" target="_blank" rel="noopener noreferrer" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #e0d5c1', background: '#ffffff', color: '#3b2818', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--theme)'; e.currentTarget.style.color = 'var(--theme)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0d5c1'; e.currentTarget.style.color = '#3b2818'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <MessageCircle size={20} />
                                </a>
                                <a href="https://www.instagram.com/reemdates.india/?hl=en" target="_blank" rel="noopener noreferrer" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #e0d5c1', background: '#ffffff', color: '#3b2818', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', textDecoration: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--theme)'; e.currentTarget.style.color = 'var(--theme)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0d5c1'; e.currentTarget.style.color = '#3b2818'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <Instagram size={20} />
                                </a>
                                <a href="#" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #e0d5c1', background: '#ffffff', color: '#3b2818', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--theme)'; e.currentTarget.style.color = 'var(--theme)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0d5c1'; e.currentTarget.style.color = '#3b2818'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <div style={{ background: '#ffffff', padding: '4rem 3rem', borderRadius: '15px', border: '1px solid #d1fad8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 10px 40px rgba(37, 211, 102, 0.05)' }}>
                        <h3 style={{ color: '#3b2818', fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Chat With Us</h3>
                        <p style={{ color: '#6d5a48', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '400px', lineHeight: '1.6' }}>
                            We are available on WhatsApp to answer your questions and assist with your premium date orders instantly.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '300px' }}>
                            <Link href="https://wa.me/918086304231?text=Hello%20Reem%20Premium!%20I%27m%20interested%20in%20your%20products." target="_blank" rel="noopener noreferrer"
                                style={{
                                    backgroundColor: '#25D366',
                                    color: 'white',
                                    padding: '1.25rem 2rem',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    textDecoration: 'none',
                                    boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                Contact Number 1
                            </Link>

                            <Link href="https://wa.me/916238273976?text=Hello%20Reem%20Premium!%20I%27m%20interested%20in%20your%20products." target="_blank" rel="noopener noreferrer"
                                style={{
                                    backgroundColor: '#25D366',
                                    color: 'white',
                                    padding: '1.25rem 2rem',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    textDecoration: 'none',
                                    boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                Contact Number 2
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
