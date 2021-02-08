const express = require('express')
const router = express.Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken');
const config = require('../config/index')

router.post('/login', function (req, res) {
    const { email, password } = req.body
    if (!email) {
        return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Please fill email!' }] })
    }
    if (!password) {
        return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Please fill password!' }] })
    }
    User.findOne({ email }, function (err, foundUser) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Something went wrong!' }] })
        }
        if (!foundUser) {
            return res.status(422).send({ errors: [{ title: 'User Error', detail: 'User is not exist!' }] })
        }
        if (!foundUser.hasSamePassword(password)) {
            return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Incorrect password!' }] })
        }
        const token = jwt.sign({
            userid: foundUser.id,
            username: foundUser.username
        }, config.SECRET, { expiresIn: '1h' });

        return res.json(token)
    })
})

router.post('/register', function (req, res) {
    const { username, email, password, confirmPassword } = req.body
    // 上と下は同じ意味
    // const username = req.body.username
    // const email = req.body.email
    // const password = req.body.password
    // const confirmPassword = req.body.confirmPassword

    if (!username) {
        return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Please fill username!' }] })
    }
    if (!email) {
        return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Please fill email!' }] })
    }
    if (!password) {
        return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Please fill password!' }] })
    }
    if (password !== confirmPassword) {
        return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Please check passwords!' }] })
    }
    User.findOne({ email }, function (err, foundUser) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Something went wrong!' }] })
        }
        if (foundUser) {
            return res.status(422).send({ errors: [{ title: 'User Error', detail: 'User allredy exist!' }] })
        }

        const user = new User({ username, email, password })
        user.save(function (err) {
            if (err) {
                return res.status(422).send({ errors: [{ title: 'User Error', detail: 'Something went wrong!' }] })
            }
            return res.json({ "registerd": true })
        })
    })
})

module.exports = router