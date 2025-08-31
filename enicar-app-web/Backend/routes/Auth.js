const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();
router.post('/register', async (req, res) => {
    console.log("Request body:", req.body);

    try {
        const { firstName, lastName, studentNum, email, password } = req.body;

        // 1️⃣ Check all required fields
        if (!firstName || !lastName || !studentNum || !email || !password) {
            console.log("Validation failed: missing fields");
            return res.status(400).json({ message: "Veuillez remplir tous les champs" });
        }

        // 2️⃣ Check if email already exists
        const existingUser = await User.findOne({ email });
        console.log("Existing user:", existingUser);
        if (existingUser) {
            return res.status(400).json({ message: "Email déjà enregistré" });
        }

        // 3️⃣ Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed password:", hashedPassword);

        // 4️⃣ Create new user
        const newUser = new User({
            firstName,
            lastName,
            studentNum,
            email,
            password: hashedPassword,
            role: 'student'
        });

        await newUser.save();
        console.log("User saved successfully:", newUser);

        res.status(201).json({ message: 'Inscription réussie', userId: newUser._id });
    } catch (err) {
        console.error("REGISTER ERROR:", err);
        res.status(500).json({ message: err.message });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Données invalides" });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(400).json({ message: "Données invalides" });

        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token, user: { id: user._id, email: user.email } });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

module.exports = router;