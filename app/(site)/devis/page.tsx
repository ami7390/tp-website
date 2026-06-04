"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const primaryColor = '#FFD700'; 
const darkColor = '#212121';

export default function DevisPage() {
  // États pour gérer l'affichage des messages de succès/erreur sur l'écran
  const [statut, setStatut] = useState<{ type: 'succes' | 'erreur' | null; msg: string }>({ type: null, msg: '' });
  const [chargement, setChargement] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChargement(true);
    setStatut({ type: null, msg: '' });
    
    const currentForm = e.currentTarget;
    const formData = new FormData(currentForm);
    
    // Construction de l'objet de données centralisé
    const payload = {
      formulaireType: 'devis', // <-- Indique à l'API quel formulaire parle
      nom: formData.get('nom'),
      telephone: formData.get('tel'), // Sera intercepté par 'telephone' dans l'API
      typeProjet: formData.get('projet'),
      localisation: formData.get('lieu'),
      message: formData.get('details'), // Les détails vont dans le champ 'message'
    };

    try {
      // Appel direct vers ton API connectée à Gmail
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setStatut({
          type: 'succes',
          msg: 'Votre demande de devis a été envoyée avec succès sur notre boîte Gmail ! Nos ingénieurs vous répondront rapidement.'
        });
        currentForm.reset(); // Vide les champs du formulaire
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatut({
        type: 'erreur',
        msg: 'Une erreur est survenue lors de l\'envoi automatique. Veuillez réessayer.'
      });
    } finally {
      setChargement(false);
    }
  };

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: darkColor, minHeight: '100vh', padding: '50px 10%', color: 'white' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', textTransform: 'uppercase' }}>
          Demande de <span style={{ color: primaryColor }}>Devis</span>
        </h1>
        <div style={{ width: '60px', height: '4px', backgroundColor: primaryColor, margin: '10px auto' }}></div>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        
        {/* Messages de retour pour l'utilisateur */}
        {statut.type === 'succes' && (
          <div style={{ backgroundColor: '#10B981', color: 'white', padding: '15px', borderRadius: '4px', marginBottom: '20px', fontWeight: 'bold' }}>
            {statut.msg}
          </div>
        )}
        {statut.type === 'erreur' && (
          <div style={{ backgroundColor: '#EF4444', color: 'white', padding: '15px', borderRadius: '4px', marginBottom: '20px', fontWeight: 'bold' }}>
            {statut.msg}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* NOM */}
          <div>
            <label style={labelStyle}>NOM COMPLET</label>
            <input 
              name="nom"
              type="text" 
              placeholder="Votre nom"
              required
              pattern="^[A-Za-zÀ-ÿ\s'-]+$" 
              title="Le nom ne doit contenir que des lettres."
              style={inputFieldStyle}
            />
          </div>

          {/* TÉLÉPHONE */}
          <div>
            <label style={labelStyle}>TÉLÉPHONE (WHATSAPP)</label>
            <input 
              name="tel"
              type="tel" 
              placeholder="Ex: 77000000"
              required
              pattern="^[0-9+\s]{8,15}$"
              title="Veuillez entrer un numéro de téléphone valide."
              style={inputFieldStyle}
            />
          </div>

          {/* TYPE DE PROJET */}
          <div>
            <label style={labelStyle}>TYPE DE PROJET</label>
            <select 
              name="projet"
              required
              defaultValue=""
              style={{
                ...inputFieldStyle,
                backgroundColor: 'white', 
                color: '#212121',         
                cursor: 'pointer'
              }}
            >
              <option value="" disabled>-- Choisir une option --</option>
              <option value="Villa Moderne">Villa Moderne</option>
              <option value="Immeuble Commercial">Immeuble Commercial</option>
              <option value="Rénovation">Rénovation</option>
              <option value="Gros Œuvre">Gros Œuvre / Génie Civil</option>
            </select>
          </div>

          {/* LOCALISATION */}
          <div>
            <label style={labelStyle}>LOCALISATION DU TERRAIN</label>
            <input 
              name="lieu"
              type="text" 
              placeholder="Quartier / Ville"
              required
              style={inputFieldStyle}
            />
          </div>

          {/* DÉTAILS */}
          <div>
            <label style={labelStyle}>DÉTAILS DU PROJET</label>
            <textarea 
              name="details"
              rows={4}
              placeholder="Surface, budget estimé..."
              style={{ ...inputFieldStyle, resize: 'none' }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={chargement}
            style={{
              backgroundColor: chargement ? '#555' : primaryColor,
              color: chargement ? '#aaa' : darkColor,
              padding: '18px',
              border: 'none',
              fontWeight: '900',
              fontSize: '1rem',
              textTransform: 'uppercase',
              cursor: chargement ? 'not-allowed' : 'pointer',
              marginTop: '10px',
              borderRadius: '4px'
            }}
          >
            {chargement ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>

        </form>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/nosrealisation" style={{ color: '#666', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>
            ← RETOUR AUX RÉALISATIONS
          </Link>
        </div>
      </div>
    </main>
  );
}

const labelStyle = { 
  display: 'block', 
  marginBottom: '8px', 
  color: primaryColor, 
  fontSize: '0.8rem', 
  fontWeight: 'bold',
  textTransform: 'uppercase' as 'uppercase'
};

const inputFieldStyle = {
  width: '100%',
  padding: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid #444',
  borderRadius: '4px',
  color: 'white',
  fontSize: '1rem',
  outline: 'none'
};