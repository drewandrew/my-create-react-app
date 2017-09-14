import React from 'react';
import styles from '../assets/stylesheets/components/Header';
import { Link } from '../utils';
import NavModal from './NavModal';
//
// export default class Header extends React.Component {
//   render() {
//     return(
//       <div className={'container ' + styles.container}>
//         <div className='row'>
//           <div className='col' >
//             <img src='http://res.cloudinary.com/grillwork/image/upload/v1498046817/status_pigeon/status_pigeon_logo_small.png' />
//           </div>
//
//           <nav>
//             <div className='col' >
//               <Link history={this.props.history} component='Home' />
//             </div>
//
//             <div className='col' >
//               <Link history={this.props.history} component='Features' />
//             </div>
//
//             <div className='col' >
//               <Link history={this.props.history} component='Pricing' />
//             </div>
//           </nav>
//         </div>
//       </div>
//     )
//   }
// }

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false }
  }

  handleClick = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return(
      <div className={styles.wrapper}>
        {this.state.showModal && <NavModal history={this.props.history} handleClick={this.handleClick} />}
        <nav className='navbar navbar-toggleable-md fixed-top'>
          <button className="navbar-toggler navbar-toggler-right hidden-lg-up" onClick={this.handleClick}>
            {this.state.showModal ? <span>X</span> : <span>O</span>

              // <i className='fa fa-2x fa-times' /> :
              // <i className='fa fa-2x fa-bars' />
            }
          </button>

          <div className='col-4 center-nav'>
            <Link className='navbar-brand' history={this.props.history} component='Home' onClick={this.state.showModal && this.handleClick}>
              <img src='http://res.cloudinary.com/grillwork/image/upload/v1498046817/status_pigeon/status_pigeon_logo_small.png' />
            </Link>
          </div>

          <div className='col-4 left-nav hidden-md-down'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link history={this.props.history} component='Features'>Features</Link>
              </li>
              <li className='nav-item'>
                <Link history={this.props.history} component='Pricing'>PRICING</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
