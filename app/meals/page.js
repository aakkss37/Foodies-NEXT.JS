import React from 'react'
import classes from './page.module.css'

const MealsPage = () => {
    return (
        <div>
            <header className={classes.header}>
                <h1>Delicious meals, created{' '} <span className={classes.highlight}>by you</span></h1>
            </header>
        </div>
    )
}

export default MealsPage