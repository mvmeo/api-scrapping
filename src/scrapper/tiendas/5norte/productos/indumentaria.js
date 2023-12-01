import puppeteer from 'puppeteer'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { scrape } from '../utils/scrape.js'

import { dataTiendas } from '../../../utils/data-tiendas.js'

export const getIndumentaria = async () => {
  const indumentaria = []

  for (let i = 0; i < dataTiendas.cincoNorte.URLS.indumentaria.length; i++) {
    const browser = await puppeteer.launch({ headless: 'new' })
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(600000)
    await page.goto(dataTiendas.cincoNorte.URLS.indumentaria[i])

    const html = await page.content()

    console.log('scrappeando accesorio ' + dataTiendas.cincoNorte.URLS.indumentaria[i])

    scrape(html, indumentaria, dataTiendas.cincoNorte.nombre)

    console.log('accesorio ' + dataTiendas.cincoNorte.URLS.indumentaria[i] + ' scrapeado')

    await browser.close()
  }

  const data = JSON.stringify(indumentaria, null, 2)
  const filePath = path.join(process.cwd(), './src/db/5norte/indumentaria.json')

  await writeFile(filePath, data, 'utf-8')
}

getIndumentaria()
