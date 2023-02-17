import BaseService from './BaseService'
class Service {
  get(url, value) {
    return new Promise((res, rej) => {
      BaseService.get(url, value)
        .then((response) => {
          if (!response || !(response.status >= 200 && response.status <= 300))
            return response
          res(response.data)
          return response.data
        })
        .catch((error) => {
          rej(error)
          return error
        })
    })
  }

  post(url, value) {
    return new Promise((res, rej) => {
      BaseService.post(url, value)
        .then((response) => {
          if (!response || !(response.status >= 200 && response.status <= 300))
            return response
          res(response.data)
          return response.data
        })
        .catch((error) => {
          rej(error)
          return error
        })
    })
  }

  put(url, value) {
    return new Promise((res, rej) => {
      BaseService.put(url, value)
        .then((response) => {
          if (!response) return response
          res(response.data)
          return response.data
        })
        .catch((error) => {
          rej(error)
          return error
        })
    })
  }

  delete(url, value) {
    return new Promise((res, rej) => {
      BaseService.delete(url, value)
        .then((response) => {
          if (!response || !(response.status >= 200 && response.status <= 300))
            return response
          res(response.data)
          return response.data
        })
        .catch((error) => {
          rej(error)
          return error
        })
    })
  }

  patch(url, value) {
    return new Promise((res, rej) => {
      BaseService.patch(url, value)
        .then((response) => {
          if (!response || !(response.status >= 200 && response.status <= 300))
            return response
          res(response.data)
          return response.data
        })
        .catch((error) => {
          rej(error)
          return error
        })
    })
  }
}

export default new Service()
