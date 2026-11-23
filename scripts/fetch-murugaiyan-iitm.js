const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const candidates = [
  'https://home.iitm.ac.in/murugaiyan/assets/img/portrait.jpg',
  'https://sie.iitm.ac.in/images/people/murugaiyan-amirthalingam.jpg',
  'https://www.iitm.ac.in/sites/default/files/styles/profile_image/public/murugaiyan-amirthalingam.jpg',
  'https://www.iitm.ac.in/sites/default/files/murugaiyan.jpg',
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, buf: Buffer.concat(chunks), type: res.headers['content-type'] }));
    }).on('error', reject);
  });
}

(async () => {
  const out = path.join(__dirname, '../src/Assets/About/sie-murugaiyan.jpg');
  for (const url of candidates) {
    try {
      const { status, buf, type } = await fetch(url);
      if (status === 200 && buf.length > 5000 && (type || '').includes('image')) {
        fs.writeFileSync(out, buf);
        console.log('OK', url, buf.length);
        return;
      }
      console.log('skip', url, status, buf.length, type);
    } catch (e) {
      console.log('fail', url, e.message);
    }
  }
})();