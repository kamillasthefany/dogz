export function TOKEN_POST(body) {
  return {
    url: process.env.REACT_APP_API + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    }
  }
}

export function USER_GET(token) {
  return {
    url: process.env.REACT_APP_API + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
}