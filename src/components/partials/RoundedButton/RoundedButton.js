import React from 'react';
import * as styles from './RoundedButton.module.scss';

const RoundedButton = ({href, type, label}) => {
  return(
    <div className={styles.roundedButton}>
      <a href={href} className={styles.roundedButton__button}>{label}</a>
    </div>
  )
}

RoundedButton.defaultProps = {
  href: '#',
  type: 'onlyborder', //also: purple
  label: 'Czytaj więcej'
}

export default RoundedButton