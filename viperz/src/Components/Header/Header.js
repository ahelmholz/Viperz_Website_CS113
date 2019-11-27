import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.menu}>
                <li>
                    <a href="/store" >Store</a>
                </li>
                <li>
                    <a href="/overview">Overview</a>
                </li>
                <li>
                    <a href="/media">Media</a>
                </li>
                <li>
                    <a href="/aboutus">About Us</a>
                </li>
            </ul>
            <h1 className={classes.image}>Logo</h1>
        </nav>
    )
}

export default Header