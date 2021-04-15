import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://covid-19-data.p.rapidapi.com',
    headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
	    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
});
export default {
    getData: ({...params}) =>
    instance({
        'method':'GET',
        'url':'/totals',
        'params': {
            'search':'parameter',
        },
    }),
    postData: () =>
    instance({
        'method': 'POST',
        'url':'/api',
        'data': {
            'item1':'data1',
            'item2':'item2'
        },
        'headers': {
            'content-type':'application/json'  // override instance defaults
        }
    })
}