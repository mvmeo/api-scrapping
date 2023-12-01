import puppeteer from 'puppeteer'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { scrape } from '../utils/scrape.js'

import { dataTiendas } from '../../../utils/data-tiendas.js'

export const getManteniemiento = async () => {
  const mantenimiento = []

  for (let i = 0; i < dataTiendas.crossmountain.URLS.mantenimiento.length; i++) {
    const browser = await puppeteer.launch({ headless: 'new' })
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(600000)
    await page.goto(dataTiendas.crossmountain.URLS.mantenimiento[i])

    const html = await page.content()

    console.log('scrappeando accesorio ' + dataTiendas.crossmountain.URLS.mantenimiento[i])

    scrape(html, mantenimiento, dataTiendas.crossmountain.nombre)

    console.log('accesorio ' + dataTiendas.crossmountain.URLS.mantenimiento[i] + ' scrapeado')

    await browser.close()
  }

  const data = JSON.stringify(mantenimiento, null, 2)
  const filePath = path.join(process.cwd(), './src/db/crossmountain/mantenimiento.json')

  await writeFile(filePath, data, 'utf-8')
}

getManteniemiento()
