"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const primaryColor = '#FFD700'; 
const darkColor = '#1a1a1a';

export default function DetailServicePage() {
  const params = useParams();
  const id = params.id;

  const servicesData: any = {
    "1": {
      titre: "Construction de Bâtiments",
      img: "/s1.jpg",
      accroche: "De la conception à la remise des clés.",
      description: "Setra Groupe assure la gestion complète de vos chantiers de construction. Nous intervenons sur des projets résidentiels, commerciaux et industriels avec une garantie de qualité structurelle.",
      avantages: ["Étude de sol approfondie", "Respect strict des normes de sécurité", "Suivi de chantier en temps réel"],
      processus: ["Étude préliminaire", "Gros œuvre", "Second œuvre", "Finitions & Livraison"],
      stats: { label: "Projets livrés", calcul: "120+" }
    },
    "2": {
      titre: "Génie Civil & VRD",
      img: "/s2.jpg",
      accroche: "Aménager l'espace pour demain.",
      description: "Nous réalisons des travaux d'infrastructure complexes : terrassement, assainissement, et bitumage. Notre expertise garantit des ouvrages durables face aux contraintes climatiques.",
      avantages: ["Équipements modernes", "Équipes spécialisées", "Durabilité certifiée"],
      processus: ["Terrassement", "Canalisations", "Pavage / Bitumage"],
      stats: { label: "Routes & VRD", calcul: "45 km" }
    },
    "3": {
      titre: "Rénovation & Extension",
      img: "/s3.jpg",
      accroche: "Donnez une seconde vie à vos espaces.",
      description: "Que ce soit pour moderniser une villa ancienne ou agrandir vos bureaux, nous apportons des solutions architecturales innovantes sans compromettre la structure existante.",
      avantages: ["Diagnostic structurel", "Design moderne", "Optimisation des coûts"],
      processus: ["Audit", "Démolition sélective", "Reconstruction"],
      stats: { label: "Rénovations", calcul: "85+" }
    },
    "4": {
      titre: "Études & Plans",
      img: "/s4.jpg",
      accroche: "La précision avant la première brique.",
      description: "Nos ingénieurs et architectes réalisent des plans détaillés et des calculs de structure précis pour garantir la viabilité et la sécurité de vos futurs édifices.",
      avantages: ["Modélisation 3D", "Calculs aux normes", "Expertise technique"],
      processus: ["Brief client", "Esquisses", "Plans d'exécution"],
      stats: { label: "Expertises", calcul: "300+" }
    },
    "5": {
      titre: "Matériaux de Construction",
      img: "/S5.png",
      accroche: "La qualité au service de la solidité.",
      description: "Fourniture de matériaux sélectionnés pour leur haute résistance. Nous accompagnons les constructeurs avec les meilleurs produits disponibles sur le marché malien.",
      avantages: ["Qualité certifiée", "Disponibilité immédiate", "Conseils d'experts"],
      processus: ["Sourcing", "Contrôle qualité", "Logistique de livraison"],
      stats: { label: "Partenaires", calcul: "50+" }
    }
  };

  const service = servicesData[id as string];

  if (!service) return <div style={{ padding: '100px', textAlign: 'center' }}>Service en cours de chargement...</div>;

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      
      {/* 1. HEADER DU SERVICE */}
      <section style={{
        padding: '80px 10% 40px 10%',
        backgroundColor: '#f9f9f9',
        borderBottom: `1px solid #eee`
      }}>
        <Link href="/nosservices" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
          ← RETOUR AUX SERVICES
        </Link>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: darkColor, marginTop: '20px', textTransform: 'uppercase' }}>
          {service.titre}
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#666', marginTop: '10px', maxWidth: '800px' }}>{service.accroche}</p>
      </section>

      {/* 2. SECTION CHIFFRE CLÉ RAPIDE */}
      <div style={{ backgroundColor: primaryColor, padding: '20px 10%', display: 'inline-block', marginTop: '-30px', marginLeft: '10%', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <span style={{ fontWeight: '900', fontSize: '1.5rem', color: darkColor }}>{service.stats.calcul}</span>
        <span style={{ marginLeft: '10px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>{service.stats.label}</span>
      </div>

      {/* 3. CONTENU TECHNIQUE & PROCESSUS */}
      <section style={{ padding: '80px 10%', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
        
        <div>
          <h2 style={{ color: darkColor, fontSize: '2.2rem', marginBottom: '25px' }}>Notre expertise technique</h2>
          <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.1rem', marginBottom: '30px' }}>
            {service.description} Chez **Setra Groupe**, nous comprenons que chaque projet de BTP est unique. Notre approche repose sur une rigueur d'ingénierie et une transparence totale envers nos partenaires.
          </p>

          <h3 style={{ marginBottom: '20px', fontSize: '1.4rem' }}>Les plus de notre service :</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {service.avantages.map((a: string) => (
              <li key={a} style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: '#fcfcfc', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
                <span style={{ color: primaryColor, fontSize: '1.5rem' }}>✔</span>
                <span style={{ color: '#333', fontWeight: 'bold' }}>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ position: 'sticky', top: '20px' }}>
          <img src={service.img} alt={service.titre} style={{ width: '100%', borderRadius: '12px', marginBottom: '30px' }} />
          
          <div style={{ backgroundColor: darkColor, color: 'white', padding: '40px', borderRadius: '12px' }}>
            <h3 style={{ color: primaryColor, marginTop: 0, marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Méthodologie de travail</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {service.processus.map((p: string, i: number) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span style={{ backgroundColor: primaryColor, color: darkColor, minWidth: '30px', height: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '900' }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: '1.05rem', color: '#ddd' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOUVELLE SECTION : ENGAGEMENT HSE (SÉCURITÉ) */}
      <section style={{ backgroundColor: '#f4f4f4', padding: '80px 10%' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2rem', color: darkColor }}>SÉCURITÉ & ENVIRONNEMENT (HSE)</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: primaryColor, margin: '15px auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={hseCardStyle}>
            <span style={{fontSize: '2rem'}}>🛡️</span>
            <h4>Zéro Accident</h4>
            <p>Nous appliquons des protocoles de sécurité stricts pour protéger nos ouvriers et le public.</p>
          </div>
          <div style={hseCardStyle}>
            <span style={{fontSize: '2rem'}}>🏗️</span>
            <h4>Normes ISO</h4>
            <p>Nos matériaux et méthodes de calcul respectent les standards internationaux de construction.</p>
          </div>
          <div style={hseCardStyle}>
            <span style={{fontSize: '2rem'}}>🌱</span>
            <h4>Gestion des Déchets</h4>
            <p>Tri et évacuation responsable des gravats sur tous nos sites de construction à Bamako.</p>
          </div>
        </div>
      </section>

      {/* 5. NOUVELLE SECTION : FAQ RAPIDE */}
      <section style={{ padding: '80px 10%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Questions Fréquentes</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <details style={faqStyle}>
            <summary style={{fontWeight: 'bold', cursor: 'pointer'}}>Quels sont les délais moyens d'exécution ?</summary>
            <p style={{marginTop: '10px', color: '#666'}}>Les délais varient selon l'ampleur. Pour une villa standard, comptez 6 à 8 mois. Pour des travaux de VRD, cela dépend de la surface linéaire.</p>
          </details>
          <details style={faqStyle}>
            <summary style={{fontWeight: 'bold', cursor: 'pointer'}}>Proposez-vous une garantie décennale ?</summary>
            <p style={{marginTop: '10px', color: '#666'}}>Oui, tous nos ouvrages structurels sont couverts par une garantie de solidité conformément aux réglementations en vigueur.</p>
          </details>
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section style={{ padding: '60px 10%', textAlign: 'center', borderTop: '1px solid #eee' }}>
         <Link href="/contact">
            <button style={{
              padding: '25px 60px',
              backgroundColor: primaryColor,
              color: darkColor,
              border: 'none',
              fontSize: '1.2rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '50px',
              transition: '0.3s'
            }}>
              Lancer mon projet maintenant
            </button>
          </Link>
      </section>

    </main>
  );
}

// Styles réutilisables
const hseCardStyle = {
  padding: '30px',
  backgroundColor: 'white',
  borderRadius: '8px',
  textAlign: 'center' as 'center',
  boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
};

const faqStyle = {
  padding: '20px',
  borderBottom: '1px solid #eee',
  marginBottom: '10px'
};