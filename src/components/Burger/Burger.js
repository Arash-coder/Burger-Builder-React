import React from 'react';

import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) =>{
    let transformedingredient = Object.keys(props.ingredients)
    .map(igkey =>{
        return [...Array(props.ingredients[igkey])].map(( _,i)=>{
            return <BurgerIngredient key={igkey + i} type={igkey} />
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformedingredient.length === 0){
        transformedingredient = <p>please start adding ingredeints!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedingredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;