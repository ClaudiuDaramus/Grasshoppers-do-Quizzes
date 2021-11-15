const express = require('express')
const graphql = require('express-graphql')
const app = express()

app.use(express.json())

const db = require('./models')
const schema = require('./graphql')
app.get("/", async (req, res) => {
    console.log(await db.User.findAll())
    res.send({})
})

app.post("/graphql", graphql.graphqlHTTP({
    schema,
    graphiql: true,
}))

/* app.post("/add", async (req, res) => {
    const user = db.User.build({
        name: "NewName",
        email: "my@email.com"
    })
    await user.save()
    res.send({})
}) */
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000/")
})