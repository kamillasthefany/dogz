import React, { useState } from 'react'

const validacao = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
};

const useForm = (type) => {

  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validar(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (validacao[type] && !validacao[type].regex.test(value)) {
      setError(validacao[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validar(target.value);
    setValue(target.value);

  }

  return {
    value,
    setValue,
    onChange,
    error,
    validar: () => validar(value),
    onBlur: () => validar(value),
  };
}

export default useForm;