import pg from 'pg'
import dotenv from 'dotenv'

const { Pool } = pg

dotenv.config()

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
}

const pool = new Pool(config)

export const insertProduct = async (product) => {
  const { tienda, nombre, precio, imgURL: image, URLproducto: url } = product
  try {
    const query = 'INSERT INTO products (id_tienda, name, price, image, url ) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (name, url) DO NOTHING'
    await pool.query(query, [tienda, nombre, precio, image, url])
    await console.log('insertado ' + nombre)
  } catch (error) {
    console.log(error)
  }
}
