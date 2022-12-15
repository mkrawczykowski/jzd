import React from 'react';
import * as styles from './Hamburger.module.scss';

const Hamburger = (clickHandler) => {
    console.log(clickHandler);
    return(
        <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;