import { Buffer } from 'buffer'

export const encrypter = (data) => {

    let buff = new Buffer(data);
    return buff.toString('base64');
}