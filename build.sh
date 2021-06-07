echo 'Building...\n' && \
NODE_ENV='production' npm run build && \
echo '\nSupplying assets...\n' && \
cp ./assets/* ./build/ &&
echo '\nCreating CNAME record...\n' && \
echo 'hikurangi.co' > build/CNAME