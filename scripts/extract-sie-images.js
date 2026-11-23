const https = require('https');

https.get('https://sie.iitm.ac.in/people', (res) => {
  let html = '';
  res.on('data', (c) => (html += c));
  res.on('end', () => {
    const idx = html.indexOf('Governing Council');
    const chunk = html.slice(idx, idx + 40000);
    const nextImages = [...chunk.matchAll(/\/_next\/image\?url=([^&"]+)/g)].map((m) =>
      decodeURIComponent(m[1])
    );
    const peopleImages = [...chunk.matchAll(/\/images\/people\/[^"\\]+/g)].map((m) => m[0]);
    const httpsImages = [...chunk.matchAll(/https:\/\/[^"\\]+\.(jpg|jpeg|webp|png)/gi)].map((m) => m[0]);
    console.log('next:', [...new Set(nextImages)]);
    console.log('people:', [...new Set(peopleImages)]);
    console.log('https:', [...new Set(httpsImages)].slice(0, 30));
    // Also search full page for council names followed by image within 2000 chars
    for (const name of ['Ashwin', 'Kunal', 'Vishy', 'Raman', 'Prabhu']) {
      const i = html.indexOf(name);
      if (i >= 0) {
        const near = html.slice(i, i + 2500);
        const u = [...near.matchAll(/(https:\/\/[^"\\]+|\/images\/[^"\\]+)/g)].map((m) => m[1]);
        console.log('\n' + name + ':', u.filter((x) => /\.(jpg|jpeg|webp|png)/i.test(x) || x.includes('people')).slice(0, 5));
      }
    }
  });
});