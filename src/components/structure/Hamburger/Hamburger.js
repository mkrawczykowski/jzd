import React from 'react';
import * as styles from './Hamburger.module.scss';

const Hamburger = ({onClick, active}) => {
    let activeState = active ? 'hamburger--active' : '';
    return(
        <div className={[styles.hamburger, styles[active]].join(' ')} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;