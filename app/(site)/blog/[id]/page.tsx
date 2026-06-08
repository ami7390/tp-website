'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Base de données fictive complète et synchronisée (4 articles)
const blogPosts = [
  {
    id: 'choisir-fondations-sol-argileux-bamako',
    title: 'Comment choisir les bonnes fondations pour un sol argileux à Bamako ?',
    excerpt: 'Les sols de Bamako cachent parfois des pièges pour les constructions. Découvrez l’importance d’une étude géotechnique réussie.',
    fullContent: `La construction à Bamako présente des défis uniques, notamment à cause de la nature argileuse de certains quartiers (comme à Sotuba ou Yirimadio). Un sol argileux est un sol "gonflant" : il prend du volume en saison des pluies et se rétracte violemment pendant la saison sèche. 
    
    Pour éviter les fissures structurelles ou les affaissements, nos ingénieurs préconisent systématiquement une étude géotechnique avant tout coulage. Chez Setra Groupe, nous adaptons nos plans en concevant des radiers généraux ou des semelles filantes renforcées pour stabiliser l'ouvrage. La profondeur de l'ancrage est rigoureusement calculée pour atteindre le "bon sol", garantissant ainsi un bâtiment qui ne bougera pas pendant des décennies.`,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
    date: '04 Juin 2026',
    category: 'Technique',
    author: {
      name: 'Ing. Brehima Diawara',
      role: 'Directeur des Opérations Géotechniques',
      bio: 'Diplômé en Génie Civil avec plus de 12 ans d’expérience dans la supervision de chantiers résidentiels et industriels au Mali.'
    },
    seoKeywords: ['Fondations Bamako', 'Sol argileux Mali', 'Génie civil Setra Groupe', 'Étude géotechnique']
  },
  {
    id: 'secrets-coulage-dalle-beton-sans-fissures',
    title: 'Les secrets d’un coulage de béton armé sans fissures',
    excerpt: 'Le contrôle de la température et le dosage du ciment sont cruciaux sous le climat malien. Suivez le guide de nos experts.',
    fullContent: `Sous le climat sahélien du Mali, le coulage d'une dalles en béton armé demande une maîtrise parfaite des températures et de l'évaporation. Si le béton sèche trop vite à cause de la chaleur, des micro-fissures apparaissent, fragilisant la structure supérieure.
    
    Nos équipes veillent à un dosage rigoureux du ciment de haute qualité et à l'utilisation d'adjuvants adaptés. De plus, la cure du béton (l'arrosage régulier de la dalle pendant les jours suivant le coulage) est une étape non négociable chez Setra Construction pour garantir la solidité finale de vos concessions ou immeubles de rapport.`,
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop',
    date: '15 Mai 2026',
    category: 'Conseils',
    author: {
      name: 'Ing. Brehima Diawara',
      role: 'Directeur des Opérations Géotechniques',
      bio: 'Expert en contrôle de conformité des matériaux et structures en béton armé soumis aux fortes chaleurs.'
    },
    seoKeywords: ['Coulage béton Bamako', 'Béton armé sans fissure', 'Setra Groupe', 'Construction Mali']
  },
  {
    id: 'defis-techniques-chantier-forage-industriel',
    title: 'Forage Professionnel au Mali : Comment garantir un grand débit d’eau sans coupure ?',
    excerpt: 'Entreprises, industries ou grands domaines à Bamako : découvrez le prix, les étapes clés et les normes pour un forage réussi et durable.',
    fullContent: `Réaliser un forage industriel ou résidentiel au Mali demande une précision chirurgicale et une connaissance parfaite des nappes phréatiques. Sur notre dernier site, nous avons dû descendre à plus de 120 mètres de profondeur pour traverser le socle rocheux et capter un débit d'eau optimal. 
    
    L'utilisation de nos ateliers de forage hydrauliques modernes permet de livrer les chantiers en un temps record. De plus, la sécurité sanitaire étant notre priorité, chaque forage signé Setra Groupe fait l'objet d'une analyse physico-chimique complète en laboratoire avant l'installation définitive de la pompe (solaire ou électrique).`,
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200&auto=format&fit=crop',
    date: '28 Mai 2026',
    category: 'Forage & Eau',
    author: {
      name: 'Ing. Mohamed Bah',
      role: 'Chef de Projet Hydraulique',
      bio: 'Spécialiste des systèmes de pompage solaire et de la recherche de nappes aquifères profondes en Afrique de l’Ouest.'
    },
    seoKeywords: ['Forage industriel Mali', 'Pompe solaire Bamako', 'Setra Groupe forage', 'Eau potable']
  },
  {
    id: 'installation-infrastructure-reseau-btp-moderne',
    title: 'Précâblage Informatique : Pourquoi planifier Internet et la Fibre avant de couler vos dalles ?',
    excerpt: 'Évitez de casser vos murs après la peinture ! Nos experts expliquent comment l’intégration des gaines télécoms valorise vos bâtiments au Mali.',
    fullContent: `Dans les constructions modernes au Mali, anticiper les besoins en télécoms et réseaux informatiques est devenu crucial. Trop souvent, les propriétaires pensent au câblage Internet une fois les finitions et les peintures terminées, ce qui oblige à installer des goulottes apparentes inesthétiques ou à casser des cloisons.
    
    Planifier l'intégration des gaines techniques, des baies de brassage et le cheminement de la fibre optique dès la phase de gros œuvre valorise immédiatement votre patrimoine immobilier. Qu'il s'agisse de bureaux d'entreprises ou de résidences connectées, Setra Groupe intègre cette expertise IT nativement pour livrer des bâtiments clés en main, intelligents et prêts pour le futur.`,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    date: '10 Mai 2026',
    category: 'Télécom & IT',
    author: {
      name: 'Équipe Technique IT',
      role: 'Département Réseaux & Télécoms',
      bio: 'Spécialistes en ingénierie des infrastructures réseau connectées et intégration de systèmes IT intelligents pour le bâtiment.'
    },
    seoKeywords: ['Précâblage informatique', 'Fibre optique Mali', 'Bâtiment connecté', 'Réseau Télécom BTP']
  }
];

export default function BlogPostDetail() {
  const primaryColor = '#FFCC00'; // Jaune ambré moderne haute visibilité
  const darkBg = '#0b0b0e';       // Noir pur pour contraste maximal (WCAG)
  const cardBg = '#16161c';       // Fond de bloc anthracite contrasté
  const textMuted = '#cbd5e1';    // Gris très clair hautement lisible

  const params = useParams();
  const id = params?.id;

  // Recherche de l'article correspondant à l'ID de l'URL
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: darkBg, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Article introuvable</h2>
        <p style={{ color: textMuted, marginBottom: '30px' }}>L'article que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link href="/blog" style={{ color: primaryColor, fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.1rem' }}>
          ⬅️ Retour au Hub Actualités
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: darkBg, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '100px', color: '#ffffff' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        .post-wrapper { max-width: 860px; margin: 0 auto; padding: 60px 20px; }
        
        .back-btn { display: inline-flex; align-items: center; color: ${primaryColor}; text-decoration: underline; font-weight: bold; margin-bottom: 30px; font-size: 1.05rem; }
        .back-btn:hover, .back-btn:focus { color: #ffffff; outline: none; }
        
        .post-cat { background: #ffffff; color: ${darkBg}; padding: 6px 12px; border-radius: 6px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-bottom: 20px; }
        .main-title { font-size: 2.4rem; font-weight: 900; line-height: 1.3; margin: 0 0 20px 0; color: #ffffff; }
        .meta-info { display: flex; gap: 20px; color: ${textMuted}; font-size: 1rem; margin-bottom: 40px; border-bottom: 1px solid #22222b; padding-bottom: 20px; }
        
        .featured-img { width: 100%; max-height: 460px; object-fit: cover; border-radius: 14px; border: 2px solid #22222b; margin-bottom: 40px; }
        .article-text { font-size: 1.15rem; line-height: 1.8; color: #ffffff; white-space: pre-line; margin-bottom: 50px; }
        
        /* STYLE BLOC EXPERT ACCESSIBLE */
        .expert-card { background: ${cardBg}; border-left: 6px solid ${primaryColor}; padding: 30px; border-radius: 0 14px 14px 0; margin-top: 40px; border-top: 1px solid #22222b; border-right: 1px solid #22222b; border-bottom: 1px solid #22222b; }
        .expert-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
        .expert-avatar { width: 52px; height: 52px; background: ${primaryColor}; color: ${darkBg}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.2rem; text-transform: uppercase; }
        .expert-name { font-size: 1.25rem; font-weight: 800; color: #ffffff; margin: 0; }
        .expert-role { font-size: 0.95rem; color: ${primaryColor}; font-weight: 600; margin: 2px 0 0 0; }
        .expert-bio { color: ${textMuted}; font-size: 1.05rem; line-height: 1.6; margin: 0; }
        
        /* TAGS SEO */
        .seo-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 40px; padding-top: 25px; border-top: 1px solid #22222b; }
        .tag-item { background: #1a1a22; color: ${primaryColor}; padding: 6px 12px; border-radius: 6px; font-size: 0.9rem; font-weight: 700; border: 1px solid #2d2d3d; }

        @media (max-width: 768px) {
          .main-title { font-size: 1.8rem; }
          .post-wrapper { padding: 40px 15px; }
          .article-text { font-size: 1.05rem; }
          .expert-card { padding: 20px; }
        }
      ` }} />

      <div className="post-wrapper">
        
        {/* Fil d'Ariane */}
        <Link href="/blog" className="back-btn">
          ⬅️ Retour au Hub Actualités
        </Link>

        {/* En-tête de l'article */}
        <header>
          <span className="post-cat">{post.category}</span>
          <h1 className="main-title">{post.title}</h1>
          <div className="meta-info">
            <span>📅 {post.date}</span>
            <span>👤 Rédigé par {post.author.name}</span>
          </div>
        </header>

        {/* Image principale */}
        <img src={post.image} alt="" className="featured-img" />

        {/* Corps de l'article */}
        <main>
          <article className="article-text">
            {post.fullContent}
          </article>
        </main>

        {/* Avis de l'expert */}
        <section className="expert-card" aria-label="Avis de l'expert">
          <div className="expert-header">
            <div className="expert-avatar" aria-hidden="true">
              {post.author.name.split(' ').pop()?.[0]}
            </div>
            <div>
              <h2 className="expert-name">L'avis de l'expert : {post.author.name}</h2>
              <p className="expert-role">{post.author.role} — Setra Groupe</p>
            </div>
          </div>
          <p className="expert-bio">
            "{post.author.bio} Pour toute étude technique ou conseil sur vos chantiers au Mali, nos équipes se tiennent à votre disposition."
          </p>
        </section>

        {/* Mots-clés SEO */}
        <div className="seo-tags" aria-label="Mots-clés">
          {post.seoKeywords.map((tag, index) => (
            <span key={index} className="tag-item">#{tag}</span>
          ))}
        </div>
        
      </div>
    </div>
  );
}