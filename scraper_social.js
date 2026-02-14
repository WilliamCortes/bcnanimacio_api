
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.bcnanimacio.com/';

async function scrapeSocial() {
  try {
    console.log(`\n--- Scraping Social Links from ${url} ---`);
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const socialLinks = {
      facebook: '',
      instagram: '',
      linkedin: '',
      youtube: ''
    };

    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (!href) return;

      if (href.includes('facebook.com') && !socialLinks.facebook) {
        socialLinks.facebook = href;
      }
      if (href.includes('instagram.com') && !socialLinks.instagram) {
        socialLinks.instagram = href;
      }
      if (href.includes('linkedin.com') && !socialLinks.linkedin) {
        socialLinks.linkedin = href;
      }
      if (href.includes('youtube.com') && !socialLinks.youtube) {
        socialLinks.youtube = href;
      }
    });

    console.log('Social Links Found:', socialLinks);

  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
  }
}

scrapeSocial();
