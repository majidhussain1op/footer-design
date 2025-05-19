import React from 'react'
import { SignInButton } from '@clerk/nextjs'

const SignIn = () => {
  return (
    <SignInButton mode='modal'>
      <button className='text-sm font-semibold hover:text-darkColor 
    hover:cursor-pointer hoverEffect'>
      Login
      </button>
      
    </SignInButton>
  )
}

export default SignIn
