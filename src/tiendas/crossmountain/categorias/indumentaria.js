import puppeteer from 'puppeteer'
import pLimit from 'p-limit'
import { scrape } from '../utils.js'

import dataTiendas from '../../../utils/data-tiendas.js'

const getIndumentaria = async () => {
  const limit = pLimit(dataTiendas.crossmountain.URLS.indumentaria.length)

  const browser = await puppeteer.launch({ headless: 'new' })

  await Promise.all(
    dataTiendas.crossmountain.URLS.indumentaria.map(url => limit(async () => {
      const page = await browser.newPage()
      await page.goto(url, { waitUntil: 'load', timeout: 0 })
      const html = await page.content()
      scrape(html, dataTiendas.crossmountain.nombre)
    }))
  ).catch(error => console.log(error))

  await browser.close()
}

export default getIndumentaria
