
const axios = require('axios');
const cheerio = require('cheerio');

const urls = [
  'https://www.bcnanimacio.com/',
  'https://www.bcnanimacio.com/es/'
];

async function scrape() {
  for (const url of urls) {
    try {
      console.log(`\n--- Scraping ${url} ---`);
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const title = $('title').text();
      const heroTitle = $('h1').text().trim().replace(/\s+/g, ' ');
      const heroSubtitle = $('.elementor-widget-heading h2').first().text().trim() || $('p').first().text().trim();
      const address = $('footer').text().match(/Passeig.*Terrassa/i)?.[0] || 'Not found';
      const phone = $('a[href^="tel:"]').first().text().trim();
      const email = $('a[href^="mailto:"]').first().text().trim();

      console.log('Title:', title);
      console.log('Hero H1:', heroTitle);
      // Intentar buscar textos específicos que vimos en el diseño
      console.log('Phone:', phone);
      console.log('Email:', email);
      
      // Buscar artistas destacados si es posible
      const artists = [];
      $('.elementor-widget-image-box .elementor-image-box-title').each((i, el) => {
        artists.push($(el).text().trim());
      });
      console.log('Featured Artists (sample):', artists.slice(0, 5));

    } catch (error) {
      console.error(`Error scraping ${url}:`, error.message);
    }
  }
}

scrape();
