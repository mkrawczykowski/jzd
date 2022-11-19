import React from 'react';

const RoundedButton = ({href, type, label}) => {
  return(
    <a href={ href } className={ `button button--${type}` }>{ label }</a>
  )
}

RoundedButton.defaultProps = {
  href: '#',
  type: 'onlyborder', //also: purple
  label: 'Czytaj więcej'
}

export default RoundedButton