import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String },
    profileURL: { type: String, default: "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" },
    email: { type: String },
    healthStatus: [{ type: String }]
})


export const User = mongoose.model("User", userSchema)