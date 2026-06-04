// Fichier : app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Setra Groupe | BTP & Génie Civil au Mali',
  description: 'Leader dans le BTP et le Génie Civil au Mali. Nous transformons vos visions en structures durables.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" style={{ scrollBehavior: 'smooth' }}>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}