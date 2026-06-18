"use client";

import { useState } from "react";
import Image from "next/image";

interface House {
  id: string;
  title: string;
  type: "r+1" | "r+2" | "f6" | "villa";
  price: number;
  depositPrice: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  documentType: string;
  description: string;
  images: string[];
  features: string[];
}

const HOUSES_DATA: House[] = [
  {
    id: "villa-moderne-01",
    title: "Villa Moderne Standing F6",
    type: "f6",
    price: 85000000,
    depositPrice: 500000,
    location: "Sébénikoro, Bamako",
    bedrooms: 5,
    bathrooms: 4,
    surface: 350,
    documentType: "Titre Foncier (TF)",
    description: "Magnifique villa contemporaine comprenant un grand salon lumineux, une cuisine équipée moderne, 5 chambres spacieuses avec salles de bain privatives, une cour pavée avec garage et un système de sécurisation par caméras.",
    images: ["/A.jpg", "/window.svg", "/next.svg"],
    features: ["Groupe Électrogène", "Climatisation", "Forage d'eau", "Guérite de sécurité"],
  },
  {
    id: "duplex-r1-02",
    title: "Splendide Duplex R+1 Haut de Gamme",
    type: "r+1",
    price: 120000000,
    depositPrice: 1000000,
    location: "Sotuba, Bamako",
    bedrooms: 4,
    bathrooms: 3,
    surface: 400,
    documentType: "Titre Foncier (TF)",
    description: "Duplex R+1 flambant neuf idéalement situé. Salon VIP au rez-de-chaussée, cuisine américaine, suite parentale à l'étage avec grand balcon et vue panoramique.",
    images: ["/A.jpg", "/next.svg"],
    features: ["Piscine", "Zone Résidentielle", "Accès Goudron"],
  },
  {
    id: "immeuble-r2-03",
    title: "Immeuble Rapport R+2",
    type: "r+2",
    price: 190000000,
    depositPrice: 2000000,
    location: "ACI 2000, Bamako",
    bedrooms: 8,
    bathrooms: 6,
    surface: 500,
    documentType: "Titre Foncier",
    description: "Immeuble de rapport de type R+2 comprenant plusieurs appartements indépendants, parfait pour un investissement locatif haut de gamme ou siège d'entreprise.",
    images: ["/A.jpg", "/window.svg"],
    features: ["Parking Privé", "Ascenseur possible", "Citerne d'eau"],
  },
];

export default function VentesPage() {
  const primaryColor = '#FFD700'; // Jaune BTP
  const darkColor = '#212121';    // Anthracite
  const lightGrey = '#f9f9f9';

  // États pour les filtres et sélections
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedHouse, setSelectedHouse] = useState<House>(HOUSES_DATA[0]);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // États pour les Modals (Formulaires cachés)
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const [showVisitModal, setShowVisitModal] = useState<boolean>(false);

  // Formulaires
  const [buyForm, setBuyForm] = useState({ name: '', phone: '', method: 'om' });
  const [visitForm, setVisitForm] = useState({ name: '', phone: '', date: '', note: '' });
  const [loading, setLoading] = useState<boolean>(false);

  // Filtrer les maisons selon le modèle cliqué
  const filteredHouses = selectedType === "all" 
    ? HOUSES_DATA 
    : HOUSES_DATA.filter(h => h.type === selectedType);

  // Changer de maison principale
  const selectHouseAndResetImage = (house: House) => {
    setSelectedHouse(house);
    setActiveImageIndex(0);
  };

  // Soumission Achat (Vers Kapi API)
  const handleBuySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: selectedHouse.depositPrice,
          houseTitle: selectedHouse.title,
          clientName: buyForm.name,
          clientPhone: buyForm.phone,
          paymentMethod: buyForm.method
        }),
      });
      const data = await response.json();
      if (response.ok && data.url) {
        window.location.href = data.url; // Redirection Kapi
      } else {
        alert(data.error || "Erreur lors de la liaison avec Kapi.");
        setLoading(false);
      }
    } catch (error) {
      alert("Erreur réseau.");
      setLoading(false);
    }
  };

  // Soumission Réservation Visite (Vers WhatsApp)
  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "22373021984"; 
    const messageText = `Bonjour Setra Groupe, je souhaite planifier une visite pour le bien : *${selectedHouse.title}*.\n\n` +
                        `*Nom :* ${visitForm.name}\n` +
                        `*Téléphone :* ${visitForm.phone}\n` +
                        `*Date souhaitée :* ${visitForm.date}\n` +
                        `*Note :* ${visitForm.note || "Aucune note additionnelle."}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, "_blank");
    setShowVisitModal(false);
    setVisitForm({ name: '', phone: '', date: '', note: '' });
  };

  return (
    <div style={{ backgroundColor: lightGrey, minHeight: '100vh', color: darkColor, paddingBottom: '80px', fontFamily: 'sans-serif' }}>
      
      <style>{`
        .hero-banner { background-color: ${darkColor}; color: white; padding: 40px 10%; text-align: center; border-bottom: 5px solid ${primaryColor}; }
        .main-container { max-width: 1400px; margin: 0 auto; padding: 0 5%; }
        
        /* Bloc des types / modèles de maison */
        .models-bar { display: flex; justify-content: center; gap: 15px; margin: 30px 0; overflow-x: auto; padding: 10px 0; }
        .model-card { flex: 0 0 auto; display: flex; align-items: center; gap: 10px; padding: 12px 25px; background: white; border: 1px solid #ddd; cursor: pointer; font-weight: bold; text-transform: uppercase; transition: all 0.2s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .model-card.active { background: ${darkColor}; color: ${primaryColor}; border-color: ${darkColor}; }
        
        /* Layout Split Dynamique */
        .page-layout-grid { display: grid; grid-template-columns: 2.5fr 1fr; gap: 30px; align-items: start; }
        
        /* Galerie */
        .main-image-wrapper { position: relative; height: 500px; width: 100%; background-color: #eee; border-radius: 4px; overflow: hidden; }
        .thumbs-grid { display: flex; gap: 10px; margin-top: 15px; overflow-x: auto; }
        .thumb-item { position: relative; width: 90px; height: 65px; cursor: pointer; border: 2px solid transparent; background: #eee; }
        .thumb-item.active { border-color: ${primaryColor}; }

        /* Fiche de détails */
        .specs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 20px 0; margin: 25px 0; text-align: center; }
        .action-buttons-box { display: flex; gap: 15px; margin-top: 30px; }
        .btn-main { flex: 1; padding: 16px; font-weight: 900; text-transform: uppercase; border: none; cursor: pointer; text-align: center; font-size: 0.95rem; }

        /* Liste latérale */
        .side-list { display: flex; flex-direction: column; gap: 15px; }
        .side-house-card { display: flex; gap: 12px; padding: 10px; background: white; border: 1px solid #eee; cursor: pointer; border-left: 4px solid transparent; }
        .side-house-card.active { border-left-color: ${primaryColor}; background: #fbfbfb; }

        /* Modals Réutilisables */
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 9999; padding: 20px; }
        .modal-content { background: white; padding: 30px; max-width: 500px; width: 100%; border-top: 5px solid ${primaryColor}; border-radius: 4px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
        .form-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 15px; }
        .form-input { padding: 12px; border: 1px solid #ccc; background: ${lightGrey}; outline: none; width: 100%; font-size: 0.95rem; }

        /* Mode Responsive Mobile */
        @media (max-width: 992px) {
          .page-layout-grid { grid-template-columns: 1fr; }
          .main-image-wrapper { height: 320px; }
          .action-buttons-box { flex-direction: column; }
        }
        @media (max-width: 550px) {
          .specs-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .models-bar { justify-content: flex-start; padding-left: 5%; }
        }
      `}</style>

      <div className="hero-banner">
        <h1 style={{ margin: 0, textTransform: 'uppercase', fontWeight: 900 }}>Setra Groupe Immobilier</h1>
      </div>

      <div className="main-container">
        
        {/* BLOC DES MODÈLES DE MAISON AVEC ICÔNES */}
        <div className="models-bar">
          <div className={`model-card ${selectedType === "all" ? "active" : ""}`} onClick={() => setSelectedType("all")}>🏢 Tous</div>
          <div className={`model-card ${selectedType === "r+1" ? "active" : ""}`} onClick={() => setSelectedType("r+1")}>🪜 R+1</div>
          <div className={`model-card ${selectedType === "r+2" ? "active" : ""}`} onClick={() => setSelectedType("r+2")}>🏢 R+2</div>
          <div className={`model-card ${selectedType === "f6" ? "active" : ""}`} onClick={() => setSelectedType("f6")}>🗝️ F6</div>
          <div className={`model-card ${selectedType === "villa" ? "active" : ""}`} onClick={() => setSelectedType("villa")}>🏡 Villa</div>
        </div>

        {/* CONTENU PRINCIPAL DYNAMIQUE */}
        <div className="page-layout-grid">
          
          {/* ZONE GAUCHE : Fiche de la maison sélectionnée */}
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            
            {/* Grande Image Active */}
            <div className="main-image-wrapper">
              <Image 
                src={selectedHouse.images[activeImageIndex] || selectedHouse.images[0]} 
                alt={selectedHouse.title} 
                fill 
                style={{ objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', bottom: '0', right: '0', backgroundColor: darkColor, color: 'white', padding: '12px 20px', fontSize: '1.2rem', fontWeight: '900' }}>
                {selectedHouse.price.toLocaleString()} FCFA
              </div>
            </div>

            {/* Plusieures images cliquables (Miniatures) */}
            <div className="thumbs-grid">
              {selectedHouse.images.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumb-item ${index === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image src={img} alt="" fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Détails et caractéristiques ($m^2$, etc.) */}
            <div style={{ marginTop: '25px' }}>
              <span style={{ color: '#777', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '0.8rem' }}>📍 {selectedHouse.location}</span>
              <h2 style={{ margin: '5px 0 20px 0', fontSize: '1.7rem', fontWeight: '900', textTransform: 'uppercase' }}>{selectedHouse.title}</h2>
              
              <div className="specs-grid">
                <div><strong>{selectedHouse.surface} m²</strong><br/><span style={{ fontSize: '0.8rem', color: '#666' }}>Superficie</span></div>
                <div><strong>{selectedHouse.bedrooms}</strong><br/><span style={{ fontSize: '0.8rem', color: '#666' }}>Chambres</span></div>
                <div><strong>{selectedHouse.bathrooms}</strong><br/><span style={{ fontSize: '0.8rem', color: '#666' }}>Sanitaires</span></div>
                <div><strong style={{ fontSize: '0.8rem', color: 'green', backgroundColor: '#e8f5e9', padding: '4px 6px' }}>{selectedHouse.documentType}</strong></div>
              </div>

              <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Description du bien</h3>
              <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>{selectedHouse.description}</p>
              
              {/* BOUTONS SOUS LA DESCRIPTION DÉTAILLÉE */}
              <div className="action-buttons-box">
                <button 
                  onClick={() => setShowBuyModal(true)} 
                  className="btn-main" 
                  style={{ backgroundColor: primaryColor, color: darkColor }}
                >
                  💳 Acheter la maison (Acompte)
                </button>
                <button 
                  onClick={() => setShowVisitModal(true)} 
                  className="btn-main" 
                  style={{ backgroundColor: darkColor, color: 'white' }}
                >
                  📅 Réserver une visite
                </button>
              </div>

            </div>
          </div>

          {/* ZONE DROITE : Liste filtrée des biens disponibles */}
          <div className="side-list">
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', textTransform: 'uppercase' }}>Biens correspondants ({filteredHouses.length})</h3>
            {filteredHouses.length === 0 ? (
              <p style={{ color: '#777', fontStyle: 'italic' }}>Aucun modèle disponible dans cette catégorie pour le moment.</p>
            ) : (
              filteredHouses.map((house) => (
                <div 
                  key={house.id} 
                  className={`side-house-card ${selectedHouse.id === house.id ? 'active' : ''}`}
                  onClick={() => selectHouseAndResetImage(house)}
                >
                  <div style={{ position: 'relative', width: '80px', height: '60px', flexShrink: 0 }}>
                    <Image src={house.images[0]} alt="" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{house.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#666' }}>{house.location}</span><br/>
                    <strong style={{ fontSize: '0.85rem', color: '#111' }}>{house.price.toLocaleString()} F</strong>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>

      {/* ================= MODAL FORMULAIRE 1 : ACHETER (KAPI) ================= */}
      {showBuyModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ margin: '0 0 5px 0', textTransform: 'uppercase', fontWeight: 900 }}>Passer à l'achat</h3>
            <p style={{ fontSize: '0.8rem', color: '#666', margin: '0 0 20px 0' }}>
              Versez l'acompte officiel de <strong>{selectedHouse.depositPrice.toLocaleString()} FCFA</strong> via Kapi pour geler la disponibilité du bien.
            </p>
            
            <form onSubmit={handleBuySubmit}>
              <div className="form-group">
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Nom Complet</label>
                <input type="text" required className="form-input" value={buyForm.name} onChange={(e) => setBuyForm({...buyForm, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Téléphone</label>
                <input type="tel" required className="form-input" value={buyForm.phone} onChange={(e) => setBuyForm({...buyForm, phone: e.target.value})} />
              </div>
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '5px' }}>Opérateur de paiement</label>
                <select className="form-input" value={buyForm.method} onChange={(e) => setBuyForm({...buyForm, method: e.target.value})}>
                  <option value="om">📱 Orange Money Mali</option>
                  <option value="wave">🌊 Wave Mali</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="button" onClick={() => setShowBuyModal(false)} style={{ flex: 1, padding: '12px', background: '#ccc', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Annuler</button>
                <button type="submit" disabled={loading} style={{ flex: 2, padding: '12px', background: primaryColor, color: darkColor, border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                  {loading ? "Traitement Kapi..." : "Procéder au paiement"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL FORMULAIRE 2 : RÉSERVER UNE VISITE (WHATSAPP) ================= */}
      {showVisitModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ borderTopColor: darkColor }}>
            <h3 style={{ margin: '0 0 5px 0', textTransform: 'uppercase', fontWeight: 900 }}>Planifier une Visite</h3>
            <p style={{ fontSize: '0.8rem', color: '#666', margin: '0 0 20px 0' }}>
              Soumettez vos disponibilités. Nos équipes prendront contact pour l'organisation de la visite guidée.
            </p>
            
            <form onSubmit={handleVisitSubmit}>
              <div className="form-group">
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Votre Nom</label>
                <input type="text" required className="form-input" value={visitForm.name} onChange={(e) => setVisitForm({...visitForm, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Numéro de contact</label>
                <input type="tel" required className="form-input" value={visitForm.phone} onChange={(e) => setVisitForm({...visitForm, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Date & Heure souhaitées</label>
                <input type="datetime-local" required className="form-input" value={visitForm.date} onChange={(e) => setVisitForm({...visitForm, date: e.target.value})} />
              </div>
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Notes particulières</label>
                <textarea rows={2} className="form-input" style={{ resize: 'none' }} placeholder="Ex: Je suis disponible uniquement les après-midis..." value={visitForm.note} onChange={(e) => setVisitForm({...visitForm, note: e.target.value})}></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="button" onClick={() => setShowVisitModal(false)} style={{ flex: 1, padding: '12px', background: '#ccc', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Fermer</button>
                <button type="submit" style={{ flex: 2, padding: '12px', background: darkColor, color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Confirmer sur WhatsApp</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}