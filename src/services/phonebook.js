import axios from 'axios'

//!Now HTTP GET requests to the address www.serversaddress.com/index.html or www.serversaddress.com will show the React frontend. GET requests to the address www.serversaddress.com/api/notes will be handled by the backend's code.Because of our situation, both the frontend and the backend are at the same address, we can declare baseUrl as a relative URL. This means we can leave out the part declaring the server.
const baseUrl = '/api/persons'

//const baseUrl = 'https://expressbackend11.herokuapp.com/api/persons' bu da olabilir

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObj) =>{
    const request = axios.post(baseUrl,newObj)
    return request.then(response => response.data)
}

const deletePhone = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.status)
}
/*
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }
  
*/
export default { 
    getAll: getAll,
    create: create,
    deletePhone:deletePhone
}
