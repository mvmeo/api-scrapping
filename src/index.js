import { Hono } from 'hono'
import { cors } from 'hono/cors'

import cincoNorteAccesorios from './db/5norte/accesorios.json'
import cincoNorteIndumentaria from './db/5norte/indumentaria.json'

import crossmountainAccesorios from './db/crossmountain/accesorios.json'
import crossmountainIndumentaria from './db/crossmountain/indumentaria.json'

const app = new Hono()

app.use('/api/*', cors())
app.get('/', (c) => {
  return c.text('API de scrapping de productos de ciclismo en tiendas en linea en Chile.')
})

app.get('/api/5norte', (c) => {
  return c.json({
    tienda: '5norte',
    productos: {
      accesorios: cincoNorteAccesorios,
      indumentaria: cincoNorteIndumentaria
    }
  })
})

app.get('/api/crossmountain', (c) => {
  return c.json({
    tienda: 'Crossmountain',
    productos: {
      accesorios: crossmountainAccesorios,
      indumentaria: crossmountainIndumentaria
    }
  })
})

export default app
