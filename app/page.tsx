'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite
  const lightGrey = '#f4f4f4';

  // 1. CONFIGURATION DU SLIDER HERO
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'image',
      src: "/gros-oeuvre.jpg",
      title: "L'EXPERTISE DU GROS ŒUVRE",
      sub: "Des fondations solides pour vos projets au Mali."
    },
    {
      type: 'video',
      src: "/video-1.mp4", // Place ta vidéo animée ici dans le dossier public/
      title: "FINITIONS DE HAUTE QUALITÉ",
      sub: "L'esthétique et le confort sans aucun compromis."
    },
    {
      type: 'image',
      src: "/renovation-modernisation.jpg",
      title: "RÉNOVATION & MODERNISATION",
      sub: "Valorisez votre patrimoine immobilier à distance."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Changement toutes les 5 secondes
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white', overflowX: 'hidden' }}>
      
      {/* =========================================================
          STYLES RESPONSIVES ET ANIMATIONS CSS
          ========================================================= */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        
        @keyframes kenBurnsEffect {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        .animate-fade { animation: fadeIn 1s ease-out forwards; }
        .animate-slide { opacity: 0; animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .zoom-background { animation: kenBurnsEffect 20s ease-in-out infinite; }
        
        .section-padding { padding: 80px 10%; }
        .hero-title { font-size: 3.8rem; text-align: center; color: white; line-height: 1.1; font-weight: 900; text-transform: uppercase; }
        .section-title { text-align: center !important; font-size: 2.5rem; font-weight: 900; text-transform: uppercase; margin-bottom: 50px; color: ${darkColor}; }
        
        .grid-services { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
        .grid-diaspora { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; align-items: center; }
        .grid-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: center; }
        .grid-conformite { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
        .grid-projets { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .grid-temoignages { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }

        .service-card {
          background-color: white; padding: 30px; border-radius: 4px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); 
          border-top: 5px solid ${primaryColor}; text-decoration: none; display: block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.12); }

        .projet-card {
          position: relative; height: 350px; border-radius: 6px; overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08); transition: transform 0.3s ease;
        }
        .projet-card:hover { transform: scale(1.02); }
        .projet-overlay {
          position: absolute; bottom: 0; left: 0; width: 100%; padding: 30px 20px;
          background: linear-gradient(transparent, rgba(0,0,0,0.9)); color: white;
        }

        .conformite-card {
          background: #fdfdfd; padding: 25px; border-radius: 6px; border: 1px solid #eef2f3;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02); transition: 0.3s;
        }
        .conformite-card:hover { border-color: ${primaryColor}; background: white; }

        .card-temoignage {
          background: white; padding: 30px; border-radius: 8px; box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          border-left: 4px solid ${primaryColor};
        }

        @media (max-width: 768px) {
          .section-padding { padding: 50px 5% !important; }
          .hero-title { font-size: 2.1rem !important; }
          .btn-responsive { width: 100% !important; max-width: none !important; }
          .grid-diaspora .diaspora-img { grid-row: 1; margin-bottom: 20px; }
        }
      `}</style>

      {/* =========================================================
          1. SECTION HERO AVEC ARRIÈRE-PLAN MIXTE (IMAGE / VIDÉO DYNAMIQUE)
          ========================================================= */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkColor,
        overflow: 'hidden'
      }}>
        
        {/* Conteneur des médias de fond */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden' }}>
          {slides.map((s, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out',
              }}
            >
              {s.type === 'video' ? (
                // Rendu Vidéo pour la finition haute qualité
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src={s.src} type="video/mp4" />
                </video>
              ) : (
                // Rendu Image classique avec effet Zoom léger pour les autres slides
                <div
                  className={currentSlide === index ? "zoom-background" : ""}
                  style={{
                    width: '100%', height: '100%',
                    backgroundImage: `url('${s.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Overlay d'assombrissement global pour la lisibilité */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.85))',
          zIndex: 1
        }} />

        {/* Texte du Hero */}
        <div style={{ textAlign: 'center', padding: '0 20px', zIndex: 2, position: 'relative' }}>
          <h2 className="hero-title animate-slide" key={`title-${currentSlide}`} style={{ maxWidth: '1000px', marginBottom: '15px' }}>
            {slides[currentSlide].title}
          </h2>
          <p className="animate-slide" key={`sub-${currentSlide}`} style={{ fontSize: '1.4rem', color: primaryColor, fontWeight: 'bold', marginBottom: '35px', animationDelay: '0.2s' }}>
            {slides[currentSlide].sub}
          </p>
          
          <Link href="/contact" className="animate-slide" style={{ textDecoration: 'none', animationDelay: '0.4s' }}>
            <button className="btn-responsive" style={{
              backgroundColor: primaryColor, color: darkColor, padding: '18px 45px', border: 'none',
              fontWeight: '900', fontSize: '1.1rem', cursor: 'pointer', textTransform: 'uppercase',
              borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', transition: '0.3s'
            }}>
              Démarrer mon projet
            </button>
          </Link>
        </div>

        {/* Indicateurs (Dots) */}
        <div style={{ position: 'absolute', bottom: '30px', display: 'flex', gap: '10px', zIndex: 3 }}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setCurrentSlide(i)} style={{
              width: '12px', height: '12px', borderRadius: '50%', 
              backgroundColor: currentSlide === i ? primaryColor : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', transition: '0.3s'
            }} />
          ))}
        </div>
      </section>

      {/* =========================================================
          2. SECTION SERVICES
          ========================================================= */}
      <section id="services" className="section-padding" style={{ backgroundColor: lightGrey }}>
        <h3 className="section-title">
          Nos <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 15px' }}>Services</span>
        </h3>
        
        <div className="grid-services">
          {[
            { t: 'Gros Œuvre', d: 'Construction de structures robustes, fondations et élévations aux normes.', i: '🏗️', url: '/expertises/gros-oeuvre' },
            { t: 'Second Œuvre', d: 'Finitions de haute qualité, plâtrerie, électricité et carrelage premium.', i: '🛠️', url: '/expertises/seconde-oeuvre' },
            { t: 'Rénovation', d: 'Modernisation, extension et valorisation de vos bâtiments existants.', i: '🏠', url: '/expertises/renovation' }
          ].map((s, idx) => (
            <Link href={s.url} key={idx} style={{ textDecoration: 'none' }}>
              <div className="service-card animate-slide" style={{ animationDelay: `${0.2 * idx}s` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{s.i}</div>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '10px', color: darkColor, fontWeight: 'bold' }}>{s.t}</h4>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{s.d}</p>
                <div style={{ marginTop: '20px', color: darkColor, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  En savoir plus <span style={{ color: primaryColor }}>➔</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          3. SECTION CONFIANCE DIASPORA
          ========================================================= */}
      <section className="section-padding">
        <div className="grid-diaspora">
          <div>
            <span style={{ color: '#888', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Votre partenaire de confiance</span>
            <h3 style={{ fontSize: '2.3rem', color: darkColor, marginTop: '10px', marginBottom: '20px', fontWeight: '900', lineHeight: '1.2' }}>
              CONSTRUISEZ AU MALI DEPUIS L'ÉTRANGER
            </h3>
            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem', marginBottom: '30px' }}>
              Setra Groupe sécurise vos investissements au pays. Nous offrons une transparence totale avec des rapports de chantier digitaux réguliers et un respect strict des budgets et des délais. Plus besoin de vous inquiéter pour le suivi de vos travaux.
            </p>
            <Link href="/rdv-ingenieur" style={{ textDecoration: 'none' }}>
              <button className="btn-responsive" style={{ backgroundColor: darkColor, color: 'white', padding: '15px 35px', border: 'none', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', borderRadius: '4px' }}>
                Discuter avec un ingénieur
              </button>
            </Link>
          </div>
          <div className="diaspora-img" style={{ 
            height: '400px', 
            backgroundImage: "url('/gros-oeuvre.jpg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}></div>
        </div>
      </section>

      {/* =========================================================
          4. SECTION CHIFFRES CLÉS & ENGAGEMENTS
          ========================================================= */}
      <section className="section-padding" style={{ backgroundColor: darkColor, color: 'white' }}>
        <div className="grid-stats">
          {[
            { v: '100%', t: 'Transparence', d: 'Photos et vidéos régulières de votre chantier.' },
            { v: '0', t: 'Frais Cachés', d: 'Un devis clair, précis et respecté de A à Z.' },
            { v: 'N°1', t: 'Sérénité', d: 'Conçu spécialement pour la diaspora malienne.' },
            { v: 'Garantie', t: 'Décennale', d: 'Des structures construites pour durer des générations.' }
          ].map((st, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '3rem', fontWeight: '900', color: primaryColor, marginBottom: '5px' }}>{st.v}</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>{st.t}</h4>
              <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.5' }}>{st.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          5. SECTION OUTILS DE CONFORMITÉ
          ========================================================= */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <h3 className="section-title">
          Outils & <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 15px' }}>Conformité</span>
        </h3>
        <p style={{ textAlign: 'center', color: '#666', maxWidth: '700px', margin: '-30px auto 50px', lineHeight: '1.6' }}>
          Nous appliquons des processus technologiques et d'ingénierie rigoureux pour garantir le contrôle absolu de la qualité et de vos budgets.
        </p>
        <div className="grid-conformite" style={{ marginBottom: '50px' }}>
          {[
            { t: "Suivi Vidéo en Direct", d: "Accédez à un espace client sécurisé pour regarder l'évolution de vos travaux en photo et vidéo chaque semaine.", i: "📱" },
            { t: "Étude Géotechnique", d: "Analyse approfondie du sol malien avant toute construction pour dimensionner parfaitement les fondations.", i: "🔬" },
            { t: "Plans d'Exécution Béton", d: "Calculs de structures d'ingénierie précis validés par un bureau de contrôle agréé pour éviter toute fissure.", i: "📐" },
            { t: "Gestion Budgétaire Fixe", d: "Signature d'un contrat à prix ferme non révisable. Ce qui est écrit est ce que vous payez.", i: "🔒" }
          ].map((conf, idx) => (
            <div key={idx} className="conformite-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>{conf.i}</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', color: darkColor }}>{conf.t}</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{conf.d}</p>
            </div>
          ))}
        </div>

        {/* BOUTON VÉRIFICATEUR DE CONFORMITÉ */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/verificateur-conformite" style={{ textDecoration: 'none' }}>
            <button className="btn-responsive" style={{
              backgroundColor: darkColor, color: 'white', padding: '16px 40px', border: `2px solid ${darkColor}`,
              fontWeight: 'bold', fontSize: '1.05rem', cursor: 'pointer', textTransform: 'uppercase',
              borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: '0.3s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = darkColor; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = darkColor; e.currentTarget.style.color = 'white'; }}>
              ⚙️ Vérifier ma conformité
            </button>
          </Link>
        </div>
      </section>

      {/* =========================================================
          6. SECTION RÉALISATIONS PROJETS
          ========================================================= */}
      <section id="projets" className="section-padding" style={{ backgroundColor: lightGrey }}>
        <h3 className="section-title">
          Nos Dernières <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 15px' }}>Réalisations</span>
        </h3>
        
        <div className="grid-projets">
          {[
            { t: 'Immeuble Résidentiel R+4', l: 'ACI 2000, Bamako', img: '/gros-oeuvre.jpg' },
            { t: 'Villa Duplex Moderne', l: 'Sotuba, Bamako', img: '/finition-de-haut-qualite.jpg' },
            { t: 'Rénovation de Villa Luxe', l: 'Baco-Djicoroni, Bamako', img: '/renovation-modernisation.jpg' }
          ].map((proj, idx) => (
            <div key={idx} className="projet-card" style={{ backgroundImage: `url('${proj.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="projet-overlay">
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: primaryColor, fontWeight: 'bold', letterSpacing: '1px' }}>{proj.l}</span>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: '5px' }}>{proj.t}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          7. SECTION TÉMOIGNAGES CLIENTS
          ========================================================= */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <h3 className="section-title">
          Ils nous font <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 15px' }}>Confiance</span>
        </h3>
        
        <div className="grid-temoignages">
          {[
            { n: 'Amadou Diarra', p: 'Résident en France (Paris)', t: '« Grâce à Setra Groupe, j’ai pu construire ma villa à Sotuba sans me déplacer. Les rapports hebdomadaires m’ont donné une tranquillité d’esprit totale. Je recommande les yeux fermés ! »' },
            { n: 'Fatoumata Traoré', p: 'Résidente aux USA (New York)', t: '« Le plus dur quand on vit à l’étranger, c’est la confiance. Avec Setra, tout est carré. Le devis a été respecté et les finitions sont magnifiques, dignes des standards internationaux. »' }
          ].map((tem, idx) => (
            <div key={idx} className="card-temoignage">
              <p style={{ fontStyle: 'italic', color: '#444', lineHeight: '1.6', marginBottom: '20px', fontSize: '1rem' }}>{tem.t}</p>
              <div>
                <strong style={{ color: darkColor, display: 'block', fontSize: '1.1rem' }}>{tem.n}</strong>
                <span style={{ color: '#777', fontSize: '0.85rem' }}>{tem.p}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          8. FOOTER APPEL À L'ACTION
          ========================================================= */}
      <section className="section-padding" style={{ backgroundColor: darkColor, textAlign: 'center', borderTop: `5px solid ${primaryColor}` }}>
        <h3 style={{ color: 'white', fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px' }}>
          PRÊT À RÉALISER VOTRE PROJET ?
        </h3>
        <p style={{ color: '#aaa', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
          Obtenez une étude technique et budgétaire détaillée pour votre construction au Mali.
        </p>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <button className="btn-responsive" style={{
            backgroundColor: primaryColor, color: darkColor, padding: '18px 45px', border: 'none',
            fontWeight: '900', fontSize: '1.1rem', cursor: 'pointer', textTransform: 'uppercase', borderRadius: '4px'
          }}>
            Demander un devis gratuit
          </button>
        </Link>
      </section>

    </main>
  );
}