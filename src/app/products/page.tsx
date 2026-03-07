'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function ProductsPage() {
    const dates = [
        { name: 'Ajwa', price: '$24.99', desc: 'Premium black dates, soft and naturally sweet.', image: '/dates_closeup.png' },
        { name: 'Mabroom', price: '$19.99', desc: 'Long, slender dates with a firm chewy texture.', image: '/dates_closeup.png' },
        { name: 'Medjool', price: '$29.99', desc: 'The King of Dates. Large, rich, and caramel-like.', image: '/dates_closeup.png' },
        { name: 'Sukkari', price: '$21.99', desc: 'Crisp, golden dates known for their crunch and sugar.', image: '/dates_closeup.png' },
        { name: 'Segai', price: '$18.99', desc: 'Two-toned dates, mildly sweet and firm.', image: '/dates_closeup.png' },
        { name: 'Khalas', price: '$16.99', desc: 'Everyday favorite dates, sticky and butter-caramel flavor.', image: '/dates_closeup.png' },
        { name: 'Zahidi', price: '$15.99', desc: 'Semi-dry, golden dates with a subtle, nutty finish.', image: '/dates_closeup.png' },
        { name: 'Bam Dates', price: '$22.99', desc: 'Also known as Mazafati. Dark, soft, and chocolatey.', image: '/dates_closeup.png' },
    ];

    return (
        <main className="products-main" style={{ paddingTop: '150px', background: 'var(--bg-dark)', minHeight: '100vh' }}>
            {/* Refined Navbar for inner pages */}
            <header className="navbar">
                <div className="nav-container">
                    <div className="logo-container">
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <div className="logo-brand">
                                <Image src="/logo.png" alt="GSF Logo" width={45} height={45} className="logo-img" />
                                <div className="logo-text">
                                    <h3>GOLDEN STATE FOOD, LLC.</h3>
                                    <p>HEALTHY FOOD - BETTER QUALITY</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="nav-links-wrapper">
                        <nav className="nav-links">
                            <Link href="/" className="nav-link">Home</Link>
                            <Link href="/#story" className="nav-link">About</Link>
                            <Link href="/products" className="nav-link active">Products</Link>
                            <Link href="/#contact" className="nav-link">Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="container" style={{ paddingBottom: '4rem' }}>
                <h1 className="section-title text-center" style={{ color: 'var(--white)' }}>Our Premium Product Line</h1>
                <p className="text-center" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.2rem' }}>
                    Explore our exclusive, hand-picked selection of the finest dates sourced directly from the best farms in the Middle East.
                </p>

                <div className="product-page-grid">
                    {dates.map((date, idx) => (
                        <div key={idx} className="product-details-card">
                            <div className="product-image-container">
                                <Image
                                    src={date.image}
                                    alt={date.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="product-card-img"
                                />
                            </div>
                            <div className="product-info">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 className="product-title">{date.name}</h3>
                                    <span className="product-price">{date.price}</span>
                                </div>
                                <p className="product-desc">{date.desc}</p>
                                <button className="btn-add-cart">
                                    <ShoppingCart size={18} /> Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
