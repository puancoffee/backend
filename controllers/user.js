const User = require('../models/user')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

module.exports = ({
    register: ((req, res, next) => {
        const {errors, isValid} = validateRegisterInput(req.body)
        if (!isValid) {
            return res
                .status(400)
                .json(errors)
        }
        User
            .findOne({email: req.body.email})
            .then(user => {
                if (user) {
                    return res
                        .status(400)
                        .json({email: "Email already exists"});
                } else {
                    const newUser = new User({name: req.body.name, email: req.body.email, phone: req.body.phone, password: req.body.password})
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) 
                                throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => res.json(user))
                                .catch(err => console.log(err));
                        });
                    })
                }
            })
    }),

    login: ((req, res, next) => {
        const {errors, isValid} = validateLoginInput(req.body);
        // Check validation
        if (!isValid) {
            return res
                .status(400)
                .json(errors);
        }
        const email = req.body.email;
        const password = req.body.password;
        // Find user by email
        User
            .findOne({email})
            .then(user => {
                // Check if user exists
                if (!user) {
                    return res
                        .status(404)
                        .json({emailnotfound: "Email not found"});
                }
                // Check password
                bcrypt
                    .compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            // User matched Create JWT Payload
                            const payload = {
                                id: user.id,
                                name: user.name
                            };
                            // Sign token
                            jwt.sign(payload, process.env.SECRET_OR_KEY, {
                                expiresIn: 31556926 // 1 year in seconds
                            }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token,
                                    id: user.id
                                });
                            });
                        } else {
                            return res
                                .status(400)
                                .json({passwordincorrect: "Password incorrect"})
                        }
                    })
            })
    })
})