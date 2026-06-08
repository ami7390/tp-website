"use client";

import React, { useState } from 'react';

const primaryColor = '#FFD700'; 
const darkColor = '#1a1a1a';

export default function ContactPage() {
  const [envoi, setEnvoi] = useState(false);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChargement(true);
    setErreur(null);
    
    const currentForm = e.currentTarget;
    const formData = new FormData(currentForm);
    
    // Ajustement des champs pour correspondre à 100% avec les attentes de l'API
    const payload = {
      formulaireType: 'contact', 
      nom: formData.get('nom'),
      email: formData.get('email'),
      telephone: 'Non spécifié', // Aligné avec l'API globale
      typeProjet: formData.get('sujet') || 'Demande de contact générale', 
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Si l'API retourne un code d'erreur (ex: 500 ou 404)
      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await response.json();

      if (data && data.success) {
        setEnvoi(true);
        currentForm.reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      setErreur("Une erreur technique est survenue. Veuillez vérifier votre connexion ou réessayer.");
    } finally {
      setChargement(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', fontFamily: 'Arial, sans-serif' }}>
      
      {/* HEADER SECTION */}
      <section style={{
        backgroundColor: darkColor,
        color: 'white',
        padding: '60px 10%',
        textAlign: 'center',
        borderBottom: `6px solid ${primaryColor}`
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', textTransform: 'uppercase' }}>
          Contactez <span style={{ color: primaryColor }}>Setra Groupe</span>
        </h1>
        <p style={{ color: '#ccc' }}>Une question ? Un devis ? Nos experts vous répondent sous 48h.</p>
      </section>

      {/* FORMULAIRE & INFOS */}
      <section style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '40px', 
        padding: '60px 10%',
        justifyContent: 'center'
      }}>
        
        {/* COLONNE INFOS GAUCHE */}
        <div style={{ flex: '1', minWidth: '300px', backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <h2 style={{ borderLeft: `5px solid ${primaryColor}`, paddingLeft: '15px', marginBottom: '30px' }}>NOS COORDONNÉES</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', color: darkColor }}>📍 ADRESSE</strong>
            <p style={{ margin: '5px 0', color: '#666' }}>Bamako, Mali (Sangarebougou-Marseille)</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', color: darkColor }}>📞 TÉLÉPHONE</strong>
            <p style={{ margin: '5px 0', color: '#666' }}>+223 62 69 75 91 / 73 02 19 84</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', color: darkColor }}>📧 EMAIL</strong>
            <p style={{ margin: '5px 0', color: '#666' }}>setraconstructionbtp@gmail.com</p>
          </div>

          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#fffbe6', borderRadius: '4px', border: '1px solid #ffe58f' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#856404' }}>
              <strong>Horaires :</strong> Lun - Ven : 08h00 - 17h00
            </p>
          </div>
        </div>

        {/* COLONNE FORMULAIRE DROITE */}
        <div style={{ flex: '2', minWidth: '350px', backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          
          {erreur && (
            <div style={{ backgroundColor: '#FEF2F2', color: '#991B1B', padding: '15px', borderRadius: '4px', marginBottom: '20px', fontWeight: 'bold' }}>
              {erreur}
            </div>
          )}

          {envoi ? (
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem' }}>✅</div>
              <h3 style={{ color: darkColor }}>Message envoyé !</h3>
              <p>L'équipe de Setra Groupe vous recontactera très prochainement.</p>
              <button onClick={() => setEnvoi(false)} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <input name="nom" type="text" placeholder="Nom complet" required style={inputStyle} />
                <input name="email" type="email" placeholder="Email" required style={inputStyle} />
              </div>
              <input name="sujet" type="text" placeholder="Sujet du projet" style={inputStyle} />
              <textarea name="message" placeholder="Décrivez votre projet ici..." required style={{ ...inputStyle, height: '150px', resize: 'none' }}></textarea>
              
              <button 
                type="submit" 
                disabled={chargement}
                style={{
                  backgroundColor: chargement ? '#555' : darkColor,
                  color: primaryColor,
                  border: 'none',
                  padding: '15px 40px',
                  fontWeight: 'bold',
                  cursor: chargement ? 'not-allowed' : 'pointer',
                  width: '100%',
                  textTransform: 'uppercase',
                  transition: '0.3s'
                }}
                onMouseEnter={(e) => { if(!chargement) e.currentTarget.style.backgroundColor = '#333' }}
                onMouseLeave={(e) => { if(!chargement) e.currentTarget.style.backgroundColor = darkColor }}
              >
                {chargement ? 'Envoi sur Gmail...' : 'Envoyer mon message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  marginBottom: '20px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  outlineColor: primaryColor,
  display: 'block',
  boxSizing: 'border-box'
};