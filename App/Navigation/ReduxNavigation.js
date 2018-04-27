import React, { Component }  from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

import { BackHandler } from 'react-native'
import { addNavigationHelpers, } from 'react-navigation'


// here is our redux-aware smart component
class ReduxNavigation extends Component {
  constructor(props) {
        super(props);
    }
  componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
          const { dispatch, navigation, nav } = this.props;
          if (nav.routes.length === 1 && (nav.routes[0].routeName === 'Login' || nav.routes[0].routeName === 'Start')) {
              return false;
          }
          // if (shouldCloseApp(nav)) return false
          dispatch({ type: 'Navigation/BACK' });
          return true;
      }.bind(this));
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
      return <AppNavigation navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })} />
  }
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
