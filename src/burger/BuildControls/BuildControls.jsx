import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Bacon', type : 'bacon'},
    {label: 'Cheese', type : 'cheese'},
    {label: 'Meat', type : 'meat'}
];
 const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
        <p>Cena: {props.price.toFixed(2)} PLN </p>
        {controls.map( ctrl => {
            // console.log(ctrl.label)
            return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                delete={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
        })}
        <button className={classes.OrderButton} disabled={!props.purchase}>ORDER</button>
    </div>
  )
}

export default BuildControls;
