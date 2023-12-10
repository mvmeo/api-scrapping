import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())
app.get('/', (c) => {
  return c.text('API de scrapping de productos de ciclismo en tiendas en linea en Chile.')
})

app.get('/api/5norte', (c) => {
  return c.json({
    tienda: '5norte',
    productos: {
    }
  })
})

app.get('/api/crossmountain', (c) => {
  return c.json({
    tienda: 'Crossmountain',
    productos: {
    }
  })
})

app.get('/api/decathlon', (c) => {
  return c.json({
    tienda: 'Decathlon',
    productos: {
    }
  })
})

export default app
