import React, { Component } from 'react';
import moment from 'moment';
import './index.css';

export default class DonationWidget extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: '',
      goal: 500,
      remainingForGoal: '',
      currentDonations: []
    }
  }

  handleChange = (e) => {
    let value = e.target.value ? e.target.value : '';
    this.setState({ value });
  }

  getRemainingForGoal = () => {
    const { value, goal, remainingForGoal, currentDonations } = this.state;
    currentDonations.push(value);
    let remaining = goal - value;
    if(value !== ''){
      this.setState({
        remainingForGoal: remaining,
        goal: remaining,
        currentDonations,
        value: '',
      })
    }
  };  

  render() {
    const { remainingForGoal, currentDonations } = this.state;
    return(
      <div className="centered">
        <div className="flex-container">
          <div className="heading">
            {remainingForGoal ? 
              <p><span>${remainingForGoal}</span> still needed for this project</p> :
              <p>Donations for Project</p>
            }
          </div>
          <div className="content">
            <div className="track-bar">track bar</div>
            <div className="card">
              <div className="card-copy">
                <p><span className="orange">Only 3 days left</span> to fund this project.</p>
                <p>Join the <span>{currentDonations.length}</span> other donors who have already supported this project. Every dollar helps.</p>
              </div>
              <div className="card-donation">
                <form className="input">
                  <input 
                    className='donation-value'
                    type="text"
                    placeholder="  $"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </form>
                <button 
                  onClick={() => this.getRemainingForGoal()}
                  className="give-button">
                  Give now
                </button>
              </div>
              <div className="card-why">
                <p>Why give ${this.state.value ? this.state.value : this.props.value}?</p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="button">            
              Save for later
            </button>
            <button className="button">
              Tell your friends
            </button>
          </div>        
        </div>
      </div>
    )
  }
}