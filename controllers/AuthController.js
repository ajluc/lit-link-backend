const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (
            user &&
            (await middleware.comparePassword(user.passwordDigest, req.body.password))
        ) {
            let payload = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}

const Register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const isDup = await User.findOne({
            where: { email: email}
        })
        if (isDup) {
            res.status(400).send({ status: 'Error', msg: 'Duplicate Email' })
        } else {
            let passwordDigest = await middleware.hashPassword(password)
            const user = await User.create({ firstName, lastName, email, passwordDigest })
            res.send(user)
        }
    } catch (error) {
        throw error
    }
}

const UpdatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body
        const user = await User.findOne({
            where: { email: req.body.email}
        })
        if (
            user &&
            (await middleware.comparePassword(
                user.passwordDigest,
                oldPassword
            ))
        ) {
            let passwordDigest = await middleware.hashPassword(newPassword)
            await user.update({ passwordDigest })
            return res.send({ status: 'Successful', msg: 'Password Updated'})
        }
    } catch (error) {}
}

const CheckSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
}

module.exports = {
    Login,
    Register,
    UpdatePassword,
    CheckSession
}
