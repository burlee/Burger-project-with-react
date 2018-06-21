import React from 'react';
import classes from './BurgerIngredient.css'

const burgerIngredient = (props) => {
    let ingridient = null;

    switch(props.type){
        case('bread-bottom'):
            ingridient = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingridient = (
                <div className={classes.BreadBottom}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case('meat'):
            ingridient = <div className={classes.Meat}></div>
            break;
        case('cheese'):
            ingridient = <div className={classes.Cheese}></div>
            break;
        case('backon'):
            ingridient = <div className={classes.Backon}></div>
            break;        
        case('salad'):
            ingridient = <div className={classes.Salad}></div>
            break;
        default:
            ingridient = null;
    }
};

export default burgerIngredient;