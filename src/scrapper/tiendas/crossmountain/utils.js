import * as cheerio from 'cheerio'
import SELECTORS from '../../utils/selectors.js'
import dataTiendas from '../../utils/data-tiendas.js'
import { insertProduct } from '../../utils/postgres.js'

export const firstPrice = (precio) => {
  const Precios = precio.split(' ')
  precio = Precios[0]
  return precio
}

export const scrape = (html, tienda) => {
  // Usar Cheerio para analizar el HTML
  const $ = cheerio.load(html)
  $(SELECTORS.crossmountain.producto).each((index, el) => {
    const rawNombre = $(el).find(SELECTORS.crossmountain.nombre).text()
    const nombre = rawNombre.replace(/[\n\t]+/g, '').trim()
    const rawPrecio = $(el).find(SELECTORS.crossmountain.precio).text()
    let precio = rawPrecio.replace(/[\n\t]+/g, '').replace('$', '').replace('.', '').replace(',', '').trim()
    precio = parseInt(precio)
    const imgURL = 'https:' + $(el)
      .find(SELECTORS.crossmountain.imagen.selector)
      .attr(SELECTORS.crossmountain.imagen.atributo)
    const URLproducto = dataTiendas.crossmountain.web + $(el)
      .find(SELECTORS.crossmountain.URL.selector)
      .attr(SELECTORS.crossmountain.URL.atributo)

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
