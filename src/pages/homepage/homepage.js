import React from 'react'

import './homepage.scss';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import Funding from '../../assets/funding.png';
import Landing from '../../assets/landing.png';
import BusinessFlow from '../../assets/businessflow.png';
// import { ReactComponent as Landing } from '../../assets/landing.svg';
// import { ReactComponent as BusinessFlow } from '../../assets/businessflow.svg';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      percentageReturn: '',
      tenor: '', 
      profit: '',
      projection: {
        totalBusiness: '',
        estimatedReturn: '',
        tenorBusiness: ''
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { total, percentageReturn, tenor, profit } = this.state;
    this.setState({
      projection: {
        totalBusiness: total,
        tenorBusiness: tenor,
        estimatedReturn: total * (percentageReturn / 100),
        investmentNeed: total * (profit / 100)
      }
    })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value });
  }

  render() {
    const { total, percentageReturn, tenor, profit, projection } = this.state;
    const { totalBusiness, tenorBusiness, estimatedReturn, investmentNeed } = projection;

    return(
      <div>
        <div className='landing-home'>
          <img src={Landing} />
        </div>
        <div className='landing-home'>
          <img src={BusinessFlow} />
        </div>
        <div className='recap'>
          <div className='total-funding'>
            <img className='image' src={Funding} alt='total-funding'/>
          </div>
          <div className='investment-calculator'>
            <div> <h1> Sharia Investment Calculator </h1></div>
            <div> <h3> Calculate your business need and investment project </h3></div>
            <div> 
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <FormInput 
                name='total' 
                type='number' 
                label='Total Project of your business'
                value={total} 
                placeholder='in Rupiahs'
                handleChange={this.handleChange}
                odd
              />
              <FormInput
                name='percentageReturn'
                type='number'
                label='Estimated Percentage of Revenue'
                value={percentageReturn} 
                placeholder='in percentage'
                handleChange={this.handleChange} 
              />
              <FormInput
                name='tenor'
                type='number' 
                label='Tenor Investment'
                value={tenor} 
                placeholder='in Weeks'
                handleChange={this.handleChange} 
                odd
              />
              <FormInput
                name='profit'
                type='number' 
                label='Percentage New Investment Need'
                value={profit}
                placeholder='in percentage'
                handleChange={this.handleChange} 
              />
              <div className='buttons'>
                <CustomButton type='submit' right> Calculate </CustomButton>
              </div>
            </form>
            </div>
          </div>
          <div className='result-investment'>
            <div className='estimated-investment'>
              <h3 className='tenor'><span className='estimated-tenor'>{`${tenorBusiness ? tenorBusiness : '#'} Weeks`} </span></h3>
              <h2> Total Business Project </h2>
              <span className='rupiah'>{totalBusiness ? `Rp ${totalBusiness.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '-'} </span> <br />
              <h2> Estimated Business Return </h2>
              <span className='rupiah'>{estimatedReturn ? `Rp ${estimatedReturn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '-'} </span> <br />
            </div>
            <div className='approved-investment'>
              <h2> Approved Initial Investment </h2>
              <span className='rupiah'>{investmentNeed ? `Rp ${investmentNeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '-'} </span> <br />
              <span className='rupiah'> *simulation using syirkah contract</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;