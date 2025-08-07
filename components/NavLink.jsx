import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="flex items-center text-sm leading-normal justify-center gap-9 font-medium" >
        {title}
    </Link>
  )
}

export default NavLink
