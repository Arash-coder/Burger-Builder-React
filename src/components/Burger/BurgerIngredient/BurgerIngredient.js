import React , {Component} from 'react';

import PropTypes from 'prop-types'

import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component{
    render(){
        let ingredinet = null;
        switch(this.props.type){
            case('bread-bottom'):
                ingredinet = <div className={classes.BreadBottom}></div>;
                break;
                case ('bread-top'):
                    ingredinet = (
                        <div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>
                    );
                    break;
                    case('meat'):
                        ingredinet = <div className={classes.Meat}></div>;
                        break;
                        case('cheese'):
                        ingredinet = <div className={classes.Cheese}></div>;
                        break;
                        case('bacon'):
                        ingredinet = <div className={classes.Bacon}></div>;
                        break;
                        case('salad'):
                        ingredinet = <div className={classes.Salad}></div>;
                        break;
                        default:
                            ingredinet = null; 
        }
        return ingredinet;
    }
} 
BurgerIngredient.propTypes={
    type:PropTypes.string
};
export default BurgerIngredient;