'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RdvIngenieur() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  // Couleurs de la charte Setra Groupe
  const primaryColor = '#FFD700'; // Jaune Or BTP
  const darkColor = '#1A1A1A';    // Noir profond
  const lightGrey = '#F9F9F9';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErreur(null);
    
    const currentForm = e.currentTarget;
    const formData = new FormData(currentForm);

    // Rassemblement des données spécifiques au RDV technique pour l'API
    const payload = {
      formulaireType: 'rdv_ingenieur',
      nom: formData.get('nom'),
      email: formData.get('email'),
      telephone: formData.get('whatsapp'),
      typeProjet: `${formData.get('structure')} (${formData.get('hauteur')})`,
      localisation: formData.get('localisation'),
      message: `
Situation géographique : ${formData.get('situation')}
Documents disponibles : ${formData.get('documents')}
Format de l'entretien : ${formData.get('format')}
Période souhaitée : ${formData.get('periode')}
Description / Attentes : ${formData.get('attentes') || 'Aucune description fournie.'
      }`.trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      if (data && data.success) {
        setSubmitted(true);
        currentForm.reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      setErreur("Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: '"Montserrat", "Arial", sans-serif', backgroundColor: lightGrey, minHeight: '100vh', padding: '60px 20px' }}>
      
      {/* Bouton Retour Accueil */}
      <div style={{ maxWidth: '650px', margin: '0 auto 20px auto' }}>
        <Link href="/" style={{ color: darkColor, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          ← Retour à l'accueil
        </Link>
      </div>

      <div style={{
        maxWidth: '650px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
        borderTop: `6px solid ${primaryColor}`,
        overflow: 'hidden'
      }}>
        
        {/* En-tête du formulaire */}
        <div style={{ backgroundColor: darkColor, color: 'white', padding: '35px 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '-0.5px', textTransform: 'uppercase' }}>
            Demande de RDV <span style={{ color: primaryColor }}>Ingénieur</span>
          </h2>
          <p style={{ color: '#BBB', fontSize: '0.95rem', margin: '0', lineHeight: '1.5' }}>
            Planifiez une séance technique pour la validation de vos plans, l'étude de stabilité ou l'obtention de votre Permis de Construire au Mali.
          </p>
        </div>

        {/* ÉCRAN DE SUCCÈS APRÈS ENVOI */}
        {submitted ? (
          <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: darkColor, marginBottom: '15px' }}>
              DEMANDE REÇUE AVEC SUCCÈS !
            </h3>
            <p style={{ color: '#555', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto 30px auto' }}>
              Un ingénieur conseil de <strong>Setra Groupe</strong> va analyser vos informations. Nous vous contacterons par WhatsApp ou par e-mail sous 24h ouvrées pour fixer l'heure exacte du rendez-vous (en présentiel à Bamako ou en visioconférence pour la diaspora).
            </p>
            <Link href="/">
              <button style={{
                backgroundColor: darkColor,
                color: 'white',
                padding: '14px 30px',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}>
                Retourner à l'accueil
              </button>
            </Link>
          </div>
        ) : (
          
          /* FORMULAIRE ACTIF */
          <form onSubmit={handleSubmit} style={{ padding: '40px' }}>
            
            {erreur && (
              <div style={{ backgroundColor: '#FEF2F2', color: '#991B1B', padding: '15px', borderRadius: '4px', marginBottom: '25px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {erreur}
              </div>
            )}
            
            {/* SECTION 1 : Coordonnées */}
            <h4 style={sectionTitleStyle}>1. Informations Personnelles</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '25px' }}>
              <div>
                <label style={labelStyle}>Nom complet *</label>
                <input name="nom" type="text" required placeholder="Ex: Oumar Diarra" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Numéro WhatsApp (avec indicatif) *</label>
                <input name="whatsapp" type="tel" required placeholder="Ex: +33 6... ou +223 70..." style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={labelStyle}>Adresse e-mail *</label>
              <input name="email" type="email" required placeholder="Ex: oumar.diarra@gmail.com" style={inputStyle} />
            </div>

            <div style={{ marginBottom: '35px' }}>
              <label style={labelStyle}>Votre situation géographique actuelle *</label>
              <select name="situation" required style={selectStyle}>
                <option value="">Sélectionnez votre situation</option>
                <option value="Mali">Résident au Mali (Bamako / Régions)</option>
                <option value="Diaspora_Afrique">Diaspora - Autre pays d'Afrique</option>
                <option value="Diaspora_Europe">Diaspora - Europe (France, Belgique...)</option>
                <option value="Diaspora_Amerique">Diaspora - Amérique du Nord (USA, Canada)</option>
              </select>
            </div>

            {/* SECTION 2 : Détails techniques du projet BTP */}
            <h4 style={sectionTitleStyle}>2. Nature et Caractéristiques du Projet</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '25px' }}>
              <div>
                <label style={labelStyle}>Type de structure *</label>
                <select name="structure" required style={selectStyle}>
                  <option value="">Quel type de bâtiment ?</option>
                  <option value="Villa">Villa Individuelle</option>
                  <option value="Immeuble_Rapports">Immeuble de rapport / Locatif</option>
                  <option value="Commercial">Bâtiment Commercial / Magasins</option>
                  <option value="Renovation">Rénovation & Extension Structurelle</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Niveau de Hauteur (Gabarit) *</label>
                <select name="hauteur" required style={selectStyle}>
                  <option value="">Nombre d'étages ?</option>
                  <option value="Rez-de-chaussée simple (R+0)">Rez-de-chaussée simple (R+0)</option>
                  <option value="Immeuble 1 étage (R+1)">Immeuble 1 étage (R+1)</option>
                  <option value="Immeuble 2 étages (R+2)">Immeuble 2 étages (R+2)</option>
                  <option value="Immeuble 3 étages et plus (R+3+)">Immeuble 3 étages et plus (R+3+)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '25px' }}>
              <div>
                <label style={labelStyle}>Localisation du terrain au Mali *</label>
                <input name="localisation" type="text" required placeholder="Ex: Sotuba ACI, Kalabancoro, Kati" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Documents déjà disponibles</label>
                <select name="documents" style={selectStyle}>
                  <option value="Aucun document pour le moment">Aucun document pour le moment</option>
                  <option value="Titre Foncier / Permis d'Occuper uniquement">Titre Foncier / Permis d'Occuper uniquement</option>
                  <option value="Plans d'Architecture dessinés">Plans d'Architecture dessinés</option>
                  <option value="Plans Archi + Données de géomètre">Plans Archi + Données de géomètre</option>
                </select>
              </div>
            </div>

            {/* SECTION 3 : Préférences de RDV */}
            <h4 style={sectionTitleStyle}>3. Vos Préférences de Consultation</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div>
                <label style={labelStyle}>Format de l'entretien *</label>
                <select name="format" required style={selectStyle}>
                  <option value="Visioconférence (WhatsApp / Google Meet)">Visioconférence (WhatsApp / Google Meet)</option>
                  <option value="Présentiel à nos bureaux à Bamako">Présentiel à nos bureaux à Bamako</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Période souhaitée *</label>
                <select name="periode" required style={selectStyle}>
                  <option value="Le plus tôt possible (Sous 48h)">Le plus tôt possible (Sous 48h)</option>
                  <option value="Dans la semaine">Dans la semaine</option>
                  <option value="Uniquement le samedi (Spécial Diaspora)">Uniquement le samedi (Spécial Diaspora)</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '35px' }}>
              <label style={labelStyle}>Description succincte de votre projet ou de vos attentes (Optionnel)</label>
              <textarea 
                name="attentes"
                rows={4} 
                placeholder="Ex: Je souhaite faire valider la note de calcul pour un immeuble R+2 locatif à l'ACI 2000. Les plans d'architectures sont prêts..." 
                style={textareaStyle}
              ></textarea>
            </div>

            {/* BOUTON DE SOUMISSION PREMIUM */}
            <button 
              type="submit" 
              disabled={loading}
              style={{
                width: '100%',
                backgroundColor: primaryColor,
                color: darkColor,
                border: 'none',
                padding: '18px',
                fontSize: '1rem',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderRadius: '4px',
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 8px 20px rgba(255, 215, 0, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              {loading ? 'Traitement de votre dossier...' : 'Confirmer ma demande de RDV technique →'}
            </button>

          </form>
        )}
      </div>
    </main>
  );
}

/* STYLES INTERNES CSS-IN-JS POUR LE DESIGN HAUT DE GAMME */

const sectionTitleStyle = {
  fontSize: '1.05rem',
  fontWeight: '800',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  color: '#1A1A1A',
  borderBottom: '2px solid #EAEAEA',
  paddingBottom: '10px',
  marginBottom: '20px',
  marginTop: '10px'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '700',
  color: '#444',
  marginBottom: '8px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px'
};

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #D9D9D9',
  borderRadius: '4px',
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: 'inherit',
  color: '#1A1A1A',
  transition: 'border-color 0.2s'
};

const selectStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #D9D9D9',
  borderRadius: '4px',
  fontSize: '0.95rem',
  outline: 'none',
  backgroundColor: 'white',
  fontFamily: 'inherit',
  color: '#1A1A1A',
  cursor: 'pointer'
};

const textareaStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #D9D9D9',
  borderRadius: '4px',
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: 'inherit',
  color: '#1A1A1A',
  resize: 'vertical' as const
};