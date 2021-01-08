import * as axios from 'axios'

let apiPgsql = {};
console.log('environement ', process.env);
if(process.env.NODE_ENV === 'development'){
    apiPgsql = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        headers: {
            'Content-type': 'application/json',
        }

    })

} else {
    apiPgsql = axios.create({
        baseURL: 'https://j4mdxisbrq-k6hlz33lm7j2o.eu.s5y.io',
        headers: {
            'Content-type': 'application/json'
        }
    })
}
export default apiPgsql;



