import getAccesorios from './categorias/accesorios.js'
import getIndumentaria from './categorias/indumentaria.js'

const getAllcincoNorte = async () => {
  console.time('CincoNorte')
  await getAccesorios()
  await getIndumentaria()
  console.timeEnd('CincoNorte')
}

export default getAllcincoNorte
