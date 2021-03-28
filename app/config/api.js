import {API_URL} from '../config/baseurl';

import AppConstant from '../assets/globalstyleconstants';

export default function API(variable,method,info){

    var headers = {
        'Authorization': `Bearer ${AppConstant.token}`,
        // "Content-Type": "multipart/form-data",
        'Content-Type': 'application/json',
        "Accept": "application/json"
    }

    var params = (method === 'GET') ?
        {
            method: method,
            headers: headers
        } :
        {
            method: method,
            headers: headers,
            body: info
        }
    console.log('APIrequest : ', API_URL + variable, params)
    return fetch(`${API_URL + variable}`, params).then(resp => resp.json()
        .then(async (res) => {
            var data = {
                status: 200,
                body: res
            }
            console.log('APIresponse : ', JSON.stringify(data))

            return data

        }))
        .catch((e) => {
            console.log(e)
            return { body: { status: 400, Message: 'Sorry, something went wrong, please try again in sometime.' } }
        });
}