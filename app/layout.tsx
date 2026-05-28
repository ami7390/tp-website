import Link from 'next/link';

export const metadata = {
  title: 'Setra Groupe | BTP & Génie Civil au Mali',
  description: 'Leader dans le BTP et le Génie Civil au Mali. Nous transformons vos visions en structures durables.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite
  const lightGrey = '#f9f9f9';

  return (
    <html lang="fr" style={{ scrollBehavior: 'smooth' }}>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
        
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
            .nav-links {
              display: flex;
              gap: 30px;
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
            .nav-link:hover {
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
              .nav-links { gap: 20px; }
              .nav-link { font-size: 0.95rem; }
              .footer-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; }
            }

            /* ======= 📱 EXTRÊME : ADAPTATION MOBILE (768px et moins) ======= */
            @media (max-width: 768px) {
              .header-container { padding: 0.8rem 5%; }
              .burger-btn { display: block; }
              
              .nav-links {
                display: none; /* Masqué par défaut sur mobile, géré par JS en bas */
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
              
              /* Classe dynamique injectée au clic */
              .nav-links.open {
                display: flex !important;
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
            {/* BLOC LOGO */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="/logo.png" alt="Setra" style={{ height: '45px', objectFit: 'contain' }} />
              <h1 style={{ margin: 0, fontSize: '1.3rem', color: darkColor, textTransform: 'uppercase', fontWeight: '900', letterSpacing: '0.5px' }}>
                Setra <span style={{ color: '#777', fontWeight: '300' }}>Groupe</span>
              </h1>
            </div>

            {/* BOUTON BURGER */}
            <button id="burger-toggle" className="burger-btn" aria-label="Menu">
              ☰
            </button>

            {/* ONGLETS DE NAVIGATION */}
            <nav id="nav-menu" className="nav-links">
              <Link href="/" className="nav-link">Accueil</Link>
              <Link href="/nosrealisation" className="nav-link">Réalisations</Link>
              <Link href="/nosservices" className="nav-link">Services</Link>
              <Link href="/apropos" className="nav-link">À Propos</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
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
        <footer className="footer-container" style={{ 
          backgroundColor: darkColor, 
          color: 'white', 
          padding: '60px 10% 20px 10%',
          borderTop: `5px solid ${primaryColor}`
        }}>
          <div className="footer-grid">
            {/* Colonne 1: Présentation Entreprise */}
            <div>
              <h3 style={{ color: primaryColor, marginBottom: '20px', fontWeight: '900', letterSpacing: '1px' }}>SETRA GROUPE</h3>
              <p style={{ color: '#bbb', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
                Leader dans le BTP et le Génie Civil au Mali. Nous transformons vos visions en structures durables avec rigueur, contrôle technique poussé et excellence opérationnelle.
              </p>
            </div>

            {/* Colonne 2: Navigation rapide */}
            <div>
              <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Navigation</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/nosservices" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>Nos Services</Link></li>
                <li><Link href="/nosrealisation" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>Nos Réalisations</Link></li>
                <li><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>Demander un devis</Link></li>
              </ul>
            </div>

            {/* Colonne 3: Informations de Contact */}
            <div>
              <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Contactez-nous</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '12px', margin: 0 }}>📍 Bamako, Sangarebougou-Marseille</p>
              <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '12px', margin: 0 }}>📞 +223 73 02 19 84 - 62 69 75 91</p>
              <p style={{ color: '#aaa', fontSize: '0.95rem', margin: 0 }}>✉️ </p>setraconstructionbtp@gmail.com
            </div>
          </div>

          {/* Zone de bas de page (Copyright) */}
          <div style={{ 
            textAlign: 'center', 
            borderTop: '1px solid #333', 
            paddingTop: '20px', 
            fontSize: '0.85rem', 
            color: '#666',
            marginTop: '20px'
          }}>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Setra Groupe SARL. Tous droits réservés.</p>
          </div>
        </footer>

        {/* LOGIQUE JS COMPACTE POUR LE MENU SANS CASSER LE SERVER COMPONENT */}
        <script dangerouslySetInnerHTML={{ __html: `
          const btn = document.getElementById('burger-toggle');
          const menu = document.getElementById('nav-menu');
          if (btn && menu) {
            btn.addEventListener('click', () => {
              menu.classList.toggle('open');
              btn.textContent = menu.classList.contains('open') ? '✕' : '☰';
            });
            // Ferme le menu si on clique sur un lien
            menu.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', () => {
                menu.classList.remove('open');
                btn.textContent = '☰';
              });
            });
          }
        `}} />
      </body>
    </html>
  );
}