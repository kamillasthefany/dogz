import React from 'react'

const Error = (mensagem) => {
  console.log('mensagem de erro', mensagem);
  if (!mensagem) return null;

  return (
    <p style={{ color: '#f31', margin: '1rem 0' }}>Error</p>
  )
}

export default Error