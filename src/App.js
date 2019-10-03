import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.scss';
import 'antd/dist/antd.css'; 

import Homepage from './pages/homepage/homepage';
import Header from './components/header/header';
import AboutPage from './pages/about/about';
import BusinessPage from './pages/business/business';
import SignUp from './pages/signup/signup';

import Footer from './assets/footer.png';

class App extends React.Component {
  render() {
    return(
      <div className='app-container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/businesses' component={BusinessPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/signup' component={SignUp} />
        </Switch>
        <footer className='footer'>
          <img src={Footer} />
        </footer>
      </div>
    )
  }
}

export default App;
