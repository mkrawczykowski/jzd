import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import * as styles from './Header.module.scss'

const Header = () => {
    return(
        <header className={styles.header}>
            <MainMenu></MainMenu>
        </header>
    )
}

export default Header;