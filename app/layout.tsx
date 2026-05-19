import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const primaryColor = '#FFD700';
  const darkColor = '#212121';

  return (
    <html lang="fr" style={{ scrollBehavior: 'smooth' }}>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* HEADER */}
        <header style={{
          backgroundColor: 'white',
          padding: '0.8rem 10%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `4px solid ${primaryColor}`,
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Si tu n'as pas encore de logo.png, l'image affichera le alt */}
            <img src="/logo.png" alt="Setra" style={{ height: '70px' }} />
            <h1 style={{ margin: 0, fontSize: '1.5rem', color: darkColor, textTransform: 'uppercase', fontWeight: '900' }}>
              Setra <span style={{ color: '#666', fontWeight: '300' }}>Groupe</span>
            </h1>
          </div>
          <nav style={{ display: 'flex', gap: '25px' }}>
            <Link href="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: darkColor }}>Accueil</Link>
            <Link href="/nosrealisation" style={{ fontWeight: 'bold', textDecoration: 'none', color: darkColor }}>Réalisations</Link>
            <Link href="/nosservices" style={{ fontWeight: 'bold', textDecoration: 'none', color: darkColor }}>Services</Link>
            <Link href="/apropos" style={{ fontWeight: 'bold', textDecoration: 'none', color: darkColor }}>À Propos</Link>
            <Link href="/contact" style={{ fontWeight: 'bold', textDecoration: 'none', color: darkColor }}>Contact</Link>
          </nav>
        </header>

        {/* CONTENU PRINCIPAL (flex: 1 permet de pousser le footer en bas si la page est courte) */}
        <main style={{ flex: 1 }}>
          {children}
        </main>

        {/* FOOTER COMPLET */}
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