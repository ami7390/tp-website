'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 1. Déclaration de la base de données fictive (En dehors du composant pour de meilleures performances)
const blogPosts = [
  {
    id: 'choisir-fondations-sol-argileux-bamako',
    title: 'Comment choisir les bonnes fondations pour un sol argileux à Bamako ?',
    excerpt: 'Les sols de Bamako cachent parfois des pièges pour les constructions. Découvrez l’importance d’une étude géotechnique réussie.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop',
    date: '04 Juin 2026',
    category: 'Technique'
  },
  {
    id: 'secrets-coulage-dalle-beton-sans-fissures',
    title: 'Les secrets d’un coulage de béton armé sans fissures',
    excerpt: 'Le contrôle de la température et le dosage du ciment sont cruciaux sous le climat malien. Suivez le guide de nos experts.',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=600&auto=format&fit=crop',
    date: '15 Mai 2026',
    category: 'Conseils'
  },
  {
    id: 'defis-techniques-chantier-forage-industriel',
    title: 'Forage Professionnel au Mali : Comment garantir un grand débit d’eau sans coupure ?',
    excerpt: 'Entreprises, industries ou grands domaines à Bamako : découvrez le prix, les étapes clés et les normes pour un forage réussi et durable.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=600&auto=format&fit=crop',
    date: '28 Mai 2026',
    category: 'Forage & Eau'
  },
  {
    id: 'installation-infrastructure-reseau-btp-moderne',
    title: 'Précâblage Informatique : Pourquoi planifier Internet et la Fibre avant de couler vos dalles ?',
    excerpt: 'Évitez de casser vos murs après la peinture ! Nos experts expliquent comment l’intégration des gaines télécoms valorise vos bâtiments au Mali.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    date: '10 Mai 2026',
    category: 'Télécom & IT'
  }
];

// 2. L'EXPORT PAR DÉFAUT EXPLICITE (Ce qui résout ton bug)
export default function BlogPage() {
  const primaryColor = '#FFCC00'; // Jaune ambré WCAG
  const darkBg = '#0b0b0e';       // Noir pur 
  const cardBg = '#16161c';       // Tuile sombre
  const textMuted = '#cbd5e1';    // Texte clair lisible

  const [discussions, setDiscussions] = useState([
    { name: 'Amadou Touré', message: 'Est-ce que Setra Groupe se déplace également dans la région de Kayes pour des chantiers de forage ?', date: 'Il y a 10 min' },
    { name: 'Moussa Diakité', message: 'Vos articles sont super enrichissants pour nous les jeunes entrepreneurs dans le bâtiment au Mali. Merci !', date: 'Il y a 3 heures' }
  ]);
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handlePostMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userMessage.trim()) return;

    const newMessage = {
      name: userName,
      message: userMessage,
      date: "À l'instant"
    };

    setDiscussions([newMessage, ...discussions]);
    setUserName('');
    setUserMessage('');
  };

  return (
    <div style={{ backgroundColor: darkBg, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '100px', color: '#ffffff' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { transition: all 0.2s ease-in-out; box-sizing: border-box; }
        .skip-link { position: absolute; top: -40px; left: 0; background: ${primaryColor}; color: ${darkBg}; padding: 8px; z-index: 100; }
        .skip-link:focus { top: 0; }
        .hero-section { padding: 80px 10%; text-align: center; background: radial-gradient(circle at top, rgba(255, 204, 0, 0.1) 0%, transparent 70%); }
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 35px; padding: 20px 10% 80px 10%; max-width: 1400px; margin: 0 auto; }
        
        .cyber-card { background: ${cardBg}; border-radius: 14px; overflow: hidden; text-decoration: none; color: #ffffff; border: 2px solid #22222b; display: flex; flex-direction: column; }
        .cyber-card:focus, .cyber-card:hover { transform: translateY(-4px); border-color: ${primaryColor}; box-shadow: 0 0 0 3px ${primaryColor}; outline: none; }
        
        .img-box { width: 100%; height: 220px; overflow: hidden; background: #000; }
        .img-box img { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; }
        .cyber-card:hover .img-box img { opacity: 1; }
        
        .card-txt-box { padding: 26px; flex: 1; display: flex; flex-direction: column; }
        .mini-badge { background-color: #ffffff; color: ${darkBg}; padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; width: fit-content; margin-bottom: 16px; }
        .title-link { margin: 0 0 12px 0; font-size: 1.4rem; color: #ffffff; font-weight: 800; line-height: 1.4; }
        .card-desc { color: ${textMuted}; font-size: 1.05rem; line-height: 1.6; margin: 0 0 24px 0; flex: 1; }
        .action-arrow { color: ${primaryColor}; font-weight: 800; font-size: 1rem; display: inline-flex; align-items: center; gap: 6px; text-decoration: underline; }

        .forum-wrapper { max-width: 860px; margin: 0 auto; padding: 0 20px; }
        .forum-panel { background: ${cardBg}; padding: 40px; border-radius: 16px; border: 2px solid #22222b; }
        .dark-input { width: 100%; padding: 14px 18px; border: 2px solid #333344; border-radius: 8px; font-size: 1.05rem; background-color: #121216; color: #ffffff; }
        .dark-input:focus { border-color: ${primaryColor}; outline: none; box-shadow: 0 0 0 4px ${primaryColor}; background-color: #000000; }
        
        .yellow-btn { background: ${primaryColor}; color: ${darkBg}; padding: 16px 32px; font-size: 1.05rem; font-weight: 800; border: none; border-radius: 8px; cursor: pointer; display: inline-flex; width: fit-content; text-transform: uppercase; }
        .yellow-btn:hover, .yellow-btn:focus { background: #ffffff; color: #000000; box-shadow: 0 0 0 4px #ffffff; outline: none; }
        
        .feed-container { display: flex; flex-direction: column; gap: 24px; margin-top: 40px; }
        .feed-item { display: flex; gap: 20px; padding: 24px; background: #1a1a22; border-radius: 12px; border: 1px solid #2d2d3d; }
        .yellow-avatar { width: 48px; height: 48px; background: ${primaryColor}; color: ${darkBg}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.2rem; flex-shrink: 0; }
        .feed-main { flex: 1; }
        .feed-meta { display: flex; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 5px; }
        .feed-user { font-weight: 800; font-size: 1.1rem; color: #ffffff; }
        .feed-date { font-size: 0.9rem; color: #94a3b8; }
        .feed-text { margin: 0; color: #ffffff; font-size: 1.05rem; line-height: 1.6; }

        @media (max-width: 768px) {
          .hero-section { padding: 40px 5%; }
          .grid-container { padding: 20px 5% 60px 5%; gap: 24px; }
          .forum-panel { padding: 24px; }
          .title-link { font-size: 1.25rem; }
        }
      ` }} />

      <a href="#main-content" className="skip-link">Passer directement au contenu</a>

      <header className="hero-section">
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: '900', color: '#ffffff' }}>
          LE HUB TECHNIQUE <span style={{ color: primaryColor }}>SETRA GROUPE</span>
        </h1>
        <p style={{ margin: '16px 0 0 0', color: textMuted, fontSize: '1.1rem', maxWidth: '600px', marginInline: 'auto', lineHeight: '1.6' }}>
          Analyses d'ingénierie, suivi des chantiers au Mali et espace d'échange accessible à tous.
        </p>
      </header>

      <main id="main-content">
        <section className="grid-container" aria-label="Liste des articles du blog">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="cyber-card" aria-label={`Lire l'article : ${post.title}`}>
              <div className="img-box">
                <img src={post.image} alt="" />
              </div>
              <div className="card-txt-box">
                <span className="mini-badge">{post.category}</span>
                <h2 className="title-link">{post.title}</h2>
                <p className="card-desc">{post.excerpt}</p>
                <div className="action-arrow" aria-hidden="true">
                  Explorer l'analyse ➔
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="forum-wrapper" aria-label="Espace de discussion communautaire">
          <div className="forum-panel">
            <div style={{ marginBottom: '35px' }}>
              <h2 style={{ margin: '0 0 8px 0', fontSize: '1.6rem', color: '#ffffff', fontWeight: '900' }}>
                Fil de Discussion Communautaire
              </h2>
              <p style={{ margin: 0, color: textMuted, fontSize: '1.05rem', lineHeight: '1.5' }}>
                Une problématique de chantier ou besoin d'un avis d'ingénieur au Mali ? Posez vos questions ci-dessous.
              </p>
            </div>

            <form onSubmit={handlePostMessage} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="username" style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffffff' }}>
                    Nom complet ou Entreprise (Obligatoire)
                  </label>
                  <input id="username" type="text" className="dark-input" placeholder="Ex: Alou Traoré" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="status" style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffffff' }}>
                    Espace d'actualité
                  </label>
                  <input id="status" type="text" className="dark-input" value="Réseau Mali Connecté" disabled style={{ color: '#94a3b8', cursor: 'not-allowed' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffffff' }}>
                  Votre message public (Obligatoire)
                </label>
                <textarea id="message" rows={3} className="dark-input" placeholder="Écrivez votre question ou remarque ici..." value={userMessage} onChange={(e) => setUserMessage(e.target.value)} required></textarea>
              </div>
              
              <button type="submit" className="yellow-btn">Publier le message</button>
            </form>

            <div className="feed-container" role="log" aria-live="polite" aria-label="Messages de la communauté">
              {discussions.map((msg, index) => (
                <div key={index} className="feed-item">
                  <div className="yellow-avatar" aria-hidden="true">{msg.name.charAt(0)}</div>
                  <div className="feed-main">
                    <div className="feed-meta">
                      <span className="feed-user">{msg.name}</span>
                      <span className="feed-date">Posté {msg.date}</span>
                    </div>
                    <p className="feed-text">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}