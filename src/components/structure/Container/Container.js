import React from 'react';
import * as styles from './Container.module.scss';


const Container = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

export default Container;