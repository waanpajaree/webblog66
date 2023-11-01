const { where } = require('sequelize')
const{Lipstick} = require('../models')

module.exports = {
    //get all lipstick
    async index(req, res) {
        try {
            const lipsticks = await Lipstick.findAll()
            res.send(lipsticks)
        } catch (err) {
            res.status(500).send({
                error: 'the lipstick information was incorrect'
            })
        }
    },


    // create lipstick
    async create(req, res) {
        try {
            const lipstick = await Lipstick.create(req.body)
            res.send(lipstick.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create lipstick incorrect'
            })
        }
    },

    // edit lipstick, suspend, active
    async put(req, res) {
        try {
            await Lipstick.update(req.body, {
                where: {
                    id: req.params.lipstickId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update lipstick incorrect'
            })
        }
    },

    // delete lipstick
    async delete(req, res) {
        try {
            const lipstick = await Lipstick.findOne({
                where: {
                    id: req.params.lipstickId
                }
            })
            if (!lipstick) {
                return res.status(403).send({
                    error: 'The lipstick information was incorrect'
                })
            }
            await lipstick.destroy()
            res.send(lipstick)
        } catch (err) {
            res.status(500).send({
                error: 'The lipstick information was incorrect'
            })
        }
    },

    // get lipstick by id
    async show(req, res) {
        try {
            const lipstick = await Lipstick.findByPk(req.params.lipstickId)
            res.send(lipstick)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
    // async show(req, res) {
    //     try {
    //         const lipstick = await Lipstick.findOne({
    //             where: {
    //                 id: req.params.lipsticksId
    //             }
    //         })
    //         if (!lipstick) {
    //             return res.status(403).send({
    //                 error: 'The lipstick id is not found'
    //             })
    //         }
    //         res.send(lipstick)
    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The lipstick information was incorrect'
    //         })
    //     }
    // },

}