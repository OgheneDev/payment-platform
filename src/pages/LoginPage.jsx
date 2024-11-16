import React from 'react'
import { SignUpContextProvider } from '../context/LogInContext'
import LoginForm from '../components/LoginForm'
import LoginFooter from '../components/LoginFooter'

const LoginPage = () => {
  return (
    <div>
      <SignUpContextProvider>
        <LoginForm />
      </SignUpContextProvider>
      <LoginFooter />
    </div>
  )
}

export default LoginPage
