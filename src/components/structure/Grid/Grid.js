import React from 'react';
import '../../../styles/grid/grid.scss';

const Container = ({children}) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}

const Row = ({children}) => {
    return(
        <div className="row">
            {children}
        </div>
    )
}

const Col = ({children, classes}) => {
    return(
        <div className={`col ${classes}`}>
            {children}
        </div>
    )
}

Col.defaultProps = {
    classes: ''
}

export {Container, Row, Col};