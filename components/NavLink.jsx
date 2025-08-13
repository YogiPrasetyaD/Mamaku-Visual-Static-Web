import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="text-body-sm-14 leading-normal font-medium text-dev-grey" >
        {title}
    </Link>
  )
}

export default NavLink
