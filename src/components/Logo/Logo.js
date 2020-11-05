import React from 'react';
import classes from './Logo.module.css';
import burgerlogo from '../../assets/images/1.png';

const Logo = (props) =>(
    <div className={classes.Logo} style={{height:props.height,marginBottom:props.marginbottom}}>
        <img src={burgerlogo} alt="Burger"/>
    </div>
);


export default Logo;