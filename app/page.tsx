'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite
  const lightGrey = '#f4f4f4';

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white', overflowX: 'hidden' }}>
      
      {/* =========================================================
          STYLES RESPONSIVES DE LA PAGE (MEDIA QUERIES)
          ========================================================= */}
      <style>{`
        .section-padding {
          padding: 80px 10%;
        }
        .hero-title {
          font-size: 3.5rem;
          text-align: center; /* Centré sur ordinateur */
        }
        .section-title {
          text-align: center !important; /* Centrage forcé de tous les grands titres */
          font-size: 2.5rem;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 50px;
          color: ${darkColor};
        }
        
        /* Grilles fluides automatiques */
        .grid-services { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
        .grid-diaspora { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; }
        .grid-realisations { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .grid-temoignages { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
        
        .diaspora-image {
          height: 400px;
        }

        /* Effet de survol élégant sur les cartes de services cliquables */
        .service-card {
          background-color: white; 
          padding: 30px; 
          borderRadius: 4px; 
          boxShadow: 0 5px 15px rgba(0,0,0,0.05); 
          borderTop: 5px solid ${primaryColor};
          textDecoration: none;
          display: block;
          transition: transform 0.3s ease, boxShadow 0.3s ease;
          cursor: pointer;
        }
        .service-card:hover {
          transform: translateY(-5px);
          boxShadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .service-card:hover h4 {
          color: ${primaryColor} !important;
        }

        /* ======= 📱 ADAPTATION MOBILE (Écrans de moins de 768px) ======= */
        @media (max-width: 768px) {
          .section-padding {
            padding: 50px 5% !important;
          }
          .hero-title {
            font-size: 2.2rem !important;
            text-align: center;
          }
          .section-title {
            font-size: 1.8rem !important;
            margin-bottom: 30px;
          }
          .diaspora-image {
            height: 250px !important;
            grid-row: 1; /* Passe l'image au-dessus du texte sur smartphone */
          }
          .btn-responsive {
            width: 100% !important;
            max-width: none !important;
          }
          .diaspora-text-block {
            text-align: center; /* Centre le texte de présentation sur mobile */
          }
          .simulation-block {
            text-align: center; /* Centre la section simulation sur mobile */
          }
        }
      `}</style>

      {/* =========================================================
          1. SECTION HERO (BANNÈRE)
          ========================================================= */}
      <section style={{
        background: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '60px 20px'
      }}>
        <h2 className="hero-title" style={{ marginBottom: '15px', textTransform: 'uppercase', fontWeight: '900', maxWidth: '900px', lineHeight: '1.2' }}>
          NOUS CONSTRUISONS VOTRE AVENIR
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '35px', color: primaryColor, fontWeight: 'bold', textAlign: 'center' }}>
          Expertise, Sécurité, Solidité.
        </p>
        
        <Link href="/contact" style={{ width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
          <button className="btn-responsive" style={{
            backgroundColor: primaryColor,
            color: darkColor,
            padding: '18px 45px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
            transition: '0.3s',
            maxWidth: '300px'
          }}>
            Démarrer mon projet
          </button>
        </Link>
      </section>

      {/* =========================================================
          2. SECTION SERVICES (CLIQUABLES - ROUTES EXPERTISES)
          ========================================================= */}
      <section id="services" className="section-padding" style={{ backgroundColor: lightGrey }}>
        <h3 className="section-title">
          Nos <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 15px' }}>Services</span>
        </h3>
        
        <div className="grid-services">
          {[
            { 
              t: 'Gros Œuvre', 
              d: 'Construction de structures robustes, fondations durables et élévations de bâtiments.', 
              i: '🏗️',
              url: '/expertises/gros-oeuvre'
            },
            { 
              t: 'Second Œuvre', 
              d: 'Finitions de haute qualité, plâtrerie, électricité, carrelage et plomberie.', 
              i: '🛠️',
              url: '/expertises/seconde-oeuvre'
            },
            { 
              t: 'Rénovation', 
              d: 'Modernisation, extension et réhabilitation complète de vos bâtiments existants.', 
              i: '🏠',
              url: '/expertises/renovation'
            }
          ].map((s, idx) => (
            <Link href={s.url} key={idx} style={{ textDecoration: 'none' }}>
              <div className="service-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{s.i}</div>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '10px', color: darkColor, transition: '0.3s', margin: '10px 0' }}>
                  {s.t}
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>
                  {s.d}
                </p>
                <div style={{ marginTop: '20px', color: darkColor, fontWeight: 'bold', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  En savoir plus <span style={{ color: primaryColor }}>➔</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          3. SECTION PRÉSENTATION DIASPORA
          ========================================================= */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="grid-diaspora" style={{ alignItems: 'center' }}>
          <div className="diaspora-text-block">
            <span style={{ color: '#888', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Votre partenaire de confiance</span>
            <h3 style={{ fontSize: '2.3rem', color: darkColor, marginTop: '10px', marginBottom: '20px', fontWeight: '900', lineHeight: '1.2' }}>
              CONSTRUISEZ AU MALI EN TOUTE SÉRÉNITÉ
            </h3>
            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem', marginBottom: '20px' }}>
              Chez <strong>Setra Groupe</strong>, nous comprenons parfaitement les craintes de la diaspora. Investir à distance dans l'immobilier exige une confiance absolue, une transparence totale et un suivi technique aux normes.
            </p>
            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem', marginBottom: '30px' }}>
              Nous vous évitons les intermédiaires familiaux parfois sources de quiproquos, en vous proposant des rapports de chantier digitaux réguliers (photos et vidéos) et un contrôle rigoureux des dépenses.
            </p>
            
            <Link href="/contact" style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}>
              <button className="btn-responsive" style={{
                backgroundColor: darkColor,
                color: 'white',
                padding: '15px 35px',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase',
                borderRadius: '4px',
                width: '100%',
                maxWidth: '300px'
              }}>
                Discuter avec un expert
              </button>
            </Link>
          </div>
          <div className="diaspora-image" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            borderRadius: '6px',
            boxShadow: '0 12px 25px rgba(0,0,0,0.1)'
          }}></div>
        </div>
      </section>

      {/* =========================================================
          4. SECTION RÉALISATIONS
          ========================================================= */}
      <section id="realisations" className="section-padding" style={{ backgroundColor: darkColor, color: 'white' }}>
        <h3 className="section-title" style={{ color: 'white' }}>
          Nos <span style={{ color: primaryColor }}>Réalisations</span>
        </h3>
        
        <div className="grid-realisations" style={{ marginBottom: '40px' }}>
          {[
            { id: 1, titre: "VILLA DUPLEX MODERNE - SOTUBA", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" },
            { id: 2, titre: "IMMEUBLE LOCATIF R+2 - ACI 2000", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070" },
            { id: 3, titre: "COMPLEXE COMMERCIAL - KATI", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2074" },
            { id: 4, titre: "RÉNOVATION RESIDENTIELLE - KALABANCORO", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" }
          ].map(projet => (
            <div key={projet.id} style={{ 
              height: '250px', 
              backgroundImage: `url('${projet.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', bottom: 0, background: 'rgba(255, 215, 0, 0.95)', color: darkColor, width: '100%', padding: '12px', fontWeight: 'bold', fontSize: '0.85rem', boxSizing: 'border-box' }}>
                {projet.titre}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="/nosrealisation" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button className="btn-responsive" style={{
              backgroundColor: 'transparent',
              color: primaryColor,
              border: `2px solid ${primaryColor}`,
              padding: '12px 40px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase',
              borderRadius: '4px',
              transition: '0.3s'
            }}>
              Voir tous nos projets
            </button>
          </Link>
        </div>
      </section>

      {/* =========================================================
          5. SECTION SIMULATION (OUTIL DE CONFIGURATION)
          ========================================================= */}
      <section className="section-padding" style={{ backgroundColor: lightGrey, borderLeft: `8px solid ${primaryColor}` }}>
        <div className="simulation-block" style={{ maxWidth: '800px' }}>
          <span style={{ color: '#666', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Outil de simulation</span>
          <h3 style={{ fontSize: '2.2rem', color: darkColor, marginTop: '5px', marginBottom: '15px', fontWeight: '900', lineHeight: '1.2' }}>
            UNE NOUVELLE MANIÈRE D'ÉVALUER VOS PROJETS
          </h3>
          <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '25px' }}>
            Découvrez notre tout nouveau système de configuration. Plus rapide et mieux adapté aux critères techniques modernes du bâtiment, il vous permet de définir précisément l'envergure de vos travaux en quelques clics.
          </p>
          
          <Link href="/verificateur-de-conformite" style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}>
            <button className="btn-responsive" style={{
              backgroundColor: primaryColor,
              color: darkColor,
              padding: '15px 35px',
              border: `2px solid ${darkColor}`,
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              borderRadius: '4px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              width: '100%',
              maxWidth: '320px'
            }}>
              Vérificateur de conformité →
            </button>
          </Link>
        </div>
      </section>

      {/* =========================================================
          6. SECTION TÉMOIGNAGES
          ========================================================= */}
      <section id="temoignages" className="section-padding" style={{ backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#666', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>La parole à nos clients</span>
          <h3 className="section-title" style={{ marginTop: '5px' }}>
            Avis de la <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 10px' }}>Diaspora</span>
          </h3>
        </div>

        <div className="grid-temoignages">
          {[
            {
              nom: "Oumar Diarra",
              origine: "Paris, France",
              texte: "Faire construire à Bamako depuis Paris sans stress est un miracle. Avec Setra Groupe, j'ai reçu des vidéos régulières de l'évolution de ma villa.",
              etoiles: "⭐⭐⭐⭐⭐"
            },
            {
              nom: "Fatoumata Coulibaly",
              origine: "New York, USA",
              texte: "Le professionnalisme des ingénieurs sur place m'a impressionnée. Les délais et le budget fixés au départ ont été respectés.",
              etoiles: "⭐⭐⭐⭐⭐"
            },
            {
              nom: "Mamadou Sylla",
              origine: "Montreuil, France",
              texte: "Fini les intermédiaires familiaux compliqués. Les appels de fonds par étape claire apportent une vraie sécurité financière.",
              etoiles: "⭐⭐⭐⭐⭐"
            }
          ].map((t, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '6px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
              <div style={{ color: primaryColor, fontSize: '1.2rem', marginBottom: '15px' }}>{t.etoiles}</div>
              <p style={{ fontStyle: 'italic', color: '#444', lineHeight: '1.7', marginBottom: '20px' }}>"{t.texte}"</p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '15px' }}>
                <h5 style={{ margin: '0 0 3px 0', fontSize: '1.05rem', color: darkColor }}>{t.nom}</h5>
                <span style={{ fontSize: '0.85rem', color: '#777', fontWeight: 'bold' }}>{t.origine}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          7. SECTION APPEL À L'ACTION FINAL
          ========================================================= */}
      <section className="section-padding" style={{ 
        backgroundColor: darkColor, 
        textAlign: 'center', 
        borderTop: `5px solid ${primaryColor}`
      }}>
        <h3 style={{ color: 'white', fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase', lineHeight: '1.2' }}>
          Prêt à lancer votre projet de construction au Mali ?
        </h3>
        <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
          Obtenez une estimation budgétaire claire et détaillée pour votre future villa, immeuble ou rénovation à Bamako et alentours.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="/contact" style={{ width: '100%', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
            <button className="btn-responsive" style={{
              backgroundColor: primaryColor,
              color: darkColor,
              padding: '18px 45px',
              border: 'none',
              fontWeight: '900',
              fontSize: '1rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              borderRadius: '4px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.5)',
              width: '100%',
              maxWidth: '350px'
            }}>
              Demander un devis maintenant
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}