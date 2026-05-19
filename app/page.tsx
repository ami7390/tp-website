'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite
  const lightGrey = '#f4f4f4';

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white', overflowX: 'hidden' }}>
      
      {/* Styles responsives pour le contenu de la page */}
      <style>{`
        .section-padding {
          padding: 80px 10%;
        }
        .hero-title {
          font-size: 3.5rem;
        }
        .grid-services { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
        .grid-diaspora { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; }
        .grid-realisations { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .grid-temoignages { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
        
        .diaspora-image {
          height: 400px;
        }

        @media (max-width: 768px) {
          .section-padding {
            padding: 50px 5% !important;
          }
          .hero-title {
            font-size: 2rem !important;
          }
          .diaspora-image {
            height: 250px !important;
            grid-row: 1;
          }
          h3 {
            font-size: 1.7rem !important;
          }
          .btn-responsive {
            width: 100% !important;
            max-width: none !important;
          }
        }
      `}</style>

      {/* 1. SECTION HERO */}
      <section style={{
        background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '60px 20px'
      }}>
        <h2 className="hero-title" style={{ marginBottom: '15px', textTransform: 'uppercase', fontWeight: '900', maxWidth: '900px', lineHeight: '1.2' }}>
          NOUS CONSTRUISONS VOTRE AVENIR
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '35px', color: primaryColor, fontWeight: 'bold' }}>
          Expertise, Sécurité, Solidité.
        </p>
        
        <Link href="/devis" style={{ width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
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

      {/* 2. SECTION SERVICES */}
      <section id="services" className="section-padding" style={{ backgroundColor: lightGrey }}>
        <h3 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '50px', textTransform: 'uppercase' }}>
          Nos <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 10px' }}>Services</span>
        </h3>
        <div className="grid-services">
          {[
            { t: 'Gros Œuvre', d: 'Construction de structures robustes et fondations durables.', i: '🏗️' },
            { t: 'Second Œuvre', d: 'Finitions de haute qualité, électricité et plomberie.', i: '🛠️' },
            { t: 'Rénovation', d: 'Modernisation et réhabilitation de vos bâtiments.', i: '🏠' }
          ].map((s, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '4px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderTop: `5px solid ${primaryColor}` }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{s.i}</div>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{s.t}</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION TEXTE ACCUEIL - DIASPORA */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="grid-diaspora" style={{ alignItems: 'center' }}>
          <div>
            <span style={{ color: '#888', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Votre partenaire à Bamako</span>
            <h3 style={{ fontSize: '2.5rem', color: darkColor, marginTop: '10px', marginBottom: '20px', fontWeight: '900', lineHeight: '1.2' }}>
              CONSTRUISEZ AU PAYS EN TOUTE <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 5px' }}>SÉRÉNITÉ</span>
            </h3>
            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem', marginBottom: '20px' }}>
              Chez <strong>Setra Groupe</strong>, nous comprenons les défis de la diaspora malienne. Investir à distance dans l'immobilier exige une confiance absolue, une transparence totale et un respect rigoureux des budgets.
            </p>
            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem', marginBottom: '30px' }}>
              Nous vous évitons les intermédiaires familiaux parfois sources de quiproquos, en vous proposant des rapports de chantier digitaux hebdomadaires, des photos, des vidéos et un suivi technique aux normes internationales.
            </p>
            
            <Link href="/garantie" style={{ textDecoration: 'none' }}>
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
                maxWidth: '350px'
              }}>
                En savoir plus sur nos garanties
              </button>
            </Link>
          </div>
          <div className="diaspora-image" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            borderRadius: '8px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
          }}></div>
        </div>
      </section>

      {/* 4. SECTION RÉALISATIONS */}
      <section id="realisations" className="section-padding" style={{ backgroundColor: darkColor, color: 'white' }}>
        <h3 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '50px', textTransform: 'uppercase' }}>
          Nos <span style={{ color: primaryColor }}>Réalisations</span>
        </h3>
        <div className="grid-realisations" style={{ marginBottom: '40px' }}>
          {[
            { id: 1, titre: "VILLA DUPLEX STANDARD - SOTUBA", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" },
            { id: 2, titre: "IMMEUBLE LOCATIF R+2 - ACI 2000", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070" },
            { id: 3, titre: "COMPLEXE COMMERCIAL - KATI", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2074" },
            { id: 4, titre: "RÉNOVATION STRUCTURELLE - KALABANCORO", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" }
          ].map(projet => (
            <div key={projet.id} style={{ 
              height: '250px', 
              backgroundColor: '#333', 
              backgroundImage: `url('${projet.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
              border: `1px solid #444`
            }}>
              <div style={{ position: 'absolute', bottom: 0, background: 'rgba(255, 215, 0, 0.9)', color: darkColor, width: '100%', padding: '10px', fontWeight: 'bold', fontSize: '0.85rem' }}>
                {projet.titre}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link href="/nosrealisation" style={{ textDecoration: 'none' }}>
            <button className="btn-responsive" style={{
              backgroundColor: 'transparent',
              color: primaryColor,
              border: `2px solid ${primaryColor}`,
              padding: '12px 35px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase',
              borderRadius: '4px'
            }}>
              Voir tous nos projets
            </button>
          </Link>
        </div>
      </section>

      {/* 5. SECTION SIMULATION */}
      <section className="section-padding" style={{ backgroundColor: lightGrey, borderLeft: `8px solid ${primaryColor}` }}>
        <div style={{ maxWidth: '800px' }}>
          <span style={{ color: '#666', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Outil de simulation</span>
          <h3 style={{ fontSize: '2.2rem', color: darkColor, marginTop: '5px', marginBottom: '15px', fontWeight: '900' }}>
            UNE NOUVELLE MANIÈRE D'ÉVALUER VOS PROJETS
          </h3>
          <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '25px' }}>
            Découvrez notre tout nouveau système de configuration. Plus rapide et mieux adapté aux critères techniques modernes du bâtiment, il vous permet de définir précisément l'envergure de vos travaux en quelques clics.
          </p>
          
          <Link href="/verificateur-de-conformite" style={{ textDecoration: 'none' }}>
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

      {/* 6. SECTION TÉMOIGNAGES */}
      <section id="temoignages" className="section-padding" style={{ backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#666', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>La parole à nos clients</span>
          <h3 style={{ fontSize: '2.2rem', color: darkColor, marginTop: '5px', textTransform: 'uppercase' }}>
            Avis des Propriétaires de la <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 10px' }}>Diaspora</span>
          </h3>
        </div>

        <div className="grid-temoignages">
          {[
            {
              nom: "Oumar Diarra",
              origine: "Paris, France",
              projet: "Villa R+1 à Sotuba ACI",
              texte: "Faire construire à Bamako depuis Paris sans se faire arnaquer est un miracle. Avec Setra Groupe, j'ai reçu des vidéos à chaque étape. Chantier livré à temps.",
              etoiles: "⭐⭐⭐⭐⭐"
            },
            {
              nom: "Fatoumata Coulibaly",
              origine: "New York, USA",
              projet: "Immeuble Commercial à l'ACI 2000",
              texte: "Le professionnalisme de l'équipe d'ingénieurs m'a impressionnée. Les plans techniques ont été respectés au millimètre près.",
              etoiles: "⭐⭐⭐⭐⭐"
            },
            {
              nom: "Mamadou Sylla",
              origine: "Montreuil, France",
              projet: "Maison Familiale à Sébénikoro",
              texte: "J'avais peur d'envoyer de l'argent au pays pour ma maison. Setra Groupe propose des contrats clairs et des appels de fonds par étape. C'est sérieux.",
              etoiles: "⭐⭐⭐⭐⭐"
            }
          ].map((t, idx) => (
            <div key={idx} style={{ backgroundColor: lightGrey, padding: '30px', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ color: primaryColor, fontSize: '1.2rem', marginBottom: '15px' }}>{t.etoiles}</div>
              <p style={{ fontStyle: 'italic', color: '#444', lineHeight: '1.7', marginBottom: '25px', fontSize: '0.95rem' }}>"{t.texte}"</p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '15px' }}>
                <h5 style={{ margin: '0 0 3px 0', fontSize: '1.05rem', color: darkColor }}>{t.nom}</h5>
                <span style={{ fontSize: '0.85rem', color: '#777', fontWeight: 'bold' }}>{t.origine} — <span style={{ color: '#999' }}>{t.projet}</span></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SECTION APPEL À L'ACTION FINAL */}
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
          <Link href="/devis" style={{ width: '100%', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
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