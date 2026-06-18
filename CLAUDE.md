# Portfolio — Victor Feneis

## URLs
- Production : https://portfolio-two-eta-ft7cgfp6w1.vercel.app
- Local dev : http://localhost:3000
- GitHub : https://github.com/bfkcd792vs-del/Portfolio

## Stack
- Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Spline (3D)
- Déploiement : Vercel (auto-deploy sur push GitHub)

## Fichiers clés
- `src/data/config.ts` — infos personnelles (email, LinkedIn, nom)
- `src/data/constants.ts` — expériences et compétences
- `src/data/projects.tsx` — projets (vide pour l'instant, à remplir)
- `src/locales/index.ts` — toutes les traductions FR/EN
- `src/contexts/language.tsx` — contexte de langue (défaut : FR)
- `src/components/sections/hero.tsx` — page d'accueil
- `src/components/header/header.tsx` — header avec switcher FR/EN
- `public/assets/CV_Victor_Feneis_FR.pdf` — CV français
- `public/assets/CV_Victor_Feneis_EN.pdf` — CV anglais

## Ce qui est fait
- Switcher FR/EN en haut à droite (tout le site se traduit)
- Boutons CV (téléchargement direct FR) et Resume (EN) dans le hero
- Section expérience avec Chanel, Stellantis, Garage Feneis
- Section compétences avec le clavier 3D Spline
- Formulaire de contact
- Suppression : menu hamburger, GitHub stars, blog, newsletter, chat Discord-like
- Git email configuré : victor.feneis@gmail.com

## À faire
- Ajouter les projets personnels dans `src/data/projects.tsx`
- (optionnel) Ajouter une section formation/éducation

## Commandes utiles
```bash
npm run dev       # lancer en local
git add -A && git commit -m "..." && git push   # push → Vercel redéploie auto
```
