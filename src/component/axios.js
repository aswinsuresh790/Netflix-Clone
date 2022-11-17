import axios from 'axios'
import {baseUrl} from './imagelink'
const  instance=axios.create({
    baseURL:baseUrl,
})
export default  instance