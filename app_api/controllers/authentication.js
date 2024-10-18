const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('../models/user');
const User = mongoose.model('users');

// const register = (req, res) => {
//     if (!req.body.name || !req.body.email || !req.body.password) {
//         return res
//         .status(400)
//         .json({"message": "All fields required"});
//     }

//     const user = new User();
//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.setPassword(req.body.password);

//     user.save((err) => {
//         if (err) {
//             res
//             .status(400)
//             .json(err);
//         } else {
//         const token = user.generateJwt();
//             res
//             .status(200)
//             .json({token});
//         }
//     })
// };

// const login = async (req, res) => {
//     if (!req.body.email || !req.body.password) {
//         return res
//         .status(400)
//         .json({"message": "All fields required"});
//     }
//     passport.authenticate('local', (err, user, info) => {
//         if (err) {
//             return res
//             .status(404)
//             .json(err);
//         }
//         if (user) {
//             const token = user.generateJwt();
//             res
//             .status(200)
//             .json({token});
//         } else {
//             res
//             .status(401)
//             .json(info);
//         }
//     })(req, res);
// };

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save((err) => {
        if (err) {
            return res.status(400).json(err);
        } else {
            const token = jwt.sign(
                { _id: user._id, email: user.email, name: user.name },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            res.status(200).json({ token });
        }
    });
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ "message": "All fields required" });
    }

    // Check if the user exists and authenticate using passport
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(404).json(err);
        }

        // Generate a token regardless of whether the user is found or not
        const token = jwt.sign(
            { email: req.body.email }, // payload could include email or other relevant info
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Send back the token
        res.status(200).json({ token });
    })(req, res);
};




module.exports = {
register,
login
};