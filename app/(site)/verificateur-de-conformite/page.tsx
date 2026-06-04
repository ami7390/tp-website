'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VerifierConformite() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ type: '', etages: '', zone: '' });
  const [loading, setLoading] = useState(false);

  // Couleurs de la charte Setra Groupe
  const primaryColor = '#FFD700'; // Jaune Or BTP
  const darkColor = '#1A1A1A';    // Noir profond
  const lightGrey = '#F9F9F9';

  // Fonction d'envoi vers l'API /api/contact
  const envoyerDonneesSimulation = async (updatedData: typeof formData) => {
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formulaireType: 'conformite',
          nom: 'Utilisateur Anonyme (Simulateur)',
          email: 'Non spécifié',
          telephone: 'Non spécifié',
          typeProjet: updatedData.type,
          localisation: updatedData.zone,
          message: `Résultat du test de conformité :
- Type de projet : ${updatedData.type}
- Nombre d'étages : ${updatedData.etages}
- Zone de construction : ${updatedData.zone}
- Statut final : ${updatedData.etages !== 'R+0' ? '🔴 Note de calcul obligatoire' : '🟢 Dossier Standard (R+0)'}`
        }),
      });
    } catch (err) {
      console.error("Erreur d'envoi de la simulation:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = (field: string, value: string) => {
    const nextData = { ...formData, [field]: value };
    setFormData(nextData);
    
    const nextStep = step + 1;
    setStep(nextStep);

    // Si on passe à l'étape finale (4), on déclenche l'envoi invisible vers l'API
    if (nextStep === 4) {
      envoyerDonneesSimulation(nextData);
    }
  };

  const handleReset = () => {
    setFormData({ type: '', etages: '', zone: '' });
    setStep(1);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '40px 30px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
      border: '1px solid #EAEAEA',
      fontFamily: '"Montserrat", "Arial", sans-serif',
      color: darkColor
    }}>
      <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
        Contrôle de Conformité <span style={{ color: primaryColor, backgroundColor: darkColor, padding: '0 5px', borderRadius: '3px' }}>Mali</span>
      </h3>
      <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '25px' }}>Vérifiez instantanément les obligations légales de votre futur chantier.</p>
      
      {/* Barre de progression harmonisée */}
      <div style={{ width: '100%', backgroundColor: '#E5E5E5', height: '6px', borderRadius: '10px', marginBottom: '35px', overflow: 'hidden' }}>
        <div style={{ 
          backgroundColor: darkColor, 
          borderRight: `3px solid ${primaryColor}`,
          height: '100%', 
          width: `${(step / 4) * 100}%`, 
          transition: 'all 0.4s ease' 
        }}></div>
      </div>

      {/* ÉTAPE 1 : Type de projet */}
      {step === 1 && (
        <div>
          <p style={{ fontWeight: '700', marginBottom: '15px', fontSize: '1.05rem' }}>1. Quel est votre type de projet ?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => handleNext('type', 'Maison')} style={btnStyle}>🏠 Maison Individuelle / Villa</button>
            <button onClick={() => handleNext('type', 'Immeuble')} style={btnStyle}>🏢 Immeuble / Bureaux</button>
            <button onClick={() => handleNext('type', 'Commerce')} style={btnStyle}>🏪 Commerce / ERP</button>
          </div>
        </div>
      )}

      {/* ÉTAPE 2 : Les étages */}
      {step === 2 && (
        <div>
          <p style={{ fontWeight: '700', marginBottom: '15px', fontSize: '1.05rem' }}>2. Combien d'étages comportera le bâtiment ?</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button onClick={() => handleNext('etages', 'R+0')} style={btnStyle}>Rez-de-chaussée (R+0)</button>
            <button onClick={() => handleNext('etages', 'R+1')} style={btnStyle}>1 Étage (R+1)</button>
            <button onClick={() => handleNext('etages', 'R+2')} style={btnStyle}>2 Étages (R+2)</button>
            <button onClick={() => handleNext('etages', 'R+3')} style={btnStyle}>3 Étages et +</button>
          </div>
        </div>
      )}

      {/* ÉTAPE 3 : La zone du terrain */}
      {step === 3 && (
        <div>
          <p style={{ fontWeight: '700', marginBottom: '15px', fontSize: '1.05rem' }}>3. Où se situe votre terrain ?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => handleNext('zone', 'Bamako')} style={btnStyle}>📍 District de Bamako (C I à C VI)</button>
            <button onClick={() => handleNext('zone', 'Peripherie')} style={btnStyle}>🚗 Périphérie (Kati, Kalabancoro...)</button>
            <button onClick={() => handleNext('zone', 'Autre')} style={btnStyle}>🌍 Autre région du Mali</button>
          </div>
        </div>
      )}

      {/* RÉSULTAT FINAL RESTRUCTURÉ */}
      {step === 4 && (
        <div style={{ textAlign: 'center' }}>
          {formData.etages !== 'R+0' ? (
            /* CAS ROUGE : Note de stabilité et calcul obligatoire */
            <div style={{ backgroundColor: '#FFF5F5', padding: '25px', border: '1px solid #FEB2B2', borderRadius: '6px' }}>
              <span style={{ color: '#C53030', fontWeight: '800', fontSize: '1.1rem', display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>
                🔴 Note de calcul obligatoire
              </span>
              <p style={{ fontSize: '0.92rem', color: '#4A5568', lineHeight: '1.6', marginBottom: '25px' }}>
                Pour un projet en <strong>{formData.etages}</strong> situé à <strong>{formData.zone === 'Peripherie' ? 'Périphérie de Bamako' : formData.zone}</strong>, le Code de l'Urbanisme au Mali exige une <strong>note de stabilité structurelle</strong> signée par un ingénieur agréé pour valider le Permis de Construire.
              </p>
              
              <Link href="/rdv-ingenieur">
                <button style={{
                  width: '100%',
                  backgroundColor: darkColor,
                  color: 'white',
                  border: `2px solid ${primaryColor}`,
                  padding: '15px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  marginBottom: '15px'
                }}>
                  Prendre RDV avec notre Ingénieur
                </button>
              </Link>
            </div>
          ) : (
            /* CAS VERT : Projet Standard R+0 */
            <div style={{ backgroundColor: '#F0FDF4', padding: '25px', border: '1px solid #BBF7D0', borderRadius: '6px' }}>
              <span style={{ color: '#15803D', fontWeight: '800', fontSize: '1.1rem', display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>
                🟢 Dossier Standard (R+0)
              </span>
              <p style={{ fontSize: '0.92rem', color: '#4A5568', lineHeight: '1.6', marginBottom: '25px' }}>
                Votre projet de type <strong>{formData.type}</strong> en Rez-de-chaussée simple ne requiert pas d'étude de sol ou de note de calcul de charge complexe. Les plans architecturaux d'exécution standard sont suffisants.
              </p>
              
              <Link href="/devis">
                <button style={{
                  width: '100%',
                  backgroundColor: primaryColor,
                  color: darkColor,
                  border: 'none',
                  padding: '15px',
                  borderRadius: '4px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  marginBottom: '15px',
                  boxShadow: '0 4px 12px rgba(255, 215, 0, 0.2)'
                }}>
                  Estimer le coût de mes plans
                </button>
              </Link>
            </div>
          )}

          {/* Bouton pour recommencer la simulation en toute discrétion */}
          <button 
            onClick={handleReset} 
            style={{ marginTop: '20px', background: 'none', border: 'none', color: '#777', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem' }}
          >
            Recommencer le test
          </button>
        </div>
      )}
    </div>
  );
}

// Style réutilisable pour les boutons de choix (Effets sobres)
const btnStyle = {
  width: '100%',
  padding: '14px 20px',
  textAlign: 'left' as const,
  backgroundColor: '#FFF',
  border: '1px solid #E2E8F0',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.95rem',
  fontWeight: '500',
  color: '#1A1A1A',
  transition: 'all 0.2s ease',
  outline: 'none',
};