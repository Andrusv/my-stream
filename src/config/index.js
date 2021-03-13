  
require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    apiKey: process.env.API_KEY
}

module.exports = { config }