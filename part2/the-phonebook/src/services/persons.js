import axios from "axios";
// const url = 'https://phonebook-backend-mohamed-v2.onrender.com/api/persons'
const url = 'http://localhost:3002/api/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data);
}

const create = (newObject) => {
    const request = axios.post(url, newObject)
    return request.then(response => response.data)
}

const update = (id, changeObject) => {
    const request = axios.put(`${url}/${id}`, changeObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.data)
}

export default {getAll, create, update, remove}