import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import MobileMenu from './MobileMenu'
import SignIn from './SignIn'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'


const Header = async() => {
  const user = await currentUser();
  console.log(user, "user")
  return (
    <div className='bg-white py-5'>
     <Container className='flex items-center justify-between text-lightColor'>
      <div className='w-auto md:1/3 flex items-center gap-2.5 justify-start md:gap-0'>
      <MobileMenu/>
      <Logo/>
      </div>
      <HeaderMenu/>
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar/>
          <CartIcon/>
          <FavoriteButton/>
         <ClerkLoaded>
          <SignedIn>
            <UserButton/>
          </SignedIn>
         {!user && <SignIn/>}
         </ClerkLoaded>
        </div>
     </Container>
    </div>
  )
}

export default Header
