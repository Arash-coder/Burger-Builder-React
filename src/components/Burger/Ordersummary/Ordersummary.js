import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

import Button from '../../UI/Button/Button';

const Ordersammary = (props) => {
    const ingreddientsummary = Object.keys(props.ingredients)
    .map(igkey =>{
    return <li key={igkey}>
        <span style={{textTransform:'capitalize'}}>{igkey}</span>:{props.ingredients[igkey]}
        </li>
    });
    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingreddientsummary}
            </ul>
             <p><strong>Total price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchasecancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchasecontinued}>CONTINUE</Button>
        </Auxiliary>
    )
};

export default Ordersammary;