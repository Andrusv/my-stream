  
require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    apiKey: process.env.API_KEY,
    baseUrl: process.env.BASE_URL
}

module.exports = { config }