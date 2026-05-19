'use client';

import Link from 'next/link';
import React from 'react';

export default function GrosOeuvre() {
  const primaryColor = '#FFD700'; 
  const darkColor = '#212121';    
  const lightGrey = '#f9f9f9';

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white', color: darkColor, minHeight: '100vh' }}>
      <style>{`
        .container { padding: 60px 10%; }
        .flex-layout { display: flex; gap: 50px; margin-top: 40px; }
        .main-content { flex: 2; }
        .sidebar { flex: 1; background-color: ${lightGrey}; padding: 35px; borderRadius: 8px; border-top: 5px solid ${primaryColor}; height: fit-content; boxShadow: 0 10px 30px rgba(0,0,0,0.03); }
        .point-item { margin-bottom: 25px; padding-left: 15px; border-left: 3px solid ${primaryColor}; }
        .point-title { font-size: 1.2rem; color: ${darkColor}; margin: 0 0 5px 0; font-weight: bold; }
        .btn-action { backgroundColor: ${primaryColor}; color: ${darkColor}; border: none; padding: 16px 35px; fontWeight: 900; fontSize: 1rem; cursor: pointer; textTransform: uppercase; borderRadius: 4px; boxShadow: 0 4px 15px rgba(0,0,0,0.1); width: 100%; transition: 0.3s; }
        .btn-action:hover { backgroundColor: ${darkColor}; color: white; }
        @media (max-width: 768px) {
          .container { padding: 40px 5% !important; }
          .flex-layout { flexDirection: column; gap: 30px; }
          .hero-section h1 { font-size: 2rem !important; }
        }
      `}</style>

      <section className="hero-section" style={{ backgroundColor: darkColor, color: 'white', padding: '80px 5%', textAlign: 'center', borderBottom: `4px solid ${primaryColor}` }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🏗️</div>
        <h1 style={{ fontSize: '2.8rem', margin: 0, fontWeight: '900', textTransform: 'uppercase' }}>Gros Œuvre & Structure</h1>
        <p style={{ color: primaryColor, marginTop: '12px', fontSize: '1.2rem', fontWeight: 'bold' }}>La base solide de vos futurs édifices au Mali</p>
      </section>

      <div className="container">
        <Link href="/" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', fontWeight: 'bold' }}>
          ➔ Retour à l'accueil
        </Link>

        <div className="flex-layout">
          <div className="main-content">
            <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>Notre Approche Technique</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '40px' }}>
              Le gros œuvre constitue l'épine dorsale de tout projet de construction. Chez Setra Groupe, nous appliquons des contrôles techniques rigoureux pour garantir la stabilité, la sécurité et la longévité de vos bâtiments face aux réalités du terrain à Bamako et dans les régions.
            </p>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '25px', textTransform: 'uppercase' }}>Savoir-faire & Spécifications</h3>
            <div>
              <div className="point-item">
                <h4 className="point-title">Fondations spéciales</h4>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>Étude de sol approfondie et adaptation structurelle précise (semelles isolées, filantes ou radiers d’ingénierie).</p>
              </div>
              <div className="point-item">
                <h4 className="point-title">Béton Armé aux normes</h4>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>Calcul de charge, coffrage et coulage de poteaux, poutres et dalles selon les règles de résistance internationales.</p>
              </div>
              <div className="point-item">
                <h4 className="point-title">Maçonnerie de qualité</h4>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>Élévation des murs avec des agglos de ciment vibrés industriellement pour une isolation et une robustesse maximales.</p>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase' }}>🔒 Garantie Sécurité Diaspora</h3>
            <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '30px' }}>
              Pour chaque étape clé du gros œuvre (ferraillage, coffrage, coulage), vous recevez un rapport technique détaillé signé par l'ingénieur, accompagné de vidéos et de photos HD directement sur votre espace ou WhatsApp.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-action">Lancer mon étude en ligne</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}