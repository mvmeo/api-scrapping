import getAccesorios from './categorias/accesorios.js'
import getIndumentaria from './categorias/indumentaria.js'
import getBicicletas from './categorias/bicicletas.js'
import getManteniemiento from './categorias/mantenimiento.js'

const getAllCrossmountain = async () => {
  await getAccesorios()
  await getIndumentaria()
  await getBicicletas()
  await getManteniemiento()
}

export default getAllCrossmountain
