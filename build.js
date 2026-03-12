const fs = require('fs');

fs.writeFileSync('config.js', `const CONFIG = {
  supabase_url: "${process.env.SUPABASE_URL}",
  supabase_key: "${process.env.SUPABASE_KEY}",
  igdb_client_id: "${process.env.IGDB_CLIENT_ID}",
  igdb_client_secret: "${process.env.IGDB_CLIENT_SECRET}"
}`);

console.log('config.js generated successfully');