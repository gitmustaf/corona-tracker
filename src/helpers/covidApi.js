import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://covid-19-data.p.rapidapi.com',
    headers: {
        "x-rapidapi-key": "136803089dmshbf3180d6cd94ba6p1ed9e9jsn639b94fbef4e",
	    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
});
export default {
    getData: ({...params}) =>
    instance({
        'method':'GET',
        'url':params.url,
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