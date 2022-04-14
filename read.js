const axios = require("axios");
const cheerio = require("cheerio");

const fetchTitles = async () => {
 try {
  const response = await axios.get('https://starbucks-dd9f6.web.app/#');

        const html = response.data;

  const $ = cheerio.load(html);

  const titles = [];

  $('li,p').each((_idx, el) => {
   const title = $(el).text()
   titles.push(title)
  });

  return titles;
 } catch (error) {
  throw error;
 }
};

fetchTitles().then((titles) => console.log(titles));