import axios from 'axios'
import config from './config/index'

// BASE URL TO MAKE REQUESTS TO THE MOVIE DATABASE
const instance = axios.create({
    baseURL: config.baseURL
})

export default instance;