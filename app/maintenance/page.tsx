'use client';

import React from 'react';

export default function MaintenancePage() {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite

  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: darkColor,
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      
      {/* Styles injectés pour gérer le responsive et les animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .maintenance-container {
          width: 100%;
          max-width: 550px;
          padding: 40px 20px;
          box-sizing: border-box;
        }
        
        .maintenance-icon {
          font-size: 5rem;
          margin-bottom: 20px;
          animation: pulse 2s infinite ease-in-out;
        }

        .maintenance-title {
          font-size: 2.5rem;
          font-weight: 900;
          text-transform: uppercase;
          color: ${primaryColor};
          margin-bottom: 20px;
          line-height: 1.2;
          letter-spacing: 0.5px;
        }

        .maintenance-text {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #aaa;
          margin-bottom: 40px;
        }

        .maintenance-footer {
          border-top: 1px solid #333;
          padding-top: 30px;
          font-size: 0.95rem;
          color: #888;
        }

        .maintenance-email {
          color: white;
          font-weight: bold;
          font-size: 1.05rem;
          margin-top: 8px;
          word-break: break-all; /* Évite que l'email ne dépasse sur très petit écran */
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        /* Ajustements spécifiques pour les téléphones portables */
        @media (max-width: 480px) {
          .maintenance-container {
            padding: 20px 10px;
          }
          .maintenance-icon {
            font-size: 4rem;
          }
          .maintenance-title {
            font-size: 1.8rem;
          }
          .maintenance-text {
            font-size: 1rem;
            margin-bottom: 30px;
          }
        }
      ` }} />

      <div className="maintenance-container">
        {/* Icône animée */}
        <div className="maintenance-icon">🚧</div>
        
        {/* Titre Principal */}
        <h1 className="maintenance-title">
          Site en maintenance
        </h1>
        
        {/* Message d'explication */}
        <p className="maintenance-text">
          Notre plateforme fait l'objet d'une mise à jour technique afin de vous offrir une meilleure expérience. 
          Nous serons de retour d'ici quelques instants.
        </p>

        {/* Section Contact alternative */}
        <div className="maintenance-footer">
          <p>Besoin de nous contacter de manière urgente ?</p>
          <p className="maintenance-email">setraconstructionbtp@gmail.com</p>
        </div>
      </div>
      
    </main>
  );
}