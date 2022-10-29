import Axios from 'axios'

const BASE_URL = 'http://api.cup2022.ir/api/v1/'
const axios = Axios.create({
   withCredentials: true,
   headers: {
      'Content-Type': 'application/json',
   },
})

export const apiService = {
   get(endpoint, data) {
      return ajax(endpoint, 'GET', data)
   },
   post(endpoint, data) {
      return ajax(endpoint, 'POST', data)
   },
   put(endpoint, data) {
      return ajax(endpoint, 'PUT', data)
   },
   delete(endpoint, data) {
      return ajax(endpoint, 'DELETE', data)
   },
}

async function ajax(endpoint, method = 'GET', data = null) {
   try {
      const res = await axios({ 
         url: `${BASE_URL}${endpoint}`,
         method,
         data,
         params: method === 'GET' ? data : null,
      })
      return res.data
   } catch (err) {
      console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`, data)
      console.dir(err)
      if (err.response && err.response.status === 401) {
         // Depends on routing startegy - hash or history
         // window.location.assign('/#/login')
         // window.location.assign('/login')
         // router.push('/login')
      }
      throw err
   }
}
