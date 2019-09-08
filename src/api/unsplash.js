import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d95eeef88aa3728715ba82b3a229e203f8507f1a3b53385ea6162c5900e27e5c'
    }   
});