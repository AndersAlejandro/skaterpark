import * as db from '../db/db.js'

export const getSkaters = async () => {
  const text = "SELECT * FROM skaters"
  const result = await db.query(text)

  return result
}

export const getSkater = async(data) => {
  const {email} = data
  const text = "SELECT * FROM skaters WHERE email = $1"
  const values = [email]

  const result = await db.query(text, values)
  return result
}

export const createSkater = async (data) => {
  const { email, nombre, password, anos_experiencia, especialidad, foto } = data
  const text = "INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, $7)"
  const values = [
    email,
    nombre,
    password,
    anos_experiencia,
    especialidad, 
    foto,
    false
  ]

  const result = await db.query(text, values)
  return result
}

export const updateSkater = async (data) => {
  const { email, nombre, password, anos_experiencia, especialidad, estado } = data

  const text = "UPDATE skaters SET nombre = $1, password = $2, anos_experiencia = $3, especialidad = $4, estado = $5 WHERE email = $6 RETURNING *"
  const values = [nombre, password, anos_experiencia, especialidad, estado, email]

  const result = await db.query(text, values)

  return result
}

export const deleteStaker = async (data) => {
  const {email} = data

  const text = 'DELETE FROM skaters WHERE email = $1'
  const values = [email]

  const result = await db.query(text, values)

  return result
}

export const updateSkaterStatus = async (data) => {
  const { estado, id } = data
  const text = 'UPDATE skaters SET estado = $1 WHERE id = $2'
  const values = [estado, id]

  const result = await db.query(text, values)
  return result
}