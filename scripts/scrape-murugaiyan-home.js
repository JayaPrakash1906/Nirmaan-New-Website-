const https = require('https');
https.get('https://home.iitm.ac.in/murugaiyan/', (r) => {
  let d = '';
  r.on('data', (c) => (d += c));
  r.on('end', () => {
    const matches = [...d.matchAll(/src=["']([^"']+)["']/gi)].map((x) => x[1]);
    console.log(matches.filter((u) => /\.(jpg|jpeg|png|webp)/i.test(u)));
  });
});