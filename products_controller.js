module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        db.create_product({name, description, price, image_url})
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'Error! Life Support Systems Offline!'})
            console.log(err)
        })
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.read_product({id})
        .then((oneProduct) => res.status(200).send(oneProduct))
        .catch( err => {
            res.status(500).send({errorMessage: 'Error! Life Support Systems Offline!'})
            console.log(err)
        })
    },

    getAll: async (req, res) => {
        const db = req.app.get('db')
        db.read_products()
        .then((allProducts) => res.status(200).send(allProducts))
        .catch( err => {
            res.status(500).send({errorMessage: 'Error! Life Support Systems Offline!'})
            console.log(err)
        })
    },

    update: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {desc} = req.query
        db.update_product({id, desc})
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'Error! Life Support Systems Offline!'})
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product({id})
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'Error! Life Support Systems Offline!'})
            console.log(err)
        })
    }
}