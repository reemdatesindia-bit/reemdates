'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, ShieldCheck, Star, ShoppingCart, Heart, Award, Flower, Instagram, Facebook, MessageCircle, Home as HomeIcon, Info, ShoppingBag, Phone } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeNav, setActiveNav] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollObserverRef = useRef<IntersectionObserver | null>(null);

  const slides = [
    {
      subtitle: "Specializing in",
      title: <>PREMIUM<br />MEDJOOL<br /><span>DATES</span></>,
      desc: "Authentic, high-quality Medjool dates sourced from the finest farms. Enjoy the natural sweetness and rich texture of Reem Premium Dates.",
      image: "/pouch-removebg-preview.png",
      alt: "Reem Premium Dates Pouch"
    },
    {
      subtitle: "Discover our",
      title: <>FINEST<br />ORGANIC<br /><span>DATES</span></>,
      desc: "Carefully handpicked and naturally dried to retain their authentic goodness. A perfect, healthy superfood for any time of the day.",
      image: "/Screenshot_2026-03-07_105323-removebg-preview (1).png",
      alt: "Finest Organic Dates Pouch"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in, section, .product-card');
    elements.forEach(el => observerRef.current?.observe(el));

    // Scroll active tracking with better accuracy
    scrollObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hero') {
            setActiveNav('home');
          } else if (entry.target.id === 'story') {
            setActiveNav('about');
          } else if (entry.target.id === 'products-showcase') {
            setActiveNav('home'); // or handle products if needed
          }
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-80px 0px -20% 0px'
    });

    const sections = document.querySelectorAll('#hero, #story, #products-showcase');
    sections.forEach(sec => scrollObserverRef.current?.observe(sec));

    return () => {
      observerRef.current?.disconnect();
      scrollObserverRef.current?.disconnect();
    };
  }, []);

  return (
    <main>
      {/* Laptop Optimized Navbar */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <Link href="/" className="logo-brand">
              <Image src="/logo.png" alt="REEM Logo" width={200} height={80} className="logo-img" style={{ objectFit: 'contain' }} />
            </Link>
          </div>
          <div className="nav-links-wrapper">
            <nav className="nav-links">
              <Link href="/" className={`nav-link ${activeNav === 'home' ? 'active' : ''}`} onClick={() => setActiveNav('home')}>
                <HomeIcon size={20} className="nav-icon" />
                <span>Home</span>
              </Link>
              <Link href="#story" className={`nav-link ${activeNav === 'about' ? 'active' : ''}`} onClick={() => setActiveNav('about')}>
                <Info size={20} className="nav-icon" />
                <span>About</span>
              </Link>
              <Link href="/products" className="nav-link">
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

      {/* Modernized Hero Section */}
      <section id="hero" className="hero">
        {/* Mobile Top Logo */}
        <div className="mobile-top-logo">
          <Link href="/">
            <Image src="/logo.png" alt="GSF Logo" width={60} height={60} priority />
          </Link>
        </div>

        {/* Floating Leafs */}
        <div className="leaf" style={{ top: '15%', left: '10%', width: '60px' }}>
          <Image src="/leaf-removebg-preview.png" alt="Leaf" width={60} height={60} />
        </div>
        <div className="leaf" style={{ top: '60%', left: '30%', width: '40px', animationDelay: '2s' }}>
          <Image src="/leaf-removebg-preview.png" alt="Leaf" width={40} height={40} style={{ transform: 'rotate(45deg)' }} />
        </div>
        <div className="leaf" style={{ top: '10%', right: '20%', width: '50px', animationDelay: '4s' }}>
          <Image src="/leaf-removebg-preview.png" alt="Leaf" width={50} height={50} style={{ transform: 'rotate(-30deg)' }} />
        </div>
        <div className="leaf" style={{ bottom: '15%', right: '10%', width: '55px', animationDelay: '1s' }}>
          <Image src="/leaf-removebg-preview.png" alt="Leaf" width={55} height={55} style={{ transform: 'rotate(120deg)' }} />
        </div>

        {/* Sidebar */}
        <div className="side-info">
          <div className="social-icons">
            <a href="https://wa.me/918086304231" target="_blank" rel="noopener noreferrer" className="social-icon"><MessageCircle size={16} /></a>
            <a href="https://www.instagram.com/reemdates.india/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={16} /></a>
            <a href="#" className="social-icon"><Facebook size={16} /></a>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <div className="scroll-text">SCROLL DOWN</div>
            <div className="scroll-pill"></div>
          </div>
        </div>

        {/* Main Content Groups */}
        <div className="hero-left fade-in">
          <p className="subtitle">{slides[currentSlide].subtitle}</p>
          <h1 key={currentSlide}>{slides[currentSlide].title}</h1>
          <p className="desc">{slides[currentSlide].desc}</p>
          <div className="hero-actions">
            <Link
              href="https://wa.me/918086304231?text=Hello%20Reem%20Premium!%20I'm%20interested%20in%20ordering%20dates."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-whatsapp-hero"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageCircle size={18} /> ORDER NOW
            </Link>

          </div>
        </div>

        <div className="hero-center fade-in delay-1">
          <div className="pouch-wrapper">
            <div className="circle-bg"></div>
            <Image
              key={currentSlide}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              width={500}
              height={600}
              priority
              className="pouch-img carousel-img-anim"
            />
          </div>
        </div>

        <div className="hero-right fade-in delay-2">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Heart size={24} />
            </div>
            <div className="feature-text">
              <h4>HEALTHY FOOD,</h4>
              <p>NATURALLY RICH!</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Award size={24} />
            </div>
            <div className="feature-text">
              <h4>EXCEPTIONAL</h4>
              <p>QUALITY DATES</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Flower size={24} />
            </div>
            <div className="feature-text">
              <h4>WELLNESS IN</h4>
              <p>EVERY BITE</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Leaf size={24} />
            </div>
            <div className="feature-text">
              <h4>PREMIUM</h4>
              <p>ORGANIC SELECTION</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="story-section container">
        <div className="story-grid">
          <div className="story-image">
            <div className="parallax-inner" style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '15px', overflow: 'hidden' }}>
              <Image
                src="/photo_2026-03-06_11-04-25.jpg"
                alt="Reem - The desert gazelle"
                fill
                style={{ objectFit: 'cover' }}
                className="parallax"
              />
            </div>
          </div>
          <div className="story-content">
            <h2 className="section-title">reemdates.india</h2>
            <p className="story-highlight" style={{ fontSize: '1.2rem', color: 'var(--theme)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>
              Shopping & Retail
            </p>
            <p>
              reemdates.india are proud <strong>Importers & Distributors of Premium Dates & Dry Fruits</strong>. We bring you the finest quality dates inspired by the rich traditions of the Middle East.
            </p>
            <p>
              Our name comes from Arabic, meaning a beautiful desert gazelle, a symbol of purity, elegance, and natural beauty. Just like its meaning, our products represent pure taste, natural goodness, and premium quality.
            </p>
            <p>
              We carefully select the best dates to deliver freshness, nutrition, and authentic flavor to every home.
            </p>
            <p className="story-highlight" style={{ fontSize: '1.3rem', color: 'var(--theme)', marginTop: '2rem' }}>
              <strong>Quality • Freshness • Trust</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Modern Collage Product Showcase */}
      <section id="products-showcase" className="product-showcase container">
        <h2 className="section-title">Specializing in <br /><span>PREMIUM SELECTION</span></h2>

        <div className="collage-grid">
          {/* Main Large Box */}
          <Link href="/products" className="box box-large main-pouch" style={{ cursor: 'pointer', display: 'flex' }}>
            <Image src="/IMG_8457.JPG" alt="Reem Pouch" fill style={{ objectFit: 'cover' }} />
          </Link>

          {/* Top Close-up Box */}
          <div className="box box-medium dates-texture">
            <Image src="/dates_closeup.png" alt="Dates Texture" width={300} height={300} className="texture-img" />
          </div>

          {/* Right Top Angled Box */}
          <Link href="/products" className="box box-medium angled-pouch" style={{ cursor: 'pointer', display: 'flex' }}>
            <Image src="/IMG_8453.JPG" alt="Reem Pouch Angled" fill style={{ objectFit: 'cover' }} />
          </Link>

          {/* Middle Center Branding/Badge */}
          <div className="box box-small branding-badge">
            <div className="badge-content">
              <h3>REEM<sup>®</sup></h3>
              <p>HIGH QUALITY - PURE GOODNESS</p>
              <div className="circle-placeholder"></div>
              <span className="source-tag">100% NATURAL</span>
            </div>
          </div>

          {/* Bottom Right Icons Box */}
          <div className="box box-icons">
            <div className="icon-grid-collage">
              <div className="icon-unit">
                <ShieldCheck size={24} />
                <span>Pure</span>
              </div>
              <div className="icon-unit">
                <Star size={24} />
                <span>Premium</span>
              </div>
              <div className="icon-unit">
                <Leaf size={24} />
                <span>Natural</span>
              </div>
              <div className="icon-unit">
                <ShieldCheck size={24} />
                <span>Rich</span>
              </div>
              <div className="icon-unit">
                <Star size={24} />
                <span>Fresh</span>
              </div>
              <div className="icon-unit">
                <Leaf size={24} />
                <span>Eco</span>
              </div>
            </div>
          </div>

          {/* Full Width Branding Footer of Collage */}
          <div className="box box-wide reem-banner" style={{ padding: '3rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
            <Image src="/IMG_8456.JPG" alt="REEM Banner Background" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2>REEM<span>™</span></h2>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/products" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            View Our Premium Collection
          </Link>
        </div>
      </section>

      <section className="values-section">
        <div className="container values-grid">
          <div className="value-item">
            <Award className="value-icon" />
            <h3>Quality</h3>
            <p>Untouched by artificial additives, ensuring the truest form of nature and premium standards.</p>
          </div>
          <div className="value-item">
            <Leaf className="value-icon" />
            <h3>Freshness</h3>
            <p>Sourced directly from sustainable farms following traditional methods for guaranteed freshness.</p>
          </div>
          <div className="value-item">
            <ShieldCheck className="value-icon" />
            <h3>Trust</h3>
            <p>A reliable choice. Only the top-tier selection makes it to your table with our trusted seal.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Image src="/logo.png" alt="REEM Logo" width={150} height={50} className="logo-img" style={{ objectFit: 'contain' }} />
            </div>
            <p style={{ marginTop: '1rem' }}><strong>Importers & Distributors of Premium Dates & Dry Fruits</strong></p>
            <p>Quality • Freshness • Trust</p>
          </div>
          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Shop Dates</a></li>
              <li><a href="#">Shop Nuts</a></li>
              <li><a href="#">Gift Boxes</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Email: reemdatesindia@gmail.com</p>
            <p>Instagram: <a href="https://www.instagram.com/reemdates.india/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>@reemdates.india</a></p>
          </div>
        </div>
        <div className="footer-bottom container">
          <p>&copy; 2024 Reem. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
