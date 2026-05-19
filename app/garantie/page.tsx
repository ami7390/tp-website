'use client';

import React from 'react';
import Link from 'next/link';

export default function Garanties() {
  const primaryColor = '#FFD700'; // Jaune Or BTP
  const darkColor = '#1A1A1A';    // Noir profond
  const lightGrey = '#F9F9F9';

  const sectionStyle = {
    padding: '80px 10%',
  };

  return (
    <main style={{ fontFamily: '"Montserrat", "Arial", sans-serif', backgroundColor: 'white', color: '#333' }}>
      
      {/* 1. EN-TÊTE DE PAGE (HERO) */}
      <section style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(26, 26, 26, 0.9)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ color: primaryColor, fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Setra Groupe • Engagement & Transparence
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '950', marginTop: '15px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Nos Garanties pour bâtir au pays
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#CCC', lineHeight: '1.6', fontWeight: '300' }}>
            Investir à distance ne doit plus être une source d'angoisse. Découvrez les 4 piliers contractuels qui protègent votre capital et sécurisent votre chantier à Bamako.
          </p>
        </div>
      </section>

      {/* 2. LES 4 PILIERS DE GARANTIE (GRILLE) */}
      <section style={{ ...sectionStyle, backgroundColor: lightGrey }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          
          {/* PILIER 1 */}
          <div style={cardStyle}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔒</div>
            <h3 style={cardTitleStyle}>Zéro Intermédiaire Familial</h3>
            <p style={cardTextStyle}>
              Vous signez un contrat d'entreprise commercial transparent directement avec nous. Les fonds sont versés à l'entreprise et bloqués par étape validée, évitant ainsi les quiproquos ou les réaffectations de budget au sein de la famille.
            </p>
          </div>

          {/* PILIER 2 */}
          <div style={cardStyle}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📱</div>
            <h3 style={cardTitleStyle}>Suivi Digital Hebdomadaire</h3>
            <p style={cardTextStyle}>
              Chaque fin de semaine, vous recevez un rapport d'avancement complet dans votre espace client ou par WhatsApp : photos haute définition, vidéos par drone du coulage, et notes de l'ingénieur de chantier. Vous supervisez tout depuis l'étranger.
            </p>
          </div>

          {/* PILIER 3 */}
          <div style={cardStyle}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📐</div>
            <h3 style={cardTitleStyle}>Conformité & Note de Stabilité</h3>
            <p style={cardTextStyle}>
              Tous nos plans d'exécution et nos structures (béton armé, poteaux, fondations) font l'objet d'une validation rigoureuse par nos ingénieurs agréés, vous garantissant un dossier 100% conforme pour l'obtention du Permis de Construire.
            </p>
          </div>

          {/* PILIER 4 */}
          <div style={cardStyle}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💰</div>
            <h3 style={cardTitleStyle}>Prix Ferme et Définitif</h3>
            <p style={cardTextStyle}>
              Une fois le devis détaillé signé, le prix global de votre construction reste fixe. Nous absorbons les fluctuations imprévues des prix des matériaux (ciment, fer) pour vous prémunir contre toute rallonge budgétaire en cours de route.
            </p>
          </div>

        </div>
      </section>

      {/* 3. PROCESSUS DE SÉCURISATION DU CHANTIER */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div style={{ 
            height: '400px', 
            backgroundImage: "url('https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            borderRadius: '8px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.05)'
          }}></div>
          
          <div>
            <span style={{ color: '#888', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Méthodologie</span>
            <h2 style={{ fontSize: '2.2rem', color: darkColor, marginTop: '10px', marginBottom: '20px', fontWeight: '900' }}>
              Comment nous protégeons <br />votre investissement ?
            </h2>
            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px' }}>
              Dès la phase d'étude de sol jusqu'à la remise des clés de votre villa ou immeuble, nos processus techniques respectent strictement les normes de sécurité en vigueur au Mali.
            </p>
            <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
              Nous travaillons main dans la main avec des experts du droit immobilier et de l'urbanisme à Bamako pour s'assurer que vos titres fonciers et autorisations administratives soient inattaquables.
            </p>
            
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="/devis">
                <button style={{
                  backgroundColor: darkColor,
                  color: 'white',
                  padding: '16px 35px',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  borderRadius: '4px'
                }}>
                  Lancer mon étude
                </button>
              </Link>
              
              <Link href="/">
                <button style={{
                  backgroundColor: 'transparent',
                  color: darkColor,
                  padding: '16px 35px',
                  border: `2px solid ${darkColor}`,
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  borderRadius: '4px'
                }}>
                  Retour au site
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* Styles réutilisables pour les cartes de garanties */
const cardStyle = {
  backgroundColor: 'white',
  padding: '40px 30px',
  borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
  border: '1px solid #EAEAEA',
  transition: 'transform 0.2s ease'
};

const cardTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: '800',
  color: '#1A1A1A',
  margin: '0 0 12px 0',
  letterSpacing: '-0.5px'
};

const cardTextStyle = {
  color: '#666',
  lineHeight: '1.7',
  fontSize: '0.92rem',
  margin: '0'
};