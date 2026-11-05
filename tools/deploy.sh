#!/usr/bin/env bash
# Publica el portafolio en Railway (proyecto `portafolio`, servicio `web`):
# https://johanhdez.up.railway.app
#   tools/deploy.sh
# Compila con Astro, arma una carpeta con dist/ + Caddy (tools/railway/) y la sube con la CLI de Railway.
# Requiere `railway login` y que la carpeta esté vinculada al proyecto (`railway link`, una sola vez).
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
STAGE="$(mktemp -d)"
cp tools/railway/Dockerfile tools/railway/Caddyfile "$STAGE/"
cp -r dist "$STAGE/site"
railway up "$STAGE" --path-as-root --service web --detach
echo "Subido. En 1-2 minutos: https://johanhdez.up.railway.app"
