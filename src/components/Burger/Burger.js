import React from 'react'
import PropTypes from 'prop-types'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, index) =>{
                return <BurgerIngredient key={igKey + index} type={igKey} />
            });
        }).reduce((prev, curr) => {
            return prev.concat(curr);
        }, []);

    if (transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please start adding ingredients.</p> 
    }

    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />       
        </div>
    );   
}

burger.propTypes = {
    ingredients: PropTypes.object,
};

export default burger
