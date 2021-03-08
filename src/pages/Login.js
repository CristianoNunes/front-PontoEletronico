import React from 'react'
import FormLogin from '../components/FormLogin'

export default function Login() {
  return (
    <div className="mainLogin">
      <div className="textLogin">
        <h1>Seja bem-vindo</h1>
        <h2>Para continuar por favor faça login</h2>
        <h5>Logotipo</h5>
      </div>
      <FormLogin />
    </div>
  )
}
