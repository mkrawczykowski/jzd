import React from 'react';
import * as grid from './grid.module.scss';

const Container = ( {children} ) => {
    return(
        <div className={grid.container}>
            {children}
        </div>
    )
}

const Row = ( {children} ) => {
    return(
        <div className={grid.row}>
            {children}
        </div>
    )
}

const Col = ( {children} ) => {
    return(
        <div className={grid.col}>
            {children}
        </div>
    )
}

export {Container, Row, Col};