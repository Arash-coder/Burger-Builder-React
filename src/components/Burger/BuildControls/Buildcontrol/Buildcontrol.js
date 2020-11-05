import React from 'react';

import classes from './Buildcontrol.module.css';

const Buildcontrol =(props)=> (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
        onClick={props.remove } className={classes.Less} disabled={props.disabled}>Less</button>
        <button 
        onClick={props.added} className={classes.More}>More</button>
    </div>
);

export default Buildcontrol;        