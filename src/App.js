import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchAllServices, fetchAllProviders} from './actions/appActions';
import Services from './containers/services/serviceContainer';
import Provider from './containers/providers/providerContainer';
import './App.css';


import PropTypes from 'prop-types'

class App extends Component {

componentDidMount(){
  this.props.fetchAllProviders();
  this.props.fetchAllServices();
}

  render(props) {
    return (
      <div className="App">
      <Services></Services>
      <Provider></Provider>
    </div>
  )
  }
}

const mapDispatchToProps = {
  fetchAllProviders,
  fetchAllServices
};


export default connect(
  null,
  mapDispatchToProps,
)(App);
