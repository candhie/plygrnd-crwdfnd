import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

// import { auth } from '../../firebase/firebase';

import { ReactComponent as Logo } from '../../assets/sfund.svg';
import './header.scss';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/businesses'> <strong>Propose Ur Business</strong> </Link>
      <Link className='option' to='/about'> <strong>About Us </strong></Link>
      
      <Link className='option' to='/login'> <strong>Login</strong> </Link>
      <Link className='option signup' to='/signup'> <strong>Sign Up</strong> </Link>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);