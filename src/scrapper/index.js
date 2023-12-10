import getAllcincoNorte from './tiendas/cincoNorte/index.js'
import getAllCrossmountain from './tiendas/crossmountain/index.js'
import getAllDecathlon from './tiendas/decathlon/index.js'

const getAll = async () => {
  await getAllcincoNorte()
  await getAllCrossmountain()
  await getAllDecathlon()
}

getAll()
