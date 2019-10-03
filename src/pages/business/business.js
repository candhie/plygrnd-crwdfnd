import React from 'react'
import { withRouter } from 'react-router-dom';

import './business.scss';
import Business from '../../assets/business.png';
import CustomButton from '../../components/custom-button/custom-button';

const BusinessPage = ({ history }) => (
  <div>
    <div className='business-propose'>
      <img src={Business} alt='businesses'/>
    </div>
    <div className='register' align="center">
      <CustomButton inverted onClick={() => history.push('/signup')}> Register Now </CustomButton>
    </div>
  </div>
)

export default withRouter(BusinessPage);