import instance from '../axios';

const CarpetApi = {
  getCarpetTypes: () => {
    return instance.get('/api/carpet_types', {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  addCarpetTypes: (type) => {
    return instance.post('/api/carpet_types', type, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  updateCarpterData: (id, data) => {
    return instance.put("/api/carpets/" + id, data, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  getCarpterData: (id, data) => {
    return instance.get("/api/carpets/" + id, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  }
}

export default CarpetApi;