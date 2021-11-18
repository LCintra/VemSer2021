import React from 'react'
import { Context } from '../context/AuthContext'
import { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development';

export default function Login() {
  const {authenticated, handleLogin} = useContext(Context);
  return (
    <div>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}
