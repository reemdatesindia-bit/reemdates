'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, ShieldCheck, Star, ShoppingCart, Heart, Award, Flower, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

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

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <main>
      {/* Laptop Optimized Navbar */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <Link href="/" className="logo-brand">
              <Image src="/logo.png" alt="GSF Logo" width={50} height={50} className="logo-img" />
            </Link>
          </div>
          <div className="nav-links-wrapper">
            <nav className="nav-links">
              <Link href="/" className="active">Home</Link>
              <Link href="#story">About</Link>
              <Link href="#products-showcase">Products</Link>
              <Link href="#footer">Contact</Link>
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
            <a href="#" className="social-icon"><Linkedin size={16} /></a>
            <a href="#" className="social-icon"><Instagram size={16} /></a>
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
            <button className="btn-primary">ORDER NOW</button>
            <div className="carousel-dots">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`dot ${currentSlide === idx ? 'active' : ''}`}
                />
              ))}
            </div>
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
            <div className="parallax-inner">
              <Image
                src="/assets/story.png"
                alt="Reem - The desert gazelle"
                width={600}
                height={800}
                className="parallax"
              />
            </div>
          </div>
          <div className="story-content">
            <h2 className="section-title">The Essence of Reem</h2>
            <p>
              Reem is a premium brand that brings you the finest quality dates and dry fruits inspired by the rich traditions of the Middle East.
            </p>
            <p>
              The name <strong>Reem</strong> comes from Arabic, meaning a beautiful desert gazelle, a symbol of purity, elegance, and natural beauty. Just like its meaning, our products represent pure taste, natural goodness, and premium quality.
            </p>
            <p>
              At Reem, we carefully select the best dates to deliver freshness, nutrition, and authentic flavor to every home.
            </p>
            <p className="story-highlight" style={{ fontSize: '1.3rem', color: 'var(--theme)' }}>
              <strong>Reem – Pure. Natural. Premium.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Modern Collage Product Showcase */}
      <section id="products-showcase" className="product-showcase container">
        <h2 className="section-title">Specializing in <br /><span>PREMIUM SELECTION</span></h2>

        <div className="collage-grid">
          {/* Main Large Box */}
          <div className="box box-large main-pouch">
            <Image src="/pouch-removebg-preview.png" alt="Reem Pouch" width={400} height={500} className="pouch-img" />
          </div>

          {/* Top Close-up Box */}
          <div className="box box-medium dates-texture">
            <Image src="/dates_closeup.png" alt="Dates Texture" width={300} height={300} className="texture-img" />
          </div>

          {/* Right Top Angled Box */}
          <div className="box box-medium angled-pouch">
            <Image src="/pouch-removebg-preview.png" alt="Reem Pouch Angled" width={300} height={400} className="pouch-img-angled" />
          </div>

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
          <div className="box box-wide reem-banner">
            <h2>REEM<span>™</span></h2>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container values-grid">
          <div className="value-item">
            <Leaf className="value-icon" />
            <h3>Pure</h3>
            <p>Untouched by artificial additives, ensuring the truest form of nature.</p>
          </div>
          <div className="value-item">
            <ShieldCheck className="value-icon" />
            <h3>Natural</h3>
            <p>Source directly from sustainable farms following traditional methods.</p>
          </div>
          <div className="value-item">
            <Star className="value-icon" />
            <h3>Premium</h3>
            <p>Only the top-tier selection makes it to your table, guaranteed freshness.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Image src="/logo.png" alt="REEM Logo" width={150} height={50} className="logo-img" />
            </div>
            <p>Traditional Middle Eastern luxury delivered to your doorstep.</p>
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
            <p>Email: hello@reem-pure.com</p>
            <p>Instagram: @reem_premium</p>
          </div>
        </div>
        <div className="footer-bottom container">
          <p>&copy; 2024 Reem. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
