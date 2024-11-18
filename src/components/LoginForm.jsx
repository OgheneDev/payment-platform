import React from 'react'
import { Link } from 'react-router-dom'
import { useSignUpContext } from '../context/LogInContext'
import logo from '../assets/images/logo.svg'

const LoginForm = () => {

  const  {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleSubmit
  } = useSignUpContext();

  return (
    <form onSubmit={handleSubmit} className='p-[20px] md:pb-[150px] md:px-[35px] flex flex-col items-start gap-[20px] md:w-[400px] md:mx-auto md:mt-[100px] md:border md:border-gray-300 md:rounded-[15px]'>
      <img src={logo} alt="" className='w-[150px] md:w-[100px] md:mb-[30px] mx-auto' />

      {error && <p className="error-message">{error}</p>} {/* Display error message */}

      <input type="email"
        placeholder='Email'
        className='border rounded-sm pl-[5px] pb-[20px] py-[10px] w-full outline-none'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ borderColor: error ? 'red' : '' }}
        />
      <input 
        type="password" 
        placeholder='Password' 
        className='border rounded-sm pl-[5px] pb-[20px] py-[10px] w-full outline-none'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ borderColor: error ? 'red' : '' }}
        />
      <Link to='/password-reset' className='text-custom-blue font-semibold mb-[10px]'>Forgot password?</Link>
      <button type='submit' className='mx-auto bg-[#003087] text-white py-[10px] rounded-full w-full font-semibold'>
        {isLoading ? 'Processing...' : 'Next'}
      </button>
    </form>
  )
}

export default LoginForm
