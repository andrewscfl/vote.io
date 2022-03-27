const express = require('express')
const app = express()
app.use(express.json())
const cockroach = require('./utils/cockroach');

const connected = cockroach.verifyConnection()

/* 
findAll(collection) -> rows []
findOne(collection,id) -> row
findWhere(collection,entry(JSON key values of columns)) -> rows []
create(collection, entry(JSON)) -> new ID
update(collection,id,entry(JSON)) -> boolean
delete(collection,id) -> boolean
verifyConnection() -> boolean
*/


connected ? console.log('connected to cockroach') : console.log('there was an error with the database connection')

if (connected) {
    // account creation
    // {username,password,pubKey,2xHashedSSN, firstName, lastName}
    app.post('/create-account', (req, res)=> {
        const {body} = req;
        const {username, password, pubKey, ssn, firstName, lastName} = body;
        console.log(`${username} ${password} ${pubKey}`);
        // verify ssn with list of registered voters
        // create user
        // create account
        // attach pubkey to user
        // return jwt
    })

    // login
    app.post('/login', (req, res)=> {
        const {body} = req;
        const {username, password} = body;
        console.log(`username: ${username} | password: ${password}`)
        // return the jwt

    })

    // votes
    app.get('votes', (req, res)=> {
        const {body} = req;
        const {jwt} = body;
        // return all active votes
    })

    // vote?id
    app.get('/vote', (req, res)=> {
        const {id} = req.query;
        res.send(`${id}`);
        // returns the votes with the specified id
    })

    // create-vote
    app.post('/create-vote', (req, res)=> {
        const {body} = req;
        const {jwt, votingOptions} = body;
        // create entry in votes table
        // return vote id
    })

    // vote
    app.post('/vote', (req, res)=> {
        const {body} = req;
        const {jwt, signedVote} = body;
        // privkey signed vote submitted
        // verify vote with pubkey
        // tally verified votes
    })
}


app.listen(5000, () => {
    console.log('server started on port 5000')
})



