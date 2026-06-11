import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // On force la conversion en texte propre (on supprime les espaces restants s'il y en a)
  const maintenanceEnv = (process.env.NEXT_PUBLIC_MAINTENANCE_MODE || '').trim();
  const isMaintenanceMode = maintenanceEnv === 'true';
  
  const { pathname } = request.nextUrl;

  // 1. Toujours laisser passer les fichiers système et images
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Si le mode maintenance est STRICTEMENT à true ET qu'on n'est pas déjà sur la page, on redirige
  if (isMaintenanceMode && pathname !== '/maintenance' && !pathname.startsWith('/blog')) {
    const url = request.nextUrl.clone();
    url.pathname = '/maintenance';
    return NextResponse.redirect(url);
  }

  // 3. SI LE MODE EST À FALSE : On s'assure qu'un utilisateur qui tape manuellement /maintenance soit renvoyé vers l'accueil
  if (!isMaintenanceMode && pathname === '/maintenance') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};