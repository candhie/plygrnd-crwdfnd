import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, right, inverted, ...otherProps }) => (
  <button 
    className={`${inverted ? 'inverted' : ''}  ${right ? 'right' : ''} custom-button`} 
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton