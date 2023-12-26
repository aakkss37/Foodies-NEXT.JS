import React from 'react'
import logoImage from '@/assets/logo.png'
import Link from 'next/link'
import classes from './header.module.css'
import Image from 'next/image'
import HeaderNavLink from './HeaderNavLink'

const Header = () => {

    return (
        <header className={classes.header}>
            <Link className={classes.logo} href={"/"}>
                <Image src={logoImage} alt='Web-app logo' priority />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <HeaderNavLink href="/meals" >Meals</HeaderNavLink>
                    </li>
                    <li>
                        <HeaderNavLink href="/community" >Community</HeaderNavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header