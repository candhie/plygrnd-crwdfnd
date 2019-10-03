import React from 'react';

import './form-input.scss'

const FormInput = ({ handleChange, label, odd, ...otherProps }) => (
  <div className={`group ${odd ? 'odd': 'even'}`}>
    <label className='form-input-label' >{label}</label>
    <input className='form-input' onChange={handleChange} {...otherProps}/>
  </div>
)

export default FormInput