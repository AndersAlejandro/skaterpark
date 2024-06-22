import express from 'express'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import { engine } from 'express-handlebars'
// importar rutas
import { router as skaters } from './routes/skaters.js'
import { router as views } from './routes/views.js'
import { router as auth } from './routes/auth.js'

// Instancia servidor

const app = express()

// Logger para Servidor
app.use(morgan("dev"))
// middleware para subir archivos
app.use(fileUpload())
// middleware para aceptar json
app.use(express.json())
// Archivos estáticos
app.use(express.static('static'))
// Motor de vistas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// registrar rutas
app.use("/", views)
app.use("/skaters", skaters)
app.use("/auth", auth)

const port = process.env.SERVER_PORT || 3000
app.listen(port, () => { console.log("App escuchando el puerto", port) })