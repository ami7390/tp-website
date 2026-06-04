"use client";

import React from 'react';
import Link from 'next/link';

// Variables de thème (Setra Groupe)
const primaryColor = '#FFD700'; // Jaune BTP
const darkColor = '#1a1a1a';    // Anthracite

export default function ServicesPage() {
  
  // Données des services
  const services = [
    {
      id: 1,
      titre: "Construction de Bâtiments",
      desc: "De la fondation aux finitions, nous réalisons vos villas, immeubles et bureaux.",
      img: "/s1.jpg",
      icon: "🏗️"
    },
    {
      id: 2,
      titre: "Génie Civil & VRD",
      desc: "Aménagement de terrains, routes et réseaux d'assainissement.",
      img: "/s2.jpg", 
      icon: "🛣️"
    },
    {
      id: 3,
      titre: "Rénovation & Extension",
      desc: "Modernisation de structures existantes et agrandissement d'espaces.",
      img: "/s3.jpg",
      icon: "🏠"
    },
    {
      id: 4,
      titre: "Études & Plans",
      desc: "Conception architecturale et calculs de structure pour vos projets.",
      img: "/s4.jpg",
      icon: "📐"
    },
    {
      id: 5,
      titre: "Matériaux de Construction",
      desc: "Fourniture de matériaux de qualité supérieure pour tous vos chantiers.",
      img: "/S5.png",
      icon: "🧱"
    }
  ];

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{
        height: '400px',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/mc.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px',
        borderBottom: `6px solid ${primaryColor}`
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: 0, textTransform: 'uppercase' }}>
          Nos <span style={{ color: primaryColor }}>Services</span>
        </h1>
        <p style={{ maxWidth: '700px', fontSize: '1.2rem', marginTop: '20px', color: '#ccc' }}>
          L'expertise technique au service de vos ambitions. Nous bâtissons l'avenir du Mali avec rigueur et passion.
        </p>
      </section>

      {/* 2. GRILLE DE SERVICES */}
      <section style={{ padding: '80px 10%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {services.map((s) => (
            <div 
              key={s.id}
              style={{
                height: '450px',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('${s.img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '40px 25px',
                transition: 'all 0.4s ease',
                cursor: 'default',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 15px 40px rgba(255, 215, 0, 0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{s.icon}</div>
              <h3 style={{ color: primaryColor, fontSize: '1.6rem', margin: '0 0 10px 0', textTransform: 'uppercase' }}>
                {s.titre}
              </h3>
              <p style={{ color: '#ddd', lineHeight: '1.5', fontSize: '0.95rem', marginBottom: '20px' }}>
                {s.desc}
              </p>
              
              {/* CORRECTION ICI : Redirection vers la page de détail dynamique */}
              <Link href={`/nosservices/${s.id}`} style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontWeight: 'bold', 
                fontSize: '0.8rem',
                letterSpacing: '1px'
              }}>
                EN SAVOIR PLUS <span style={{ color: primaryColor }}>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION RÉASSURANCE */}
      <section style={{ backgroundColor: darkColor, color: 'white', padding: '60px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>POURQUOI CHOISIR SETRA GROUPE ?</h2>
        <div style={{ height: '4px', width: '60px', backgroundColor: primaryColor, margin: '0 auto 30px auto' }}></div>
        <p style={{ color: '#aaa', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          Nous garantissons le respect des délais, la sécurité sur nos chantiers et une transparence totale sur vos budgets.
        </p>
        <Link href="/devis" style={{ textDecoration: 'none' }}>
    <button style={{ 
      width: '100%', 
      backgroundColor: primaryColor, 
      color: darkColor, 
      padding: '20px', 
      border: 'none', 
      fontWeight: '900', 
      marginTop: '40px', 
      cursor: 'pointer', 
      textTransform: 'uppercase', 
      borderRadius: '4px',
      display: 'block' // Assure que le bouton prend toute la place dans le lien
    }}>
      Lancer mon projet dès maintenant
    </button>
  </Link>
      </section>
    </main>
  );
}