import React, {useState} from 'react';
import {Container, Row, Col} from '../Grid/Grid';
import MainMenu from '../MainMenu/MainMenu';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import * as styles from './Header.module.scss'

const Header = () => {
    const [headerStateClass, setHeaderStateClass] = useState('');
    const changingHeaderStateClass = () => {
        headerStateClass.length > 0 ? setHeaderStateClass('') : setHeaderStateClass('active');
    }

    return(
        <head className={styles.header}>
            <Container>
                <Row>
                    <Col classes="col col-xs-12 col-lg-1"></Col>
                    <Col classes="col col-xs-12 col-lg-10">
                        <nav className={[styles.mainNav, styles[headerStateClass]].join(' ')}>
                            <Logo></Logo>
                            <MainMenu active={headerStateClass}></MainMenu>
                        </nav>
                        <Hamburger onClick={changingHeaderStateClass} active={headerStateClass}></Hamburger>
                    </Col>
                    <Col classes="col col-xs-12 col-lg-1"></Col>
                </Row>
            </Container>
        </head>
    )
}

export default Header;