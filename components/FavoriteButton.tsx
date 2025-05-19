import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
  return (
    <Link href="/cart" className="relative group">
    {/* Cart Icon */}
    <Heart className="w-6 h-6 text-gray-800 transition-colors duration-200
     group-hover:text-shop_light_green" />
     {/* Item Count Badge */}
     <span className="absolute -top-2 -right-2 bg-shop_dark_green 
     text-green text-[10px] font-semibold w-5 h-5 rounded-full 
     flex items-center justify-center ring-2 ring-white 
     shadow-md group-hover:scale-110 transition-transform duration-200">
      0
    </span>
  </Link>
  )
}

export default FavoriteButton
