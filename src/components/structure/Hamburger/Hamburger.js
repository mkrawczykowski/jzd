import React from 'react';
import * as styles from './Hamburger.module.scss';

const Hamburger = ({onClick, active}) => {
    console.log('onClick');
    console.log(onClick);
    let activeState = active ? 'hamburger--active' : '';
    console.log('styles[activeState]');
    console.log(styles[active]);
    return(
        // <div className={styles.hamburger}>
        <div className={[styles.hamburger, styles[active]].join(' ')} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;