import puppeteer from 'puppeteer';

export default async function htmlToBase64(html: string, width: number, height: number) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const screenshot = await page.screenshot({ 
      encoding: 'base64', 
      clip: { x: 0, y: 0, width, height }
    });
    await browser.close();
    return screenshot;
  }