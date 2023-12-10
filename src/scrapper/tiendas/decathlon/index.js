import getAccesorios from './categorias/accesorios.js'
import getBicicletas from './categorias/bicicletas.js'
import getIndumentaria from './categorias/indumentaria.js'

const getAllDecathlon = async () => {
  await getAccesorios()
  await getBicicletas()
  await getIndumentaria()
}

export default getAllDecathlon
