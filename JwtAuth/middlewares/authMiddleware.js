import jwt from 'jsonwebtoken'

export const jwtVerify = (req, res, next) => {
  // 1. first get the authorization from Header
  const { authorization } = req.headers

  try {
    //2. check if there is authorization and it starts with 'Bearer" keyword or not
    if (authorization && authorization.startsWith('Bearer')) {
      //3. split the authorization and get the second splitted value which is our token value
      const token = authorization.split(' ')[1]

      //4. verify the token and pass userId (from payload of token) to req's header for other midleware or routes to see the userId
      const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)

      if (payload) {
        req.userId = payload?.userId

        //complete this middleware
        next()
      } else {
        throw 'Invalid Token'
      }
    } else {
      throw 'Unauthorized User'
    }
  } catch (error) {
    res.send({ status: 'failed', message: error })
  }
}
