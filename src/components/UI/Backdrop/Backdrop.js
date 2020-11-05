import React from 'react';

import clasess from './Backdrop.module.css';
const Backdrop = (props)=>(
    props.show ? <div className={clasess.Backdrop}  onClick={props.clicked}></div> : null
);


export default Backdrop;