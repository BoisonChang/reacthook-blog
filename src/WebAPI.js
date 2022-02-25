import { getAuthToken }  from './utils'

const Base_URL = "https://student-json-api.lidemy.me";


export const getPosts = () => {
    return fetch(`${Base_URL}/posts?_sort=createdAt&_order=desc`)
    .then(res => res.json());
}


export const login = (username, password) => {
    return fetch(`${Base_URL}/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      .then(res => res.json())
}

export const getMe = () => {

    const token = getAuthToken()
    return fetch(`${Base_URL}/me`, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
}