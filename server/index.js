const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/hello', (req, res) => {
    console.log(req.headers['x-custom-header'])
    res.send()
})

const userList = [{
    account: 'user1',
    id: 1,
    name: 'john',
}, {
    account: 'user2',
    id: 2,
    name: 'josh'
}]
app.post('/login', (req, res) => {
    console.log(req.body)
    let account = req.body.account
    res.json({ id: userList.find(user => user.account == account)?.id })
})

app.get('/user/:id', (req, res) => {
    res.json(userList.find(user => user.id == req.params.id))
})

app.listen(3001, ()=>{
    console.log(`server start at 3001`)
})
