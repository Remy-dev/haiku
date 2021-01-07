import * as axios from 'axios'

const apiMySql = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-type': 'application/json',
    }

})

export default apiMySql;
