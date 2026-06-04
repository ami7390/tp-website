"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const primaryColor = '#FFD700'; 
const darkColor = '#1A1A1A'; // Ajusté sur ton noir profond premium

export default function DetailProjet() {
  const params = useParams();
  const id = params.id;

  const projetsInfo: any = {
    "1": {
      titre: "Villa Moderne R+1",
      lieu: "Sotuba",
      img: "/villa s.jpg",
      description: "Ce projet représente l'excellence de Setra Groupe dans le résidentiel de luxe. Nous avons conçu une villa qui allie confort thermique et esthétique contemporaine.",
      specs: [
        { label: "Surface", val: "450 m²" },
        { label: "Finitions", val: "Haut standing" },
        { label: "Énergie", val: "Solaire intégré" }
      ],
      etapes: ["Fondations spéciales", "Structure béton armé", "Étanchéité toiture-terrasse"],
      materiaux: ["Béton haute performance", "Alucobond", "Double vitrage"],
      duree: "8 mois",
      // SECTION DYNAMIQUE UNIQUE POUR LA VILLA
      customSection: (
        <section style={{ padding: '60px 10%', backgroundColor: '#FFFDF0', borderTop: `4px solid ${primaryColor}` }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: darkColor, marginBottom: '20px', textTransform: 'uppercase' }}>
            🌿 Focus : Confort Thermique & Solaire à Sotuba
          </h3>
          <p style={{ lineHeight: '1.8', color: '#444', maxWidth: '800px' }}>
            Pour faire face aux fortes chaleurs de Bamako, cette villa intègre une isolation thermique passive. L'orientation des baies vitrées a été calculée pour éviter l'ensoleillement direct l'après-midi, et le toit-terrasse accueille une centrale solaire de 10 kWc couvrant 80% des besoins en climatisation du bâtiment.
          </p>
        </section>
      )
    },
    "2": {
      titre: "Immeuble Commercial",
      lieu: "ACI 2000",
      img: "/villa.jpg",
      description: "Situé dans le quartier des affaires, cet immeuble a été construit pour maximiser l'espace de bureau tout en offrant une façade moderne.",
      specs: [
        { label: "Niveaux", val: "R+3" },
        { label: "Usage", val: "Bureaux & Commerces" },
        { label: "Sécurité", val: "Normes Incendie" }
      ],
      etapes: ["Gros œuvre", "Façade vitrée", "Climatisation centrale"],
      materiaux: ["Verre trempé", "Structure métallique", "Ascenseurs"],
      duree: "14 mois",
      // SECTION DYNAMIQUE UNIQUE POUR L'IMMEUBLE
      customSection: (
        <section style={{ padding: '60px 10%', backgroundColor: '#F8FAFC', borderTop: '4px solid #0284C7' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: darkColor, marginBottom: '20px', textTransform: 'uppercase' }}>
            📈 Rentabilité & Optimisation des Espaces (ACI 2000)
          </h3>
          <p style={{ lineHeight: '1.8', color: '#444', maxWidth: '800px' }}>
            Chaque plateau technique a été conçu sans poteaux intermédiaires (grâce à des dalles alvéolaires de grande portée) permettant aux futurs locataires professionnels de cloisonner leurs bureaux sur-mesure. Un atout majeur qui a permis de louer 100% de l'immeuble avant même la fin du chantier.
          </p>
        </section>
      )
    },
    "3": {
      titre: "Résidence Privée",
      lieu: "Sébénikoro",
      img: "/mc.jpg",
      description: "Une réalisation axée sur l'intimité. L'utilisation de matériaux durables assure une longévité maximale face aux intempéries.",
      specs: [
        { label: "Type", val: "Concession familiale" },
        { label: "Matériaux", val: "Briques stabilisées" },
        { label: "Délais", val: "Respectés à 100%" }
      ],
      etapes: ["Maçonnerie", "Revêtements sols", "Aménagements"],
      materiaux: ["Briques cuites", "Céramique", "Bois traité"],
      duree: "6 mois",
      // SECTION DYNAMIQUE UNIQUE POUR LA DIASPORA / RÉSIDENCE PRIVÉE
      customSection: (
        <section style={{ padding: '60px 10%', backgroundColor: '#F0FDF4', borderTop: '4px solid #16A34A' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: darkColor, marginBottom: '20px', textTransform: 'uppercase' }}>
            🤝 Le Défi : Suivi à Distance Réussi pour la Diaspora
          </h3>
          <p style={{ lineHeight: '1.8', color: '#444', maxWidth: '800px' }}>
            Le maître d'ouvrage résidant à l'étranger, ce projet a été entièrement géré via notre protocole de transparence numérique. Grâce à des appels vidéo réguliers et des validations budgétaires par livrables d'ingénierie, le chantier de Sébénikoro a été livré sans aucun déplacement physique du propriétaire.
          </p>
        </section>
      )
    },
    "4": {
      titre: "Projet Gros Œuvre",
      lieu: "Kati",
      img: "/A.jpg",
      description: "Expertise technique pure en génie civil gérée avec une précision millimétrique.",
      specs: [
        { label: "Secteur", val: "Infrastructure" },
        { label: "Technique", val: "Poteaux-Poutres" },
        { label: "Main d'œuvre", val: "Qualifiée Setra" }
      ],
      etapes: ["Terrassement", "Ferraillage", "Coulage dalle"],
      materiaux: ["Acier haute adhérence", "Ciment CPJ45", "Adjuvants"],
      duree: "10 mois",
      // SECTION DYNAMIQUE UNIQUE POUR LE GROS ŒUVRE
      customSection: (
        <section style={{ padding: '60px 10%', backgroundColor: '#FEF2F2', borderTop: '4px solid #DC2626' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: darkColor, marginBottom: '20px', textTransform: 'uppercase' }}>
            🏗️ Analyse Géotechnique & Fondations Renforcées (Kati)
          </h3>
          <p style={{ lineHeight: '1.8', color: '#444', maxWidth: '800px' }}>
            Le relief et la nature changeante du sol à Kati ont exigé des calculs de charge extrêmement précis. Nos ingénieurs ont opté pour des fondations sur semelles filantes renforcées avec des longrines de chaînage en acier haute adhérence. Une garantie décennale structurelle absolue pour ce bâtiment.
          </p>
        </section>
      )
    }
  };

  const projet = projetsInfo[id as string];

  if (!projet) return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1A1A1A', color: 'white' }}>
      <h2>Projet en cours de chargement...</h2>
      <Link href="/nosrealisation" style={{color: primaryColor, marginTop: '20px'}}>Retourner à la liste</Link>
    </div>
  );

  return (
    <main style={{ fontFamily: '"Montserrat", "Arial", sans-serif', backgroundColor: 'white', minHeight: '100vh' }}>
      
      {/* SECTION HERO */}
      <section style={{
        height: '70vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.85)), url('${projet.img}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 10% 60px 10%',
        color: 'white',
        borderBottom: `8px solid ${primaryColor}`
      }}>
        <span style={{ color: primaryColor, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
          Réalisation terminée — {projet.lieu}
        </span>
        <h1 style={{ fontSize: '4rem', fontWeight: '950', margin: '10px 0', textTransform: 'uppercase', letterSpacing: '-1px' }}>
          {projet.titre}
        </h1>
      </section>

      {/* BARRE DE CHIFFRES RAPIDES */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', padding: '30px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>
        <div style={{textAlign: 'center'}}><small style={{color: '#888', fontWeight: 'bold'}}>DURÉE</small><p style={{margin: '5px 0 0 0', fontWeight: 'bold', color: darkColor}}>{projet.duree}</p></div>
        <div style={{textAlign: 'center'}}><small style={{color: '#888', fontWeight: 'bold'}}>LOCALISATION</small><p style={{margin: '5px 0 0 0', fontWeight: 'bold', color: darkColor}}>{projet.lieu}</p></div>
        <div style={{textAlign: 'center'}}><small style={{color: '#888', fontWeight: 'bold'}}>STATUT TECHNIQUE</small><p style={{margin: '5px 0 0 0', fontWeight: 'bold', color: '#16A34A'}}>100% Livré</p></div>
      </div>

      {/* CONTENU TECHNIQUE */}
      <section style={{ padding: '80px 10%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
        
        <div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '900', color: darkColor, marginBottom: '25px', letterSpacing: '-0.5px' }}>
            Défis & <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '2px 8px', borderRadius: '3px' }}>Solutions</span>
          </h2>
          <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.15rem', marginBottom: '40px', fontWeight: '300' }}>
            {projet.description} L'accent a été mis sur la durabilité des matériaux face aux variations climatiques de la région de Bamako et de ses alentours.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <h4 style={{ textTransform: 'uppercase', color: darkColor, borderLeft: `3px solid ${primaryColor}`, paddingLeft: '10px', marginBottom: '15px', fontWeight: 'bold' }}>Phases Clés</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '2', color: '#333' }}>
                {projet.etapes.map((e: string) => <li key={e} style={{fontWeight: '600'}}>{e}</li>)}
              </ul>
            </div>
            <div>
              <h4 style={{ textTransform: 'uppercase', color: darkColor, borderLeft: `3px solid ${primaryColor}`, paddingLeft: '10px', marginBottom: '15px', fontWeight: 'bold' }}>Matériaux</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '2', color: '#555' }}>
                {projet.materiaux?.map((m: string) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* FICHE TECHNIQUE */}
        <div style={{ backgroundColor: darkColor, color: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', height: 'fit-content' }}>
          <h3 style={{ color: primaryColor, marginBottom: '30px', textTransform: 'uppercase', textAlign: 'center', fontSize: '1.2rem', fontWeight: '900', letterSpacing: '1px' }}>Fiche Spécifications</h3>
          
          {projet.specs.map((spec: any) => (
            <div key={spec.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid #333', fontSize: '0.95rem' }}>
              <span style={{ color: '#aaa' }}>{spec.label}</span>
              <span style={{ fontWeight: 'bold' }}>{spec.val}</span>
            </div>
          ))}

          <Link href="/devis" style={{ textDecoration: 'none' }}>
            <button style={{ 
              width: '100%', 
              backgroundColor: primaryColor, 
              color: darkColor, 
              padding: '18px', 
              border: 'none', 
              fontWeight: '900', 
              marginTop: '40px', 
              cursor: 'pointer', 
              textTransform: 'uppercase', 
              borderRadius: '4px',
              display: 'block',
              letterSpacing: '0.5px',
              boxShadow: '0 5px 15px rgba(255, 215, 0, 0.15)'
            }}>
              Lancer mon projet de structure
            </button>
          </Link>
        </div>
      </section>

      {/* INJECTION DE LA SECTION COMPLÉMENTAIRE UNIQUE SELON L'ID */}
      {projet.customSection}

      {/* SECTION SÉCURITÉ STANDARDISÉE */}
      <section style={{ padding: '60px 10%', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '30px', textTransform: 'uppercase', fontWeight: '800', fontSize: '1.2rem', letterSpacing: '1px' }}>Engagement Qualité & Sécurité Setra Groupe</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={badgeStyle}>✔️ Normes Eurocode (Calcul Béton)</div>
          <div style={badgeStyle}>✔️ Suivi hebdomadaire Drone/Photo</div>
          <div style={badgeStyle}>✔️ Garantie décennale structurelle</div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <Link href="/nosrealisation" style={{ color: '#888', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>
          ← REVENIR AUX RÉALISATIONS
        </Link>
      </div>

    </main>
  );
}

const badgeStyle = {
  padding: '15px 25px',
  backgroundColor: 'white',
  borderRadius: '4px',
  border: '1px solid #E2E8F0',
  fontWeight: 'bold' as 'bold',
  fontSize: '0.9rem',
  color: '#1A1A1A',
  boxShadow: '0 4px 10px rgba(0,0,0,0.01)'
};