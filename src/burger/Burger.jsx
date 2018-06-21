import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  const transformedIngrediens = Object.keys(props.ingrediens)
    .map(igKey => {
      return [...Array(props.ingrediens[igKey])].map((_, i) =>{
        return < BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
  console.log(transformedIngrediens)

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngrediens}
      <BurgerIngredient type="bread-bottom" />
      
    </div>
  )
}


export default burger;