import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 75220c89c7a5c0994af2c226400a2dc80950cc067090032f438722073d33536b'
    }
});