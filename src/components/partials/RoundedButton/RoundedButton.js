import React from 'react';
import * as styles from './RoundedButton.module.scss';

const RoundedButton = ({href, type, label}) => {
  return(
    <a href={href} className={styles.button}>{label}</a>
    // <pre>{JSON.stringify(styles, null, 2)}</pre>
  )
}

RoundedButton.defaultProps = {
  href: '#',
  type: 'onlyborder', //also: purple
  label: 'Czytaj więcej'
}

export default RoundedButton