'use client';

import React from 'react';

export default function MaintenancePage() {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite

  // Remplacez par votre numéro WhatsApp principal au format international (sans espaces ni le +)
  // Exemple ici avec le premier numéro : 22373021984
  const whatsappNumber = "22373021984"; 
  const whatsappMessage = encodeURIComponent("Bonjour Setra Groupe, je vous contacte suite à la maintenance de votre site web.");

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
          margin-bottom: 30px;
        }

        /* Style du Bouton WhatsApp */
        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #25D366;
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.05rem;
          padding: 14px 28px;
          border-radius: 50px;
          margin-bottom: 40px;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .whatsapp-btn:hover {
          background-color: #20ba5a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-btn:active {
          transform: translateY(0);
        }

        .maintenance-footer {
          border-top: 1px solid #333;
          padding-top: 30px;
          font-size: 0.95rem;
          color: #888;
        }

        .maintenance-contact-info {
          color: white;
          font-weight: bold;
          font-size: 1.05rem;
          margin-top: 8px;
          word-break: break-all;
        }

        .maintenance-link {
          color: white;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .maintenance-link:hover {
          color: ${primaryColor};
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
            margin-bottom: 25px;
          }
          .whatsapp-btn {
            width: 100%;
            box-sizing: border-box;
            font-size: 1rem;
            padding: 12px 20px;
            margin-bottom: 35px;
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

        {/* Bouton WhatsApp Dynamique et Responsive */}
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          {/* Icône SVG officielle de WhatsApp pour éviter de charger des images externes */}
          <svg style={{ width: '24px', height: '24px', fill: 'currentColor' }} viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.452 5.432.003 9.85-4.416 9.854-9.85.002-2.633-1.023-5.105-2.887-6.97C17.169 1.93 14.7 1.905 12.01 1.903c-5.433 0-9.854 4.414-9.858 9.848-.001 1.977.521 3.916 1.512 5.642l-.991 3.616 3.71-.973zm11.215-4.57c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
          Discuter sur WhatsApp
        </a>

        {/* Section Contact alternative textuelle */}
        <div className="maintenance-footer">
          <p>Besoin de nous contacter de manière urgente ?</p>
          <p className="maintenance-contact-info">
            <a href="mailto:setraconstructionbtp@gmail.com" className="maintenance-link">
              setraconstructionbtp@gmail.com
            </a>
            <span style={{ display: 'block', marginTop: '5px' }}>
              Téléphone : <a href="tel:+22373021984" className="maintenance-link">+223 73 02 19 84</a> / <a href="tel:+22362697591" className="maintenance-link">62 69 75 91</a>
            </span>
          </p>
        </div>
      </div>
      
    </main>
  );
}