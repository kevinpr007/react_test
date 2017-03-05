import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
const dbUrl = 'mongodb://testuser:testpassword@ds111940.mlab.com:11940/react_test'

function validate(data) {
    let errors = {}
    if (data.title === '') errors.title = "can't be empty"
    if (data.cover === '') errors.cover = "can't be empty"
    const isValid = Object.keys(errors).length === 0
    return { errors, isValid }
}

mongodb.MongoClient.connect(dbUrl, function (err, db) {

    app.get('/api/games', (req, res) => {
        //TODO: This is to test background sync
        setTimeout(() => {
            db.collection('games').find({}).toArray((err, games) => {
                res.json({ games })
            })
        }, 2000)
    })

    app.post('/api/games', (req, res) => {
        const { errors, isValid } = validate(req.body)
        if (isValid) {
            const { title, cover } = req.body
            db.collection('games').insert({ title, cover }, (err, result) => {
                if (err) {
                    res.status(500).addListener.json({ errors: { global: "Something went wrong" } })
                }
                else {
                    res.json({ game: result.ops[0] })
                }
            })
        }
        else {
            res.status(400).json({ errors })
        }
    })

    app.use((req, res) => {
        res.status(404).json({
            errors: {
                global: "Still working on it. Please try again later when we implement it."
            }
        })
    })

    app.listen(8080, () => console.log('Server is running on localhost 8080.'))

})
