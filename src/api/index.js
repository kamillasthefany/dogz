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

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: process.env.REACT_APP_API + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      }
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

export function USER_POST(body) {
  return {
    url: process.env.REACT_APP_API + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    }
  }
}

export function PHOTO_POST(formData, body) {
  return {
    url: process.env.REACT_APP_API + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData,
    }
  }
}