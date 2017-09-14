import React from 'react';
import universal from 'react-universal-component';
import '../assets/stylesheets/global_styles/App';
import { myRouter } from '../utils';
import Header from './Header';

const UniversalComponent = universal(props => import(`./${props.page}`), {});

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const { history } = props;
    const page = myRouter(history.location.pathname)

    this.state = {
      page
    }

    history.listen(({ pathname }) => {
      const page = myRouter(pathname)
      this.setState({page})
    })
  };

  render() {
    const { page } = this.state;
    const { history } = this.props;
    return(
      <div className='container-fluid appWrapper'>
        <div className='row'>
          <div className='col'>
            <Header history={history} />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <UniversalComponent page={page} />
          </div>
        </div>

      </div>
    );
  };
};
