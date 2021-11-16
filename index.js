const express = require('express')
const graphql = require('express-graphql')
const app = express()
require('dotenv/config')
app.use(express.json())

const db = require('./models')
const schema = require('./graphql')

/* app.get("/", async (req, res) => {
    console.log(await db.User.findAll())
    res.send({})
}) */

app.use("/graphql", graphql.graphqlHTTP((req, res, params) => {
    return {
        schema,
        context: {},
        
        graphiql: true,
    }

}))

/* app.post("/add", async (req, res) => {
    const user = db.User.build({
        name: "NewName",
        email: "my@email.com"
    })
    await user.save()
    res.send({})
}) */
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}/`)
})