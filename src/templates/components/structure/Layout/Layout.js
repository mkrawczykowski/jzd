import React from 'react';
import Footer from '../Footer/Footer.js';


const Layout = ( {children} ) =>{
    return (
        <>
            <header>
                <h1>Header</h1>
            </header>
            <main>
                { children }
            </main>
            <Footer></Footer>
        </>
    )

}

export default Layout;