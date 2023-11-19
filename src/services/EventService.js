import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/vivian-xw7/fake_server_1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events') // gets the baseURL and adds /events at the end
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}



