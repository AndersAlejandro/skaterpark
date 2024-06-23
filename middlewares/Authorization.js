import jwt from 'jsonwebtoken'

export const Authorization = async (req, res, next) => {
  try {
    const { token } = req.query
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.decoded = decoded
    next()
  }
  catch (error) {
    res.status(401).render("home")
  }
}
