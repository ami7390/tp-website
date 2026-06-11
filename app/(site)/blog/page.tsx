'use client';

import React, { useState } from 'react';

export default function ForumPage() {
  const primaryColor = '#FFCC00'; // Jaune ambré moderne haute visibilité
  const darkBg = '#0b0b0e';       // Noir pur pour contraste maximal (WCAG)
  const cardBg = '#16161c';       // Fond de bloc anthracite contrasté
  const textMuted = '#cbd5e1';    // Gris très clair hautement lisible

  // Liste initiale des discussions du forum
  const [discussions, setDiscussions] = useState([
    { 
      name: 'Amadou Touré', 
      message: 'Bonjour, est-ce que Setra Groupe se déplace également dans la région de Kayes pour des chantiers de forage résidentiel ?', 
      date: 'Il y a 15 min' 
    },
    { 
      name: 'Moussa Diakité', 
      message: 'Vos conseils sur le coulage des dalles par forte chaleur m’ont beaucoup aidé sur mon chantier à Yirimadio. Merci aux ingénieurs !', 
      date: 'Il y a 3 heures' 
    },
    { 
      name: 'Fanta Diallo', 
      message: 'Quelle est la durée moyenne pour obtenir les résultats d’une étude géotechnique de sol avant de lancer les fondations ?', 
      date: 'Il y a 1 jour' 
    }
  ]);

  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');

  // Fonction pour poster un nouveau message sur le forum
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
    <div style={{ backgroundColor: darkBg, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#ffffff', paddingBottom: '100px' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; transition: all 0.2s ease-in-out; }
        
        /* En-tête du Forum */
        .forum-hero { padding: 60px 10%; text-align: center; border-bottom: 1px solid #22222b; background: linear-gradient(180deg, ${darkBg} 0%, #121217 100%); }
        .forum-hero h1 { margin: 0; font-size: 2.5rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; }
        .forum-hero p { margin: 15px 0 0 0; color: ${textMuted}; font-size: 1.1rem; max-width: 750px; margin-inline: auto; line-height: 1.6; }
        
        /* Conteneur principal */
        .forum-container { max-width: 900px; margin: 40px auto 0 auto; padding: 0 20px; }
        
        /* Formulaire */
        .forum-panel { background: ${cardBg}; padding: 40px; border-radius: 14px; border: 1px solid #22222b; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        .form-title { margin: 0 0 25px 0; font-size: 1.4rem; font-weight: 800; border-bottom: 3px solid ${primaryColor}; width: fit-content; padding-bottom: 5px; color: #ffffff; }
        
        .input-group { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .field-box { display: flex; flex-direction: column; gap: 8px; }
        .field-box label { font-weight: 700; font-size: 0.95rem; color: ${textMuted}; }
        
        .forum-input { width: 100%; padding: 12px 16px; border: 2px solid #22222b; border-radius: 8px; font-size: 1rem; color: #ffffff; background-color: #0b0b0e; }
        .forum-input:focus { border-color: ${primaryColor}; outline: none; box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.2); }
        
        .submit-btn { background: ${primaryColor}; color: ${darkBg}; padding: 14px 28px; font-size: 1rem; font-weight: 800; border: none; border-radius: 8px; cursor: pointer; display: inline-flex; width: fit-content; text-transform: uppercase; letter-spacing: 0.5px; }
        .submit-btn:hover { background: #ffffff; color: ${darkBg}; }
        
        /* Fil de discussion */
        .feed-title { margin: 50px 0 25px 0; font-size: 1.4rem; font-weight: 800; color: #ffffff; }
        .feed-container { display: flex; flex-direction: column; gap: 20px; }
        .feed-item { display: flex; gap: 20px; padding: 24px; background: ${cardBg}; border-radius: 14px; border: 1px solid #22222b; }
        
        .user-avatar { width: 48px; height: 48px; background: ${primaryColor}; color: ${darkBg}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.2rem; flex-shrink: 0; text-transform: uppercase; }
        .feed-main { flex: 1; }
        .feed-meta { display: flex; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 5px; align-items: center; }
        .feed-user { font-weight: 800; font-size: 1.05rem; color: #ffffff; }
        .feed-date { font-size: 0.85rem; color: ${textMuted}; }
        .feed-text { margin: 0; color: #ffffff; font-size: 1.05rem; line-height: 1.6; }

        @media (max-width: 768px) {
          .forum-hero { padding: 40px 5%; }
          .forum-hero h1 { font-size: 1.8rem; }
          .forum-hero p { font-size: 1rem; }
          .forum-panel { padding: 25px 20px; }
          .feed-item { padding: 20px 15px; gap: 15px; }
          .feed-text { font-size: 1rem; }
        }
      ` }} />

      {/* EN-TÊTE DU FORUM */}
      <header className="forum-hero">
        <h1>Forum de Discussion <span style={{ color: primaryColor, fontWeight: '900' }}>Setra Groupe</span></h1>
        <p>
          Un problème sur votre chantier, une question sur un forage ou besoin d’un avis technique au Mali ? 
          Posez vos questions et échangez librement avec notre communauté et nos experts.
        </p>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="forum-container">
        
        {/* FORMULAIRE DE PUBLICATION */}
        <section className="forum-panel" aria-label="Poser une question">
          <h2 className="form-title">Créer une nouvelle publication</h2>
          
          <form onSubmit={handlePostMessage}>
            <div className="input-group">
              <div className="field-box">
                <label htmlFor="username">Votre nom ou Entreprise *</label>
                <input 
                  id="username" 
                  type="text" 
                  className="forum-input" 
                  placeholder="Ex: Alou Traoré" 
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)} 
                  required 
                />
              </div>
              <div className="field-box">
                <label htmlFor="topic">Thématique principale</label>
                <input 
                  id="topic" 
                  type="text" 
                  className="forum-input" 
                  value="BTP, Forage & Génie Civil" 
                  disabled 
                  style={{ color: primaryColor, background: '#1a1a22', cursor: 'not-allowed', fontWeight: '700' }} 
                />
              </div>
            </div>

            <div className="field-box" style={{ marginBottom: '25px' }}>
              <label htmlFor="message">Votre question ou remarque *</label>
              <textarea 
                id="message" 
                rows={4} 
                className="forum-input" 
                placeholder="Décrivez précisément votre problématique technique..." 
                value={userMessage} 
                onChange={(e) => setUserMessage(e.target.value)} 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Publier sur le forum</button>
          </form>
        </section>

        {/* FIL DES DISCUSSIONS */}
        <section aria-label="Discussions récentes">
          <h2 className="feed-title">Discussions récentes ({discussions.length})</h2>
          
          <div className="feed-container" role="log" aria-live="polite">
            {discussions.map((msg, index) => (
              <div key={index} className="feed-item">
                {/* Avatar automatique basé sur l'initiale du nom */}
                <div className="user-avatar" aria-hidden="true">
                  {msg.name.charAt(0)}
                </div>
                <div className="feed-main">
                  <div className="feed-meta">
                    <span className="feed-user">{msg.name}</span>
                    <span className="feed-date">{msg.date}</span>
                  </div>
                  <p className="feed-text">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}