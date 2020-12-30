import instance from '../axios';

const UsersApi = {
  //?offset=${offset}&per_page=${limit}&order_by=${orderBy}
  getUsers: (offset, limit, orderBy) => {
    return instance.get(`/api/users`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  getDrivers: () => {
    return instance.get(`/api/drivers`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  updateOrderDriver: (id, idDriver) => {
    return instance.put("/api/add_order_receiver/" + id, {
      received_by: idDriver
    }, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  forDeliveryOrders: () => {
    return instance.get("/api/for_delivery_orders", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  }
}

export default UsersApi