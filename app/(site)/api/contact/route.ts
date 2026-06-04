import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formulaireType, nom, email, telephone, typeProjet, message, localisation } = body;

    // 1. Détermination du sujet de l'email selon le formulaire
    let sujetEmail = "";
    switch (formulaireType) {
      case 'contact':
        sujetEmail = `🏗️ [Contact Global] ${typeProjet} - ${nom}`;
        break;
      case 'rdv_ingenieur':
        sujetEmail = `👷 [RDV INGENIEUR] Demande de ${nom}`;
        break;
      case 'conformite':
        sujetEmail = `📊 [SIMULATION CONFORMITE] Nouveau test effectué`;
        break;
      default:
        sujetEmail = `📝 [Formulaire Setra] Nouveau message de ${nom}`;
    }

    // 2. Configuration stricte et sécurisée pour Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Utilisation du protocole sécurisé SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 3. Vérification de la validité des variables d'environnement
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("❌ ERREUR : Les variables GMAIL_USER ou GMAIL_PASS ne sont pas détectées.");
      return NextResponse.json(
        { success: false, error: "Configuration serveur incomplète." },
        { status: 500 }
      );
    }

    // 4. Construction du contenu de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // L'email est envoyé à ta propre boîte
      replyTo: email || process.env.GMAIL_USER, // Permet de répondre directement au client
      subject: sujetEmail,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #FFD700; padding-bottom: 10px; text-transform: uppercase;">
            Nouveau message - Setra Groupe
          </h2>
          <p><strong>Type de formulaire :</strong> ${formulaireType}</p>
          <p><strong>Nom complet :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone / WhatsApp :</strong> ${telephone}</p>
          ${localisation ? `<p><strong>Localisation / Zone :</strong> ${localisation}</p>` : ''}
          <p><strong>Sujet / Type de projet :</strong> ${typeProjet}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f4f4f4; border-left: 4px solid #1a1a1a;">
            <p style="white-space: pre-wrap; margin: 0;"><strong>Détails du message :</strong><br/><br/>${message}</p>
          </div>
        </div>
      `,
    };

    // 5. Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (error: any) {
    // Affiche l'erreur exacte dans ton terminal pour le débogage
    console.error("❌ Erreur détaillée lors de l'envoi de l'email :", error);
    
    return NextResponse.json(
      { success: false, error: error.message || "Impossible d'envoyer l'email" },
      { status: 500 }
    );
  }
}