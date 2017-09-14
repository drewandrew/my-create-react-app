import React, { Component } from 'react';
import { Link } from '../utils'

export default class NavModal extends Component {

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 text-center'>
              <Link history={this.props.history} component='Home'> HOME </Link>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-12 text-center'>
              <Link history={this.props.history} component='Features'> FEATURES </Link>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-12 text-center'>
              <Link history={this.props.history} component='Pricing'> Pricing </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
