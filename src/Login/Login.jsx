import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { value, name } = e.target;

    const newForm = {
      ...form,
      [name]: value,
    }
    setForm(newForm);
  };

  return (
    <>
      <div style={{fontFamily: "monospace"}}>Welcome back</div>
      <label className='label-form'>
        Email:
        <input 
          type="email" 
          name='email'
          onChange={handleChange}
          value={form.email}
        />
      </label>
      <label className='label-form'>
        Password:
        <input 
          type="password" 
          name='password'
          onChange={handleChange}
          value={form.password}
        />
      </label>
    </>
  )
}

export default Login