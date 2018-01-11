import React from 'react';
import Hoc from '../Hoc/Hoc';

// State Less Component

const Button01 = Hoc((props) => {
    return <button onClick={props.update}>{props.children}Button 01 - {props.count}</button>
});

export default Button01