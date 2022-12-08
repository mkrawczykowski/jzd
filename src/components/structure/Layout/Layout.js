import React from 'react';
import Footer from '../Footer/Footer.js';
import MainMenu from '../MainMenu/MainMenu';


const Layout = ({children}) =>{
    return (
        <>
            <header>
                <h1>Header</h1>
                <MainMenu></MainMenu>
            </header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )

}

export default Layout;