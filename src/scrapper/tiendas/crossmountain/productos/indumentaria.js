import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'

import { dataTiendas } from '../../../utils/data-tiendas.js'
import { SELECTORS } from '../../../utils/selectors.js'

export const getIndumentaria = async () => {
  const source = 'https://crossmountain.cl/'

  const URLunisex = dataTiendas.crossmountain.URLS.indumentaria.unisex
  const URLhombre = dataTiendas.crossmountain.URLS.indumentaria.hombre
  const URLmujer = dataTiendas.crossmountain.URLS.indumentaria.mujer
  const URLcascos = dataTiendas.crossmountain.URLS.indumentaria.cascos

  const URLS = URLunisex.concat(URLhombre, URLmujer, URLcascos)

  const indumentariaUnisex = []
  const indumentariaHombre = []
  const indumentariaMujer = []
  const cascos = []

  for (let i = 0; i < URLS.length; i++) {
    console.log('scrappeando indumentaria ' + URLS[i])
    const res = await fetch(URLS[i])
    const html = await res.text()
    const firstPrice = (price) => {
      const Precios = price.split(' ')
      const rawPrecio = Precios[0]
      return rawPrecio
    }
    const $ = cheerio.load(html)
    $(SELECTORS.crossmountain.producto).each((index, el) => {
      const rawNombre = $(el).find(SELECTORS.crossmountain.nombre).text()
      const nombre = rawNombre.replace(/[\n\t]+/g, '')
      const rawPrecio = $(el).find(SELECTORS.crossmountain.precio).text()
      const precio = firstPrice(rawPrecio)
      const imgURL = $(el)
        .find(SELECTORS.crossmountain.imagen.selector)
        .attr(SELECTORS.crossmountain.imagen.atributo)
      const URLproducto =
        source +
        $(el)
          .find(SELECTORS.crossmountain.URL.selector)
          .attr(SELECTORS.crossmountain.URL.atributo)
      switch (i) {
        case 0:
          indumentariaUnisex.push({
            tienda: dataTiendas.crossmountain.nombre,
            nombre,
            precio,
            genero: 'Unisex',
            imgURL,
            URLproducto
          })
          break
        case 1:
          indumentariaHombre.push({
            tienda: dataTiendas.crossmountain.nombre,
            nombre,
            precio,
            genero: 'Hombre',
            imgURL,
            URLproducto
          })
          break
        case 2:
          indumentariaMujer.push({
            tienda: dataTiendas.crossmountain.nombre,
            nombre,
            precio,
            genero: 'Mujer',
            imgURL,
            URLproducto
          })
          break
        case 3:
          cascos.push({
            tienda: dataTiendas.crossmountain.nombre,
            nombre,
            precio,
            imgURL,
            URLproducto
          })
          break
      }
    })
  }

  const indumentariaAll = indumentariaUnisex.concat(
    indumentariaHombre,
    indumentariaMujer,
    cascos
  )

  const data = JSON.stringify(indumentariaAll, null, 2)
  const filePath = path.join(
    process.cwd(),
    './src/db/crossmountain/indumentaria.json'
  )

  await writeFile(filePath, data, 'utf-8')
}

getIndumentaria()
