import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'
import bcrypt from 'bcrypt'
import transporter from '../config/emailConfig.js'

class UserController {
  static userRegistration = async (req, res) => {
    try {
      const { name, email, password, rePassword, tc } = req.body
      if (name && email && password && rePassword && tc) {
        const user = await User.findOne({ email })

        if (user) {
          throw 'User already exists'
        } else if (password !== rePassword) {
          throw "Password doesn't match"
        } else {
          const hashPassword = await bcrypt.hash(password, 10)

          const doc = new User({
            name,
            email,
            password: hashPassword,
            tc,
          })

          await doc.save()
          res
            .status(201)
            .send({ status: 'success', message: 'Registration successfull' })
        }
      } else {
        throw 'All fields are required'
      }
    } catch (error) {
      res.send({ status: 'failed', message: error })
    }
  }

  static userLogin = async (req, res) => {
    try {
      const { username, password } = req.body

      //try to find the user with that username
      const foundUser = await User.findOne({ name: username })

      //now if there is found user then compare the entered request password with foundUser password
      // don't use === to compare the password
      if (foundUser) {
        const samePassword = await bcrypt.compare(password, foundUser.password)
        if (samePassword) {
          //generate JWT Token
          const token = jwt.sign(
            { userId: foundUser._id },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: '3d',
            }
          )
          res.status(201).send({
            status: 'success',
            token: token,
            message: 'Login successful',
          })
        } else {
          throw 'Username or password not match'
        }
      } else {
        throw 'User not found'
      }
    } catch (error) {
      res.send({ status: 'failed', message: error })
    }
  }

  static changeUserPassword = async (req, res) => {
    try {
      const { password, confirmationPassword } = req.body

      if (password && confirmationPassword) {
        if (password.trim() === confirmationPassword.trim()) {
          await User.updateOne(
            { _id: req.userId },
            {
              password: await bcrypt.hash(password, 10),
            }
          )
          res
            .status(201)
            .send({ status: 'success', message: 'Password reset completed' })
        } else {
          throw "Passwords don't match"
        }
      } else {
        throw 'All fields are required'
      }
    } catch (error) {
      res.send({ status: 'failed', message: error })
    }
  }

  static sendPasswordResetEmail = async (req, res) => {
    try {
      const { email } = req.body

      if (email) {
        //find the user from DB
        const foundUser = await User.findOne({ email })
        if (foundUser) {
          //create token
          const secret_key = foundUser._id + process.env.JWT_SECRET_KEY
          const token = jwt.sign({ userId: foundUser._id }, secret_key, {
            expiresIn: '5m',
          })

          //create link to send as email for user to reset the password
          const link = `http://localhost:8000/api/user/reset-password/${foundUser._id}/${token}`

          //send the link as email
          await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: foundUser.email,
            subject: 'Password Reset Link',
            html: `<a href=${link}>Click to reset password</a>`,
          })

          //successful json msg
          res.status(201).send({
            status: 'success',
            message: 'Password reset link sent to email',
            link: link,
          })
        } else {
          throw 'Email not registered'
        }
      } else {
        throw 'Email is required'
      }
    } catch (error) {
      res.send({ status: 'failed', message: error })
    }
  }

  static resetUserPassword = async (req, res) => {
    try {
      const { password, confirmationPassword } = req.body
      const { id: userId, token } = req.params

      if (password && confirmationPassword) {
        if (password === confirmationPassword) {
          //verify jwt
          const secret_key = userId + process.env.JWT_SECRET_KEY
          const payload = jwt.verify(token, secret_key)

          if (payload) {
            //update the password based on payload which contains userId
            await User.findByIdAndUpdate(payload?.userId, {
              password: await bcrypt.hash(password, 10), //hash the password
            })

            res.status(201).send({
              status: 'success',
              message: 'Password successfully reset',
            })
          } else {
            throw 'Invalid Token'
          }
        } else throw "Passwords don't match"
      } else throw 'All fields are required'
    } catch (error) {
      res.send({ status: 'failed', message: error })
    }
  }
}

export default UserController
