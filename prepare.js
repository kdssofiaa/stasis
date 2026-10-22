// Run once after putting your game in www/index.html.
// Replaces the Google Fonts link with the bundled local font.
const fs = require('fs');
const f = 'www/index.html';
if (!fs.existsSync(f)) { console.error('Put your game at www/index.html first'); process.exit(1); }
let h = fs.readFileSync(f, 'utf8');
h = h.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>\s*/g, '');
if (!h.includes('ChakraPetch-Bold.woff2')) {
  h = h.replace('<style>', '<style>\n@font-face{font-family:"Chakra Petch";font-weight:700;src:url("ChakraPetch-Bold.woff2") format("woff2")}');
}
fs.writeFileSync(f, h);
console.log('OK: font is now bundled offline.');
