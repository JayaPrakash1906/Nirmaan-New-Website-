const fs = require('fs');
const https = require('https');
const path = require('path');

const outDir = path.join(__dirname, '../src/Assets/About');

const downloads = [
  { url: 'https://sie.iitm.ac.in/images/people/Nandhini.jpeg', file: 'sie-nandhini.jpeg' },
  { url: 'https://sie.iitm.ac.in/images/people/satya.webp', file: 'sie-satya.webp' },
  { url: 'https://home.iitm.ac.in/murugaiyan/assets/img/portrait.jpg', file: 'sie-murugaiyan.jpg' },
  { url: 'https://sie.iitm.ac.in/images/people/manish-anand.jpg', file: 'sie-manish-anand.jpg' },
  { url: 'https://iimaventures.com/wp-content/uploads/2024/04/32.-Kunal-Upadhyay-2.png', file: 'kunal-upadhyay.png' },
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  for (const { url, file } of downloads) {
    try {
      const buf = await fetch(url);
      const dest = path.join(outDir, file);
      fs.writeFileSync(dest, buf);
      console.log('OK', file, buf.length, 'bytes', buf.slice(0, 4).toString('hex'));
    } catch (e) {
      console.log('FAIL', file, e.message);
    }
  }
})();