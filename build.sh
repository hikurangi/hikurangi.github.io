echo 'Building...' && \
NODE_ENV='production' npm run build && \
echo '\nSupplying assets...' && \
cp ./assets/* ./build/ &&
echo '\nCreating CNAME record...\n' && \
echo 'hikurangi.co' > build/CNAME