import React from 'react';

import classes from './Buildcontrols.module.css';

import Buildcontrol from './Buildcontrol/Buildcontrol';

const controls = [
    {label:'Salad',type:'salad'},   
    {label:'Bacon',type:'bacon'},   
    {label:'Cheese',type:'cheese'},   
    {label:'Meat',type:'meat'}   
]

const Buildcontrols = (props)=>(
    <div className={classes.buildcontrols}>
        <p>current price :<strong>{props.price.toFixed(2)}</strong></p>

        {controls.map(ctrl =>(
            <Buildcontrol 
            key={ctrl.label} 
            label={ctrl.label} 
            added={()=>props.ingredientadded(ctrl.type)} 
            remove={()=> props.ingredientremoveprop(ctrl.type)} 
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
        >ORDER NOW</button>
    </div>
);

export default Buildcontrols;