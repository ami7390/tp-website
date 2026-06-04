"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Variables de style (Cohérence et modernité)
const primaryColor = '#FFD700'; 
const darkColor = '#1A1A1A'; // Remplacé par le noir profond premium
const lightGrey = '#f4f4f4';

export default function RealisationsPage() {
  const [filter, setFilter] = useState('tous');

  const sectionStyle = {
    padding: '80px 10%',
  };

  // Tableau de tes projets avec tes images locales + ajout des catégories pour le filtre
  const projets = [
    { id: 1, titre: "Villa Moderne R+1", lieu: "Sotuba", img: "/villa s.jpg", categorie: "villas" },
    { id: 2, titre: "Immeuble Commercial", lieu: "ACI 2000", img: "/villa.jpg", categorie: "immeubles" },
    { id: 3, titre: "Résidence Privée", lieu: "Sébénikoro", img: "/mc.jpg", categorie: "villas" },
    { id: 4, titre: "Projet Gros Œuvre", lieu: "Kati", img: "/A.jpg", categorie: "gros-oeuvre" }
  ];

  // Logique de filtrage dynamique
  const projetsFiltres = filter === 'tous' 
    ? projets 
    : projets.filter(p => p.categorie === filter);

  return (
    <main style={{ fontFamily: '"Montserrat", "Arial", sans-serif', backgroundColor: 'white', minHeight: '100vh' }}>
      
      {/* 1. EN-TÊTE RÉALISATIONS */}
      <section style={{
        backgroundColor: darkColor,
        color: 'white',
        padding: '100px 10%',
        textAlign: 'center',
        borderBottom: `6px solid ${primaryColor}`,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/R.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <span style={{ color: primaryColor, fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          Découvrez notre savoir-faire
        </span>
        <h1 style={{ fontSize: '3.2rem', fontWeight: '950', textTransform: 'uppercase', margin: '10px 0 0 0', letterSpacing: '-1px' }}>
          Nos <span style={{ color: primaryColor }}>Réalisations</span>
        </h1>
        <p style={{ fontSize: '1.2rem', marginTop: '15px', color: '#ccc', maxWidth: '800px', margin: '15px auto', fontWeight: '300', lineHeight: '1.6' }}>
          Découvrez les projets emblématiques de Setra Groupe au Mali. La rigueur technique de nos structures et la qualité de nos finitions sont notre meilleure signature.
        </p>
      </section>

      {/* 2. NOUVELLE SECTION : LES CHIFFRES CLÉS DE NOS CHANTIERS */}
      <section style={{ 
        padding: '40px 10%', 
        backgroundColor: darkColor, 
        color: 'white', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '30px', 
        textAlign: 'center',
        borderBottom: '1px solid #2A2A2A'
      }}>
        {[
          { chiffre: "15+", label: "Chantiers sécurisés" },
          { chiffre: "100%", label: "Conformité d'ingénierie" },
          { chiffre: "0", label: "Rallonge budgétaire" },
          { chiffre: "Suivi 4K", label: "Rapports hebdomadaires" }
        ].map((c, i) => (
          <div key={i}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: primaryColor, marginBottom: '5px' }}>{c.chiffre}</div>
            <div style={{ fontSize: '0.8rem', color: '#BBB', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '1px' }}>{c.label}</div>
          </div>
        ))}
      </section>

      {/* 3. BARRE DE FILTRAGE DYNAMIQUE */}
      <section style={{ padding: '50px 10% 0 10%', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { id: 'tous', label: 'Tout voir' },
            { id: 'villas', label: '🏠 Villas & Duplex' },
            { id: 'immeubles', label: '🏢 Immeubles' },
            { id: 'gros-oeuvre', label: '🏗️ Gros Œuvre' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              style={{
                padding: '12px 24px',
                border: filter === btn.id ? `2px solid ${darkColor}` : '1px solid #E2E8F0',
                backgroundColor: filter === btn.id ? darkColor : 'white',
                color: filter === btn.id ? primaryColor : darkColor,
                fontWeight: '700',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.2s ease'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. GRILLE DES RÉALISATIONS (FILTRÉE) */}
      <section style={{ ...sectionStyle, paddingTop: '40px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {projetsFiltres.map((projet) => (
            <div key={projet.id} style={{ 
              height: '400px', 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.85)), url('${projet.img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '30px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              borderBottom: `4px solid transparent`
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottom = `4px solid ${primaryColor}`}
            onMouseLeave={(e) => e.currentTarget.style.borderBottom = `4px solid transparent`}
            >
              <span style={{ color: primaryColor, fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                📍 {projet.lieu}
              </span>
              <h3 style={{ color: 'white', margin: '5px 0 20px 0', fontSize: '1.4rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                {projet.titre}
              </h3>
              
              <Link 
                href={`/nosrealisation/${projet.id}`} 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem', 
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  letterSpacing: '0.5px'
                }}
              >
                VOIR LE DOSSIER TECHNIQUE <span style={{ color: primaryColor }}>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NOUVELLE SECTION : RIGUEUR ET CONTRÔLE DE CHANTIER */}
      <section style={{ ...sectionStyle, backgroundColor: lightGrey }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#666', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Charte de Qualité</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: darkColor, marginTop: '5px', textTransform: 'uppercase' }}>
            Notre Processus d'Exécution Technique
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
          {[
            { step: "01", t: "Étude géotechnique", d: "Chaque projet commence par une analyse de sol précise à Bamako pour adapter le type de fondations nécessaires." },
            { step: "02", t: "Note de Calcul & Plans", d: "Nos ingénieurs dessinent et valident les sections de ferraillage et de béton armé selon les normes de sécurité." },
            { step: "03", t: "Supervision sur Site", d: "Présence active lors des coulages stratégiques (semelles, poteaux, dalles R+) pour éliminer les malfaçons." },
            { step: "04", t: "Contrôle Qualité Finitions", d: "Une vérification point par point (plomberie, électricité, étanchéité) avant la livraison finale des clés." }
          ].map((s, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', padding: '35px 25px', borderRadius: '6px', borderTop: `4px solid ${primaryColor}`, boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: primaryColor, marginBottom: '15px', fontFamily: 'monospace' }}>{s.step}</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: darkColor, marginBottom: '10px', textTransform: 'uppercase' }}>{s.t}</h4>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', margin: '0' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SECTION APPEL À L'ACTION FINALE */}
      <section style={{ 
        padding: '100px 10%', 
        backgroundColor: darkColor, 
        textAlign: 'center',
        borderTop: `6px solid ${primaryColor}`,
        color: 'white'
      }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '-1px' }}>
          VOUS AVEZ UN PROJET SIMILAIRE AU MALI ?
        </h2>
        <p style={{ marginBottom: '40px', color: '#BBB', maxWidth: '650px', margin: '0 auto 40px auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Que vous soyez sur place à Bamako ou issu de la diaspora, confiez votre étude de structure ou votre chantier gros œuvre à Setra Groupe pour bâtir l'esprit tranquille.
        </p>
        
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Link href="/rdv-ingenieur" style={{ textDecoration: 'none' }}>
            <button style={{ 
              width: '100%', 
              backgroundColor: primaryColor, 
              color: darkColor, 
              padding: '20px 40px', 
              border: 'none', 
              fontWeight: '900', 
              cursor: 'pointer', 
              textTransform: 'uppercase', 
              borderRadius: '4px',
              letterSpacing: '1px',
              boxShadow: '0 8px 25px rgba(255, 215, 0, 0.2)'
            }}>
              Obtenir un rdv avec notre ingénieur
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}