const https = require('https');
const fs = require('fs');
const path = require('path');

// Categorias de imagens
const images = {
  // Imagens de pagamento
  payment: {
    'hotmart.png': 'https://cdn.iconscout.com/icon/free/png-256/free-hotmart-3446636-2879393.png',
    'pix.png': 'https://logospng.org/download/pix/logo-pix-icone-512.png',
    'visa.png': 'https://cdn.iconscout.com/icon/free/png-256/free-visa-3-226460.png',
    'mastercard.png': 'https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3-226462.png',
    'amex.png': 'https://cdn.iconscout.com/icon/free/png-256/free-american-express-3-226461.png',
    'elo.png': 'https://cdn.iconscout.com/icon/free/png-256/free-elo-credit-card-payment-bank-transaction-38846.png',
    'boleto.png': 'https://cdn.iconscout.com/icon/premium/png-256-thumb/barcode-2080057-1756855.png',
    'paypal.png': 'https://cdn.iconscout.com/icon/free/png-256/free-paypal-54-675727.png'
  },
  // Imagens de treinos
  training: {
    'identificacao-barriga.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    'avaliacao-diafragma.jpg': 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
    'ativacao-transverso.jpg': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
  },
  // Imagens de transformação
  transformation: {
    'antes-1.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    'depois-1.jpg': 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
    'antes-2.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    'depois-2.jpg': 'https://images.unsplash.com/photo-1518611012118-696072aa579a'
  },
  // Imagens de perfil e sobre
  profile: {
    'veve-profile.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    'logo-vevefit.png': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
  }
};

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
};

// Função para criar diretório se não existir
const createDirIfNotExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Função para baixar uma imagem
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const options = { headers };
    
    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', (err) => {
            console.error(`Erro ao salvar ${filepath}:`, err);
            reject(err);
          })
          .on('finish', () => {
            console.log(`Imagem ${filepath} baixada com sucesso!`);
            resolve();
          });
      } else {
        console.error(`Erro ao baixar ${filepath}: Status ${response.statusCode}`);
        reject(new Error(`Status ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.error(`Erro ao baixar ${filepath}:`, err);
      reject(err);
    });
  });
};

// Função principal para baixar todas as imagens
const downloadAllImages = async () => {
  const baseDir = path.join(__dirname, 'src', 'assets', 'images');
  
  // Criar diretório base se não existir
  createDirIfNotExists(baseDir);
  
  // Iterar sobre cada categoria
  for (const [category, categoryImages] of Object.entries(images)) {
    const categoryDir = path.join(baseDir, category);
    createDirIfNotExists(categoryDir);
    
    // Baixar imagens da categoria
    for (const [filename, url] of Object.entries(categoryImages)) {
      const filepath = path.join(categoryDir, filename);
      try {
        await downloadImage(url, filepath);
      } catch (error) {
        console.error(`Falha ao baixar ${filename}:`, error);
      }
    }
  }
};

// Executar o download
downloadAllImages().then(() => {
  console.log('Download de imagens concluído!');
}).catch((error) => {
  console.error('Erro durante o download das imagens:', error);
}); 