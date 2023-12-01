import * as cheerio from 'cheerio'
import { SELECTORS } from '../../../utils/selectors.js'
import { dataTiendas } from '../../../utils/data-tiendas.js'

export const scrape = (html, lista, tienda) => {
  // Usar Cheerio para analizar el HTML
  const $ = cheerio.load(html)
  $(SELECTORS.crossmountain.producto).each((index, el) => {
    const rawNombre = $(el).find(SELECTORS.crossmountain.nombre).text()
    const nombre = rawNombre.replace(/[\n\t]+/g, '').trim()
    const rawPrecio = $(el).find(SELECTORS.crossmountain.precio).text()
    const precio = rawPrecio.replace(/[\n\t]+/g, '').trim()
    const imgURL = $(el)
      .find(SELECTORS.crossmountain.imagen.selector)
      .attr(SELECTORS.crossmountain.imagen.atributo)
    const URLproducto = dataTiendas.cincoNorte.web + $(el)
      .find(SELECTORS.crossmountain.URL.selector)
      .attr(SELECTORS.crossmountain.URL.atributo)

    const data = {
      tienda,
      nombre,
      precio,
      imgURL,
      URLproducto
    }

    lista.push(data)
  })
  return lista
}
