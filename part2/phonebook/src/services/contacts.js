import axios from "axios";

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => (response.data))
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const update = (id, updatedNumber) => {
    const request = axios.patch(`${baseUrl}/${id}`, { number: updatedNumber })
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}
 
export default { getAll, create, update, remove }