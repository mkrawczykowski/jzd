import React from 'react';
import * as styles from './RoundedButton.module.scss';

const RoundedButton = ({href, type, label, halign}) => {
  let alignClasses = '';
  console.log('align');
  console.log(halign);
  switch(halign){
    case 'right':
      alignClasses = styles.roundedButtonRight;
    break;
  }
  return(
    // <div className={${styles.roundedButton} ${alignClasses}}>
    <div className={[styles.roundedButton, alignClasses].join(' ')}>

      {console.log("[styles.roundedButton, alignClasses].join(' ')")}
      {console.log([styles.roundedButton, alignClasses].join(' '))}
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