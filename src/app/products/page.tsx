'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Home as HomeIcon, Info, ShoppingBag, Phone } from 'lucide-react';

export default function ProductsPage() {
    const dates = [
        { name: 'Ajwa', price: '$24.99', desc: 'Premium black dates, soft and naturally sweet.', image: '/ajwa.png' },
        { name: 'Mabroom', price: '$19.99', desc: 'Long, slender dates with a firm chewy texture.', image: '/mabroom.png' },
        { name: 'Medjool', price: '$29.99', desc: 'The King of Dates. Large, rich, and caramel-like.', image: '/medjool.png' },
        { name: 'Sukkari', price: '$21.99', desc: 'Crisp, golden dates known for their crunch and sugar.', image: '/sukkari.png' },
        { name: 'Segai', price: '$18.99', desc: 'Two-toned dates, mildly sweet and firm.', image: '/segai.png' },
        { name: 'Khalas', price: '$16.99', desc: 'Everyday favorite dates, sticky and butter-caramel flavor.', image: '/khalas.png' },
        { name: 'Zahidi', price: '$15.99', desc: 'Semi-dry, golden dates with a subtle, nutty finish.', image: '/zahidi.png' },
        { name: 'Bam Dates', price: '$22.99', desc: 'Also known as Mazafati. Dark, soft, and chocolatey.', image: '/bam.png' },
    ];

    return (
        <main className="products-main" style={{ paddingTop: '150px', background: 'var(--bg)', minHeight: '100vh' }}>
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
                            <Link href="/products" className="nav-link active">
                                <ShoppingBag size={20} className="nav-icon" />
                                <span>Products</span>
                            </Link>
                            <Link href="/contact" className="nav-link">
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
                        <Image src="/logo.png" alt="GSF Logo" width={45} height={45} className="logo-img" />
                        <div className="logo-text">
                            <h3 style={{ color: '#3b2818', margin: 0 }}>REEMDATES.INDIA</h3>
                            <p style={{ color: '#6d5a48', margin: 0, fontSize: '0.7rem', letterSpacing: '1px' }}>QUALITY • FRESHNESS • TRUST</p>
                        </div>
                    </div>
                </Link>
            </div>

            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{
                        color: '#3b2818',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 700,
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Our Premium Collection
                    </h1>
                    <div style={{
                        width: '60px',
                        height: '2px',
                        background: 'var(--theme)',
                        margin: '0 auto 2rem'
                    }}></div>
                    <p style={{
                        color: '#6d5a48',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontSize: '1.15rem',
                        lineHeight: '1.8',
                        opacity: 0.9
                    }}>
                        Experience the gold standard of organic luxury. Our hand-picked selection represents the finest dates from across the Middle East, delivered with purity and trust.
                    </p>
                </div>

                <div className="product-page-grid">
                    {dates.map((date, idx) => (
                        <div key={idx} className="product-details-card">
                            <div className="premium-badge">Premium Selection</div>
                            <div className="product-image-container">
                                <Image
                                    src={date.image}
                                    alt={date.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="product-card-img"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{date.name}</h3>
                                <span className="product-price">{date.price}</span>
                                <p className="product-desc">{date.desc}</p>
                                <a
                                    href={`https://wa.me/918086304231?text=${encodeURIComponent(`Hello Reem Premium! I'm interested in ordering ${date.name}.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-add-cart"
                                >
                                    <MessageCircle size={16} /> ORDER ON WHATSAPP
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main >
    );
}
