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
      <a href={href} className={styles.roundedButton__button}>
        {label}
        <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9H19M19 9L11.125 1M19 9L11.125 17" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      
    </div>
  )
}

RoundedButton.defaultProps = {
  href: '#',
  type: 'onlyborder', //also: purple
  label: 'Czytaj więcej'
}

export default RoundedButton