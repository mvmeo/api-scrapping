import * as cheerio from 'cheerio'
import SELECTORS from '../../utils/selectors.js'
import dataTiendas from '../../utils/data-tiendas.js'
import { insertProduct } from '../../utils/postgres.js'

export const scrape = (html, tienda) => {
  const $ = cheerio.load(html)
  $(SELECTORS.decathlon.producto).each((index, el) => {
    const rawNombre = $(el).find(SELECTORS.decathlon.nombre).text()
    const nombre = rawNombre.replace(/[\n\t]+/g, '').trim()
    const rawPrecio = $(el).find(SELECTORS.decathlon.precio).text()
    let precio = rawPrecio.replace(/[\n\t]+/g, '').replace('$', '').replace('.', '').replace(',', '').trim()
    precio = parseInt(precio)
    const imgURL = 'https:' + $(el)
      .find(SELECTORS.decathlon.imagen.selector)
      .attr(SELECTORS.decathlon.imagen.atributo)
    const URLproducto = dataTiendas.decathlon.web + $(el)
      .find(SELECTORS.decathlon.URL.selector)
      .attr(SELECTORS.decathlon.URL.atributo)

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
