import React from 'react';

export default function AproposPage() {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite
  const lightGrey = '#f4f4f4';

  const sectionStyle = {
    padding: '60px 10%',
  };

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white', minHeight: '100vh' }}>
      
      {/* 1. EN-TÊTE À PROPOS (Même design que Contact) */}
      <section style={{
        backgroundColor: darkColor,
        color: 'white',
        padding: '60px 10%',
        textAlign: 'center',
        borderBottom: `6px solid ${primaryColor}`
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>
          Notre <span style={{ color: primaryColor }}>Expertise</span>
        </h1>
        <p style={{ fontSize: '1.1rem', marginTop: '15px', color: '#ccc' }}>
          Bâtir l'avenir du Mali avec rigueur, sécurité et professionnalisme.
        </p>
      </section>

      {/* 2. SECTION HISTOIRE ET CHIFFRES */}
      <section style={sectionStyle}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          
          {/* COLONNE GAUCHE : Notre Vision */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '1.8rem', color: darkColor, marginBottom: '30px', textTransform: 'uppercase' }}>
              Qui sommes-nous ?
            </h2>
            
            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.1rem', marginBottom: '20px' }}>
              **Setra Groupe** est une entreprise de référence basée à Bamako, spécialisée dans le secteur du Bâtiment et des Travaux Publics (BTP). Depuis plus de 10 ans, nous accompagnons nos clients dans la réalisation de leurs projets les plus ambitieux.
            </p>

            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: primaryColor, backgroundColor: darkColor, display: 'inline-block', padding: '5px 10px', marginBottom: '10px' }}>🏗️ NOTRE MISSION</h4>
              <p style={{ fontSize: '1.1rem', color: '#555', margin: 0 }}>Concevoir des infrastructures durables respectant les normes internationales.</p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: primaryColor, backgroundColor: darkColor, display: 'inline-block', padding: '5px 10px', marginBottom: '10px' }}>🌍 NOTRE VISION</h4>
              <p style={{ fontSize: '1.1rem', color: '#555', margin: 0 }}>Devenir le partenaire privilégié du développement urbain au Mali.</p>
            </div>

            {/* Petits compteurs style BTP */}
            <div style={{ display: 'flex', gap: '30px', marginTop: '40px', padding: '20px', backgroundColor: lightGrey, borderLeft: `5px solid ${primaryColor}` }}>
              <div>
                <strong style={{ fontSize: '1.8rem', color: darkColor }}>10+</strong>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Ans d'expérience</p>
              </div>
              <div>
                <strong style={{ fontSize: '1.8rem', color: darkColor }}>200+</strong>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Chantiers livrés</p>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Image de confiance */}
          <div style={{ 
            flex: '1.5', 
            minWidth: '300px', 
            height: '450px', 
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f3366d4?q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            position: 'relative'
          }}>
            {/* Petit badge de garantie */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: primaryColor,
              color: darkColor,
              padding: '15px',
              fontWeight: 'bold',
              borderRadius: '4px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              QUALITÉ<br/>GARANTIE
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION VALEURS (Même hauteur que la Map de la page contact pour l'équilibre) */}
      <section style={{ padding: '60px 10%', backgroundColor: lightGrey, textAlign: 'center' }}>
        <h2 style={{ marginBottom: '40px', textTransform: 'uppercase' }}>Nos Valeurs Fondamentales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {[
            { t: 'INTÉGRITÉ', d: 'La transparence totale dans tous nos contrats.' },
            { t: 'SÉCURITÉ', d: 'Zéro accident sur tous nos chantiers.' },
            { t: 'INNOVATION', d: 'L\'utilisation de techniques modernes de construction.' }
          ].map((val, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '4px', borderTop: `4px solid ${primaryColor}` }}>
              <h4 style={{ color: darkColor, marginBottom: '15px' }}>{val.t}</h4>
              <p style={{ color: '#666', margin: 0 }}>{val.d}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}