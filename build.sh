echo 'Building...\n' && \
NODE_ENV='production' npm run build && \
echo '\nCreating CNAME record...\n' && \
echo 'hikurangi.co' > build/CNAME && \
echo 'Copying node_modules and package.json...\n' && \
cp -r ./{node_modules,package.json} ./build