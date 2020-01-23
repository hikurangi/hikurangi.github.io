echo 'Building...\n' && \
NODE_ENV='production' npm run build && \
echo '\nCreating CNAME record...\n' && \
echo 'hikurangi.co' > build/CNAME