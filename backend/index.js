const dotenv = require('dotenv')
dotenv.config()

const server = require('./src/server')
const { connectionDatabase } = require('./src/database')

const port = process.env.PORT || 3000
const force = false

server.listen( 
    port, 
    async () => {
        connectionDatabase(force)
        console.log(`Server up in port ${port}`)
    }
)