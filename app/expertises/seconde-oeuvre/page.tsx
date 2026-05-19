'use client';

import Link from 'next/link';
import React from 'react';

export default function SecondOeuvre() {
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
        <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🛠️</div>
        <h1 style={{ fontSize: '2.8rem', margin: 0, fontWeight: '900', textTransform: 'uppercase' }}>Second Œuvre & Finitions</h1>
        <p style={{ color: primaryColor, marginTop: '12px', fontSize: '1.2rem', fontWeight: 'bold' }}>L'esthétique et le confort intérieur sans aucun compromis</p>
      </section>

      <div className="container">
        <Link href="/" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', fontWeight: 'bold' }}>
          ➔ Retour à l'accueil
        </Link>

        <div className="flex-layout">
          <div className="main-content">
            <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>Notre Approche Technique</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '40px' }}>
              Une structure solide mérite des finitions irréprochables. Le second œuvre englobe tous les éléments de second plan qui transforment un chantier brut en un espace de vie moderne, haut de gamme, fonctionnel et agréable à vivre.
            </p>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '25px', textTransform: 'uppercase' }}>Savoir-faire & Spécifications</h3>
            <div>
              <div className="point-item">
                <h4 className="point-title">Électricité & Plomberie sécurisées</h4>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>Réseaux encastrés aux normes, choix d’appareillages durables et intégration de systèmes de surpresseurs d’eau.</p>
              </div>
              <div className="point-item">
                <h4 className="point-title">Plâtrerie & Staff moderne</h4>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>Conception de faux-plafonds designs, modernes, avec des gorges lumineuses et des niches LED intégrées.</p>
              </div>
              <div className="point-item">
                <h4 className="point-title">Revêtements & Carrelage</h4>
                <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>Pose millimétrée de carrelage grand format, grès cérame poli et faïence murale fine pour les pièces d’eau.</p>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase' }}>🔒 Garantie Sécurité Diaspora</h3>
            <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '30px' }}>
              Nous validons ensemble les catalogues de finitions à distance. Aucun matériau n'est posé sans votre accord écrit préalable concernant la marque, le modèle, la couleur et la qualité.
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