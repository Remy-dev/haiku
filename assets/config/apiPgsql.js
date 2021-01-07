import * as axios from 'axios'

let apiPgsql = {};

if(process.env === 'development'){
    apiPgsql = axios.create({
        baseURL: 'http://localhost:8000/api',
        headers: {
            'Content-type': 'application/json',
        }

    })

} else {
    apiPgsql = axios.create({
        baseURL: 'https://j4mdxisbrq-k6hlz33lm7j2o.eu.s5y.io/api',
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export default apiPgsql;



