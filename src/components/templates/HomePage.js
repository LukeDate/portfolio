import React, { Component } from 'react';
import { BigTitle } from '../atoms/index';
import {setMessage} from '../../Redux/actions/message';
import './HomePage.scss';

class HomePage extends Component {

  _onChange = (value) => {
    this.props.dispatch(setMessage(value))
  }

  render() {
    return (
      <div className="pageGrid">
        <div className="leftSection" />
        <div className="middleSection">
          <BigTitle title={this.props.title} />
        </div>
        <div className="rightSection" />
      </div>
    )
  }
}

export default HomePage;