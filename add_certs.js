const fs = require('fs');
const path = require('path');

const certDir = path.join(__dirname, 'public', 'certificates');
const files = fs.readdirSync(certDir);

let arrayStr = `\n\nexport const courseeraCertificates = [\n`;
files.forEach((file, index) => {
  const isPdf = file.toLowerCase().endsWith('.pdf');
  const type = isPdf ? 'pdf' : 'image';
  const name = path.parse(file).name;
  arrayStr += `  { id: ${index + 1}, name: "${name}", src: "/certificates/${file}", type: "${type}" },\n`;
});
arrayStr += `];\n`;

const portfolioPath = path.join(__dirname, 'src', 'content', 'portfolio.ts');
fs.appendFileSync(portfolioPath, arrayStr);
console.log("Appended certificates to portfolio.ts");
