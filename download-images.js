const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'hotmart.png': 'https://cdn.iconscout.com/icon/free/png-256/free-hotmart-3446636-2879393.png',
  'pix.png': 'https://logospng.org/download/pix/logo-pix-icone-512.png',
  'visa.png': 'https://cdn.iconscout.com/icon/free/png-256/free-visa-3-226460.png',
  'mastercard.png': 'https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3-226462.png',
  'amex.png': 'https://cdn.iconscout.com/icon/free/png-256/free-american-express-3-226461.png',
  'elo.png': 'https://cdn.iconscout.com/icon/free/png-256/free-elo-credit-card-payment-bank-transaction-38846.png',
  'boleto.png': 'https://cdn.iconscout.com/icon/premium/png-256-thumb/barcode-2080057-1756855.png',
  'paypal.png': 'https://cdn.iconscout.com/icon/free/png-256/free-paypal-54-675727.png'
};

const targetDir = path.join(__dirname, 'src', 'assets', 'images', 'payment');

// Criar diretório se não existir
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
};

Object.entries(images).forEach(([filename, url]) => {
  const filepath = path.join(targetDir, filename);
  
  const options = {
    headers: headers
  };
  
  https.get(url, options, (response) => {
    if (response.statusCode === 200) {
      response.pipe(fs.createWriteStream(filepath))
        .on('error', (err) => {
          console.error(`Erro ao salvar ${filename}:`, err);
        })
        .on('finish', () => {
          console.log(`Imagem ${filename} baixada com sucesso!`);
        });
    } else {
      console.error(`Erro ao baixar ${filename}: Status ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Erro ao baixar ${filename}:`, err);
  });
}); 