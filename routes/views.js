import { Router } from "express";
import { createSkater, getSkaters, updateSkater, deleteStaker, getSkater } from "../models/skaters.js";
import jwt from 'jsonwebtoken'
import path from 'node:path'
import { Authorization } from "../middlewares/Authorization.js";

const router  = Router()

// Admin
router.get("/admin", async (req, res) => {
  const skaters = await getSkaters()
  res.render("admin", {
    skaters: skaters.rows
  })
})
// Login
router.get("/login", async(req, res) => {
  res.render("login")
})

// registro
router.get("/registro", async (req, res) => {
  res.render("registro")
})

// Datos
router.get("/datos", Authorization, async (req, res) => {
  /**
   * Authorization agregó req.decoded al objeto request
   * Ahora lo usamos sin necesidad de try/catch
   */
  const decoded = req.decoded
  console.log(decoded)
  res.render("datos", {
    skater: decoded
  })
})
// Home
router.get("/", async (req, res) => {
  const skaters = await getSkaters()
  res.render("home", {
    skaters: skaters.rows
  })
})

export { router }



