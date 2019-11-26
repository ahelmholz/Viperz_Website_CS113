import React from 'react'
import classes from './Banner.module.css'

const Banner = (props) => {
    return (
        <div className={classes.wrapper}>
            <video playsinline autoPlay muted loop id='myvideo' className={classes.video}>
                <source src='https://www.trine4.com/wp-content/uploads/2019/03/trine4-loop.m4v' type='video/mp4' />
            </video>
            <h1 className={classes.title}>Viperz</h1>
            <a style={{textDecoration:'none', margin: '64px'}} href="/here"><h2 className={classes.subtitle}>Buy Now</h2></a>
        </div>
    )
}

export default Banner