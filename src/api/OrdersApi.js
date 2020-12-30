const { default: instance } = require("../axios")

const OrdersApi = {
  getOrders: () => {
    return instance.get('/api/carpet_orders', {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  addOrder: (order) => {
    console.log(order)
    return instance.post('/api/accept_order', order, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  getOrderStatuses: () => {
    return instance.get('/api/order_statuses', {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  getOrdersForDriver: () => {
    return instance.get('/api/for_receiving_orders', {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  addCarptetForOrder: (oId, name) => {
    return instance.post('/api/carpets', {
      order: oId,
      name
    }, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  getOrdersForMeasure: (oId, name) => {
    return instance.get('/api/received_for_measurement', {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  confirmReceive: (id) => {
    return instance.put("/api/receive_order/" + id, null, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  receivedOrders: () => {
    return instance.get("/api/received_orders", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  carpetsPerOrder: (orderId) => {
    return instance.get("/api/order_carpets/" + orderId, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  measureOrder: (id) => {
    return instance.put("/api/measure_order/" + id, null, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  measuredOrders: () => {
    return instance.get("/api/measured_orders", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  checkOrderAsDone: (id, is_packed) => {
    return instance.put("/api/carpets/" + id, {
      is_packed
    }, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  packOrder: (id) => {
    return instance.put("/api/pack_order/" + id, null, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  doneOrders: () => {
    return instance.get("/api/packed_orders", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  updateOrderDeliverer: (id, delivererId) => {
    return instance.put("/api/add_order_deliverer/" + id, {
      delivered_by: delivererId
    }, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  deliverOrder: (id) => {
    return instance.put("/api/deliver_order/" + id, null, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  },
  allOrders: () => {
    return instance.get("/api/orders", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  }
}

export default OrdersApi;