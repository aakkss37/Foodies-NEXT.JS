import React from 'react'
import logoImage from '@/assets/logo.png'
import Link from 'next/link'
import classes from './header.module.css'
import Image from 'next/image'

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
                        <Link href={"/meals"}>Meals</Link>
                    </li>
                    <li>
                        <Link href={"/community"}>Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header