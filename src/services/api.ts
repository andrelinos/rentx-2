import axios from "axios";

const api = axios.create({
    baseURL: 'http:192.168.220.250:3333',
});

export {api};