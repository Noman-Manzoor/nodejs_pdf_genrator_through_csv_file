const fs = require('fs');
const csv = require('csv-parser');
const puppeteer = require('puppeteer');
const path = require('path');
const { firstPage, otherPage } = require('./template');

async function generatePDF() {
  const results = [];
  fs.createReadStream('./exportlist.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      const browser = await puppeteer.launch();
      console.log(results);
      for (let idx = 0; idx < results.length; idx++) {
        const row = results[idx];

        const page = await browser.newPage();
        const kundennummer = row['Kundennummer'];
        const subfolder = path.join('./pdfs', kundennummer);
        if (!fs.existsSync(subfolder)) {
          fs.mkdirSync(subfolder);
        }
        let html = '';
        if (idx == 0) {
          html = firstPage();
        } else {
          html = otherPage(row);
        }
        await page.setContent(html);
        await page.pdf({
          path: path.join(subfolder, `${kundennummer}.pdf`),
          format: 'A4',
        });
      }
      await browser.close();
    });
}

generatePDF();
