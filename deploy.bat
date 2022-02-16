set -e 
npm run build
cd .\dist\
git init
git add -A 
git comit -m 'New Deployment'
git push -f git@github.com:Ivcast20/proyecto_cacao_front.git main:gh-pages

cd -