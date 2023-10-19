import { User } from "../models/hospital.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createUser = async (req, res) => {
    const { username, password, profileURL, email } = req.body
    const dataStored = await new User({ username, password, profileURL, email })
    dataStored.save()
    res.json(dataStored)
}


export const userLogin = async (req, res) => {
    const { username, password } = req.body
    const check = User.findOne({ username, password })
    if (check) {
        let token = jwt.sign({ username }, process.env.SECRET)
        res.json({ token: token })
    } else {
        res.json({ message: "Please provide the correct credentials" })
    }
}

export const editUser = async (req, res) => {
    const { profileURL } = req.body;
    const { username } = req.headers;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { username },
            { profileURL },
            { new: true }
        );

        if (updatedUser) {
            res.json({ user: updatedUser });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}


export const checkUser = async (req, res) => {
    let getData = await User.find({})
    res.json(getData)
}