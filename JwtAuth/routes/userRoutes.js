import express from 'express'
import UserController from '../controllers/userController.js'

//middleware
import { jwtVerify } from '../middlewares/authMiddleware.js'

const router = express.Router()

// Route level middleware - to Protect routes
router.use('/change-password', jwtVerify)

// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/send-reset-password-email', UserController.sendPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.resetUserPassword)

//Protected Routes
router.post('/change-password', UserController.changeUserPassword)

export default router
