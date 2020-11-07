import React from 'react'
import classes from './PizzaImage.css'
import image from '../../assets/pizzaImage.jpeg'

const PizzaImage = props => {
  return (
    <div className={classes.PizzaImage}>
      <img src={image} className={classes.PizzaImg} />
    </div>
  )
}

export default PizzaImage