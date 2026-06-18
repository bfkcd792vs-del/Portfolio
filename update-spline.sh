#!/bin/bash
# Met à jour le keyboard spline → public/assets → GitHub → serveur

cd "$(dirname "$0")"

# Trouve le fichier spline le plus récent à la racine (hors public/)
NEW_SPLINE=$(ls -t *.spline 2>/dev/null | head -1)

if [ -z "$NEW_SPLINE" ]; then
  echo "Aucun fichier .spline trouvé à la racine."
  exit 1
fi

echo "Fichier détecté : $NEW_SPLINE"
cp "$NEW_SPLINE" public/assets/skills-keyboard.spline
echo "Copié dans public/assets/"

git add public/assets/skills-keyboard.spline
git commit -m "Update keyboard spline"
git push origin main
echo "Poussé sur GitHub"

ssh victor@100.82.235.47 'cd ~/Portfolio && git pull origin main' && echo "Serveur mis à jour" || echo "Serveur hors ligne — lance 'cd ~/Portfolio && git pull' manuellement"
