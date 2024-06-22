import jwt from 'jsonwebtoken'

export const Authorization = async(req, res, next) => {
  try 
  {
      const { token } = req.query
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      /**
       * Se pasa el token al próximo middleware
       */
      req.decoded = decoded
      next()//pasar a la ruta correspondiente
  } 
  catch (error) 
  {
      res.status(401).render("home")
  }
}
