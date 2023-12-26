import React from 'react'
import classes from './mealsGrid.module.css'
import MealsItem from './MealsItem'

const MealsGrid = ({ meals }) => {
    return (
        <ul className={classes.meals}>
            {
                meals.map((meal, index) => (
                    <li key={index}>
                        <MealsItem {...meal} />
                    </li>
                ))
            }
        </ul>
    )
}

export default MealsGrid