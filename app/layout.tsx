'use client'; // Obligatoire pour gérer l'ouverture du menu mobile au clic

import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite

  return (
    <html lang="fr" style={{ scrollBehavior: 'smooth' }}>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* =========================================================
            HEADER & NAVBAR RESPONSIVE INTÉGRÉE (ZÉRO IMPORT)
            ========================================================= */}
        <header style={{
          backgroundColor: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderBottom: `4px solid ${primaryColor}`,
        }}>
          {/* Centralisation de tous les styles media-queries (Navbar + Footer) */}
          <style>{`
            .header-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.8rem 10%;
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
              transition: 0.3s;
            }
            .nav-link:hover {
              color: ${primaryColor};
            }
            .burger-btn {
              display: none;
              background: none;
              border: none;
              color: ${darkColor};
              font-size: 1.8rem;
              cursor: pointer;
            }

            /* ======= 📱 ADAPTATION TABLETTE & MOBILE ======= */
            @media (max-width: 768px) {
              .header-container {
                padding: 0.8rem 5%;
              }
              .burger-btn {
                display: block; /* On affiche l'icône burger */
              }
              .nav-links {
                display: ${isMenuOpen ? 'flex' : 'none'}; /* Affiché uniquement si ouvert */
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: white;
                padding: 20px 0;
                gap: 20px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                border-bottom: 3px solid ${primaryColor};
              }
              .nav-link {
                width: 100%;
                text-align: center;
                padding: 10px 0;
                font-size: 1.1rem;
              }
              footer {
                padding: 40px 5% 20px 5% !important; /* Moins d'espace perdu sur mobile */
              }
            }
          `}</style>

          <div className="header-container">
            {/* BLOC LOGO */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="/logo.png" alt="Setra" style={{ height: '50px', objectFit: 'contain' }} />
              <h1 style={{ margin: 0, fontSize: '1.4rem', color: darkColor, textTransform: 'uppercase', fontWeight: '900' }}>
                Setra <span style={{ color: '#666', fontWeight: '300' }}>Groupe</span>
              </h1>
            </div>

            {/* BOUTON BURGER (VISIBLE SUR MOBILE) */}
            <button className="burger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
              {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* ONGLETS DE NAVIGATION */}
            <nav className="nav-links">
              <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
              <Link href="/nosrealisation" className="nav-link" onClick={() => setIsMenuOpen(false)}>Réalisations</Link>
              <Link href="/nosservices" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/apropos" className="nav-link" onClick={() => setIsMenuOpen(false)}>À Propos</Link>
              <Link href="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </header>

        {/* CONTENU PRINCIPAL DE TES PAGES */}
        <main style={{ flex: 1 }}>
          {children}
        </main>

        {/* =========================================================
            FOOTER TOTALEMENT RESPONSIVE
            ========================================================= */}
        <footer style={{ 
          backgroundColor: darkColor, 
          color: 'white', 
          padding: '60px 10% 20px 10%',
          borderTop: `5px solid ${primaryColor}`
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px',
            marginBottom: '40px'
          }}>
            {/* Colonne 1: Bio */}
            <div>
              <h3 style={{ color: primaryColor, marginBottom: '20px' }}>SETRA GROUPE</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.9rem' }}>
                Leader dans le BTP et le Génie Civil au Mali. Nous transformons vos visions en structures durables avec rigueur et excellence.
              </p>
            </div>

            {/* Colonne 2: Liens rapides */}
            <div>
              <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem' }}>Navigation</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="/nosservices" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>Nos Services</Link></li>
                <li><Link href="/nosrealisation" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>Nos Réalisations</Link></li>
                <li><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>Demander un devis</Link></li>
              </ul>
            </div>

            {/* Colonne 3: Contact */}
            <div>
              <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem' }}>Contactez-nous</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '10px' }}>📍 Bamako, Mali</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '10px' }}>📞 +223 00 00 00 00</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>✉️ contact@setragroupe.ml</p>
            </div>
          </div>

          {/* Copyright */}
          <div style={{ 
            textAlign: 'center', 
            borderTop: '1px solid #444', 
            paddingTop: '20px', 
            fontSize: '0.8rem', 
            color: '#777' 
          }}>
            <p>&copy; {new Date().getFullYear()} Setra Groupe SARL. Tous droits réservés.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}