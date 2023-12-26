'use client'
import React from 'react'
import Link from 'next/link'
import classes from './header.module.css'
import { usePathname } from 'next/navigation'

const HeaderNavLink = ({ href, children }) => {
    const path = usePathname()
    return (
        <Link href={href} className={path.startsWith(href) ? classes.active : ''}>{children}</Link>

    )
}

export default HeaderNavLink