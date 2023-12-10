import * as cheerio from 'cheerio'
import SELECTORS from '../../utils/selectors.js'
import dataTiendas from '../../utils/data-tiendas.js'
import { insertProduct } from '../../utils/postgres.js'

export const scrape = (html, tienda) => {
  // Usar Cheerio para analizar el HTML
  const $ = cheerio.load(html)
  $(SELECTORS.cincoNorte.producto).each((index, el) => {
    const rawNombre = $(el).find(SELECTORS.cincoNorte.nombre).text()
    const nombre = rawNombre.replace(/[\n\t]+/g, '').trim()
    const rawPrecio = $(el).find(SELECTORS.cincoNorte.precio).text()
    let precio = rawPrecio.replace(/[\n\t]+/g, '').replace('$', '').replace('.', '').replace(',', '').trim()
    precio = parseInt(precio)
    const imgURL = 'https:' + $(el)
      .find(SELECTORS.cincoNorte.imagen.selector)
      .attr(SELECTORS.cincoNorte.imagen.atributo)
    const URLproducto = dataTiendas.cincoNorte.web + $(el)
      .find(SELECTORS.cincoNorte.URL.selector)
      .attr(SELECTORS.cincoNorte.URL.atributo)

    const data = {
      tienda,
      nombre,
      precio,
      imgURL,
      URLproducto
    }

    insertProduct(data)
    console.log(nombre + ' insertado')
  })
}
