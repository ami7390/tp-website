"use client";

import { useState } from "react";
import Image from "next/image";

// 1. Définition des données des maisons
interface House {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  documentType: string;
  description: string;
  mainImage: string;
  images: string[];
  features: string[];
}

const HOUSES_DATA: House[] = [
  {
    id: "villa-moderne-01",
    title: "Villa Moderne F6 de Standing",
    price: 85000000,
    location: "Sébénikoro, Bamako",
    bedrooms: 5,
    bathrooms: 4,
    surface: 350,
    documentType: "Titre Foncier (TF)",
    description: "Magnifique villa contemporaine comprenant un grand salon lumineux, une cuisine équipée moderne, 5 chambres spacieuses avec salles de bain privatives, une cour pavée avec garage et un système de sécurisation par caméras.",
    mainImage: "/A.jpg",
    images: ["/A.jpg", "/window.svg", "/A.jpg"],
    features: ["Groupe Électrogène", "Climatisation", "Forage d'eau", "Guérite de sécurité"],
  },
  {
    id: "villa-basse-02",
    title: "Maison Basse F4 Confort",
    price: 45000000,
    location: "Sotuba, Bamako",
    bedrooms: 3,
    bathrooms: 2,
    surface: 200,
    documentType: "Titre Foncier",
    description: "Idéale pour une famille, cette maison basse offre un cadre de vie paisible. Elle dispose d'un salon/salle à manger, de 3 chambres autonomes, d'une cuisine interne, d'une dépendance pour le personnel et d'un espace vert.",
    mainImage: "/A.jpg",
    images: ["/A.jpg", "/A.jpg"],
    features: ["Zone Résidentielle", "Accès Goudron", "Clôture barbelée"],
  },
  {
    id: "duplex-luxe-03",
    title: "Duplex de Luxe F8 avec Piscine",
    price: 150000000,
    location: "ACI 2000, Bamako",
    bedrooms: 7,
    bathrooms: 6,
    surface: 500,
    documentType: "Titre Foncier Unique",
    description: "Haut de gamme. Architecture futuriste, finitions impeccables. Grand séjour avec double hauteur sous plafond, piscine à débordement, suite parentale avec dressing, cuisine américaine de standing et parking pour 4 véhicules.",
    mainImage: "/A.jpg",
    images: ["/A.jpg", "/A.jpg", "/A.jpg"],
    features: ["Piscine", "Domotique", "Terrasse Panoramique", "Double Garage"],
  },
];

export default function VentesPage() {
  // États pour les filtres
  const [searchLocation, setSearchLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(200000000);
  const [minBedrooms, setMinBedrooms] = useState<number>(0);

  // État pour la maison sélectionnée en détail
  const [selectedHouse, setSelectedHouse] = useState<House>(HOUSES_DATA[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // État pour le formulaire de contact
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Logique de filtrage du catalogue
  const filteredHouses = HOUSES_DATA.filter((house) => {
    const matchLocation = house.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchPrice = house.price <= maxPrice;
    const matchBedrooms = house.bedrooms >= minBedrooms;
    return matchLocation && matchPrice && matchBedrooms;
  });

  // GESTION DE LA REDIRECTION WHATSAPP (SOLUTION A CORRIGÉE)
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Remplacer par votre numéro (ex: "22370000000" pour le Mali)
    const phoneNumber = "223 62 69 75 91"; 

    // Construction du message WhatsApp propre
    const messageText = `Bonjour, je suis intéressé(e) par la propriété : *${selectedHouse.title}* (${selectedHouse.location}).\n\n` +
                        `*Nom du client :* ${formData.name}\n` +
                        `*Téléphone :* ${formData.phone}\n` +
                        `*Message :* ${formData.message || "Je souhaite planifier une visite ou obtenir plus de détails."}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Ouvre WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, "_blank");

    setFormSubmitted(true);
    setFormData({ name: '', phone: '', message: '' }); // Reset du formulaire
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 pb-12">
      {/* --- HERO BANNER --- */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Trouvez la Maison de vos Rêves
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Découvrez notre catalogue exclusif de propriétés de standing disponibles immédiatement. Qualité de construction garantie.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLONNE GAUCHE & CENTRALE */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION FILTRES */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🔍</span> Filtrer les propriétés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Localisation</label>
                <input
                  type="text"
                  placeholder="Ex: Sotuba, ACI 2000..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Budget Max (FCFA)</label>
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 text-sm"
                >
                  <option value={50000000}>Jusqu'à 50 Millions</option>
                  <option value={100000000}>Jusqu'à 100 Millions</option>
                  <option value={200000000}>Toutes les options</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Chambres min.</label>
                <input
                  type="number"
                  min="0"
                  value={minBedrooms}
                  onChange={(e) => setMinBedrooms(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 text-sm"
                />
              </div>
            </div>
          </div>

          {/* FICHE DÉTAILLÉE DYNAMIQUE */}
          {selectedHouse && (
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300">
              <div className="relative h-64 md:h-96 w-full bg-slate-200">
                <Image
                  src={selectedHouse.images[activeImageIndex] || selectedHouse.mainImage}
                  alt={selectedHouse.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  À Vendre
                </div>
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-xl text-lg font-bold">
                  {selectedHouse.price.toLocaleString()} FCFA
                </div>
              </div>

              {/* Miniatures */}
              <div className="flex gap-2 p-4 bg-gray-100 overflow-x-auto">
                {selectedHouse.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImageIndex === index ? "border-blue-600 scale-95" : "border-transparent opacity-70"
                    }`}
                  >
                    <Image src={img} alt="Miniature" fill className="object-cover" />
                  </button>
                ))}
              </div>

              {/* Infos techniques */}
              <div className="p-6 space-y-6">
                <div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">{selectedHouse.location}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{selectedHouse.title}</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100 text-center">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <span className="block text-lg font-bold text-slate-800">{selectedHouse.surface} m²</span>
                    <span className="text-xs text-gray-500">Superficie</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <span className="block text-lg font-bold text-slate-800">{selectedHouse.bedrooms}</span>
                    <span className="text-xs text-gray-500">Chambres</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <span className="block text-lg font-bold text-slate-800">{selectedHouse.bathrooms}</span>
                    <span className="text-xs text-gray-500">Salles de bain</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <span className="block text-xs font-bold text-green-700 bg-green-50 py-1 rounded-md px-1 truncate" title={selectedHouse.documentType}>
                      {selectedHouse.documentType}
                    </span>
                    <span className="text-xs text-gray-500 block mt-1">Légal</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Description du bien</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedHouse.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">Équipements & Commodités</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedHouse.features.map((feature, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* COLONNE DROITE */}
        <div className="space-y-8">
          
          {/* CATALOGUE DES CARTES */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex justify-between items-center">
              <span>🏠 Biens disponibles</span>
              <span className="text-xs bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full">{filteredHouses.length} trouvés</span>
            </h3>

            {filteredHouses.length === 0 ? (
              <p className="text-sm text-gray-500 bg-white p-4 rounded-xl border text-center">Aucune maison ne correspond à vos critères.</p>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {filteredHouses.map((house) => (
                  <div
                    key={house.id}
                    onClick={() => {
                      setSelectedHouse(house);
                      setActiveImageIndex(0);
                    }}
                    className={`bg-white p-3 rounded-xl border transition-all duration-200 cursor-pointer flex gap-4 hover:shadow-md ${
                      selectedHouse?.id === house.id ? "border-blue-600 ring-1 ring-blue-600 bg-blue-50/20" : "border-gray-200"
                    }`}
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                      <Image src={house.mainImage} alt={house.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden flex-1">
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 truncate">{house.title}</h4>
                        <p className="text-xs text-gray-500 truncate">📍 {house.location}</p>
                      </div>
                      <div className="flex justify-between items-baseline mt-2">
                        <span className="text-xs text-slate-600 font-medium">{house.surface}m² • {house.bedrooms} ch.</span>
                        <span className="text-sm font-bold text-blue-600">{house.price.toLocaleString()} F</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FORMULAIRE DE DIRECT WHATSAPP */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md sticky top-6">
            <h3 className="text-lg font-bold mb-2">Planifier une visite / Infos</h3>
            <p className="text-xs text-slate-400 mb-4">
              Ce bien vous intéresse ? Envoyez-nous instantanément une demande de visite gratuite par WhatsApp.
            </p>

            {formSubmitted ? (
              <div className="bg-green-600 text-white p-4 rounded-xl text-center text-sm font-semibold">
                ✓ Redirection WhatsApp réussie !
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-slate-900">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Votre Nom Complet"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Votre Numéro de Téléphone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder={`Bonjour, je souhaite avoir plus d'informations ou visiter la propriété "${selectedHouse?.title || 'ce bien'}"...`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95 text-sm flex items-center justify-center gap-2"
                >
                  <span>💬</span> Discuter sur WhatsApp
                </button>
              </form>
            )}
            
            <div className="mt-4 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
              Des questions ? Notre équipe commerciale est à votre écoute.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}