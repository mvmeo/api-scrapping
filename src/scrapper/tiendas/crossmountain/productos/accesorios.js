import puppeteer from 'puppeteer'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { scrape } from '../utils/scrape.js'

import { dataTiendas } from '../../../utils/data-tiendas.js'

export const getAccesorios = async () => {
  const accesorios = []

  for (let i = 0; i < dataTiendas.crossmountain.URLS.accesorios.length; i++) {
    const browser = await puppeteer.launch({ headless: 'new' })
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(600000)
    await page.goto(dataTiendas.crossmountain.URLS.accesorios[i])

    const html = await page.content()

    console.log('scrappeando accesorio ' + dataTiendas.crossmountain.URLS.accesorios[i])

    scrape(html, accesorios, dataTiendas.crossmountain.nombre)

    console.log('accesorio ' + dataTiendas.crossmountain.URLS.accesorios[i] + ' scrapeado')

    await browser.close()
  }

  const data = JSON.stringify(accesorios, null, 2)
  const filePath = path.join(process.cwd(), './src/db/crossmountain/accesorios.json')

  await writeFile(filePath, data, 'utf-8')
}

getAccesorios()
