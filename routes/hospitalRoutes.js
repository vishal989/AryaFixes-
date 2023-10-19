import express from 'express'
const router = express.Router()
import { createUser, editUser, userLogin, checkUser } from "../controllers/hospital.js"
import { authentication } from "../middlewares/auth.js"


router.post("/create", createUser)
router.post("/login", userLogin)
router.put("/edit", authentication, editUser)
router.get("/check", checkUser)

export default router