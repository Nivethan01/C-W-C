const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('./../models/user');
const jwt = require('jsonwebtoken');

// User Signup Route
router.post('/signup', async (req, res) => {
    try {
        // Check if the user already exists by email
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send({
                message: "User already exists",
                success: false
            });
        }

        // Hash the user's password before saving
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;

        // Create and save the new user
        const newUser = new User(req.body);
        await newUser.save();

        res.send({  //created
            message: "User created successfully",
            success: true
        });

    } catch (error) {
        res.send({
            message: "Internal server error",
            success: false
        });
        console.error("Error during signup:", error.message);
    }
});

// User Login Route
router.post('/login', async (req, res) => {
    try {
        // Check if the user exists by email
        const user = await User.findOne({ email: req.body.email }).select('+password'); // Explicitly select password
        if (!user) {
            return res.send({
                message: "Invalid email",
                success: false
            });
        }

        // Compare the provided password with the hashed password
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) {
            return res.send({
                message: "Invalid password",
                success: false
            });
        }

        // Generate a token for the user
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });

        // Respond with the token and user information
        res.send({
            message: user.firstname + " logged in successfully",
            success: true,
            token: token
        });

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
});

module.exports = router;
