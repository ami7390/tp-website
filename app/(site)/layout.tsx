'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite
  const lightGrey = '#f9f9f9';

  // Gestion native du menu mobile avec React
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* =========================================================
          HEADER & NAVBAR RESPONSIVE INTÉGRÉE
          ========================================================= */}
      <header style={{
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        borderBottom: `4px solid ${primaryColor}`,
      }}>
        <style>{`
          /* ======= 💻 CONFIGURATION PAR DÉFAUT (ORDINATEUR LARGE) ======= */
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 10%;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          /* Style pour la zone logo cliquable */
          .logo-link {
            display: flex;
            align-items: center;
            gap: 15px;
            text-decoration: none;
            border-radius: 4px;
            padding: 4px;
          }
          .logo-link:focus {
            outline: none;
            box-shadow: 0 0 0 3px ${primaryColor};
          }

          .nav-links {
            display: flex;
            gap: 25px;
            align-items: center;
          }
          .nav-link {
            font-weight: bold;
            text-decoration: none;
            color: ${darkColor};
            transition: 0.3s ease;
            font-size: 1rem;
            padding: 6px 0;
            border-bottom: 2px solid transparent;
          }
          .nav-link:hover, .nav-link:focus {
            outline: none;
            color: ${darkColor};
            border-bottom: 2px solid ${primaryColor};
          }
          .burger-btn {
            display: none;
            background: none;
            border: none;
            color: ${darkColor};
            font-size: 1.8rem;
            cursor: pointer;
            border-radius: 4px;
            padding: 2px 8px;
          }
          .burger-btn:focus {
            outline: none;
            box-shadow: 0 0 0 2px ${primaryColor};
          }
          .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 50px;
            margin-bottom: 40px;
          }

          /* ======= 📑 INTERMÉDIAIRE : ADAPTATION TABLETTE (769px à 1100px) ======= */
          @media (max-width: 1100px) {
            .header-container { padding: 0.8rem 5%; }
            .nav-links { gap: 15px; }
            .nav-link { font-size: 0.95rem; }
            .footer-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; }
          }

          /* ======= 📱 EXTRÊME : ADAPTATION MOBILE (768px et moins) ======= */
          @media (max-width: 768px) {
            .header-container { padding: 0.8rem 5%; }
            .burger-btn { display: block; }
            
            .nav-links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background-color: white;
              padding: 20px 0;
              gap: 15px;
              box-shadow: 0 8px 15px rgba(0,0,0,0.1);
              border-bottom: 4px solid ${primaryColor};
            }
            
            .nav-links.open {
              display: flex;
            }

            .nav-link {
              width: 100%;
              text-align: center;
              padding: 12px 0;
              font-size: 1.1rem;
              border-bottom: none !important;
            }
            .nav-link:hover { background-color: ${lightGrey}; }
            .footer-container { padding: 40px 6% 20px 6% !important; }
            .footer-grid { grid-template-columns: 1fr; gap: 35px; text-align: center; }
            .footer-grid ul { display: inline-block; text-align: left; }
          }
        `}</style>

        <div className="header-container">
          {/* LOGO CLIQUABLE VERS L'ACCUEIL */}
          <Link href="/" className="logo-link" aria-label="Retour à l'accueil de Setra Groupe" onClick={closeMenu}>
            <img src="/logo.png" alt="" style={{ height: '45px', objectFit: 'contain' }} />
            <h1 style={{ margin: 0, fontSize: '1.3rem', color: darkColor, textTransform: 'uppercase', fontWeight: '900', letterSpacing: '0.5px' }}>
              Setra <span style={{ color: '#777', fontWeight: '300' }}>Groupe</span>
            </h1>
          </Link>

          {/* BOUTON BURGER GÉRÉ PAR REACT */}
          <button 
            className="burger-btn" 
            aria-label="Menu de navigation" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* MENU DE NAVIGATION PRINCIPAL (HEADER) */}
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Navigation principale">
            <Link href="/" className="nav-link" onClick={closeMenu}>Accueil</Link>
            <Link href="/nosservices" className="nav-link" onClick={closeMenu}>Services</Link>
            <Link href="/nosrealisation" className="nav-link" onClick={closeMenu}>Réalisations</Link>
            {/* CORRECTION DE LA ROUTE -> /ventes */}
            <Link href="/ventes" className="nav-link" onClick={closeMenu}>Immobilier</Link>
            <Link href="/apropos" className="nav-link" onClick={closeMenu}>À Propos</Link>
            <Link href="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
            <Link href="/blog" className="nav-link" onClick={closeMenu}>Blog</Link>
          </nav>
        </div>
      </header>

      {/* AFFICHAGE DES PAGES DU SITE */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* =========================================================
          FOOTER TOTALEMENT RESPONSIVE
          ========================================================= */}
      <footer className="footer-container" style={{ 
        backgroundColor: darkColor, 
        color: 'white', 
        padding: '60px 10% 20px 10%',
        borderTop: `5px solid ${primaryColor}`
      }}>
        <div className="footer-grid">
          <div>
            <h3 style={{ color: primaryColor, marginBottom: '20px', fontWeight: '900', letterSpacing: '1px' }}>SETRA GROUPE</h3>
            <p style={{ color: '#bbb', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
              Leader dans le BTP et le Génie Civil au Mali. Nous transformons vos visions en structures durables avec rigueur, contrôle technique poussé et excellence opérationnelle.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Navigation
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link href="/nosservices" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>Nos Services</Link></li>
              <li><Link href="/nosrealisation" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>Nos Réalisations</Link></li>
              {/* CORRECTION DE LA ROUTE -> /ventes */}
              <li><Link href="/ventes" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>Immobilier</Link></li>
              <li><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>Demander un devis</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Contactez-nous</h3>
            <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '12px', margin: 0 }}>📍 Bamako, Sangarebougou-Marseille</p>
            <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '12px', margin: 0 }}>📞 +223 73 02 19 84 - 62 69 75 91</p>
            <p style={{ color: '#aaa', fontSize: '0.95rem', margin: 0 }}>✉️ setraconstructionbtp@gmail.com</p>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          borderTop: '1px solid #333', 
          padding: '20px', 
          fontSize: '0.85rem', 
          color: '#666',
          marginTop: '20px'
        }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Setra Groupe SARL. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}