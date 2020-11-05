import React from 'react';

import classes from './Modal.module.css';

import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal =(props)=>(
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modalclosed} />
    <div 
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}
    className={classes.Modal}>
        {props.children}
    </div>
    </Auxiliary>
);

export default Modal;

