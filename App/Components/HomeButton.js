import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View} from 'react-native'
import styles from './Styles/HomeButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Fonts, Colors, Metrics } from '../Themes/'


// Note that this file (App/Components/HomeButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
// ExamplesRegistry.addComponentExample('Home Button', () =>
//   <HomeButton
//     text='real buttons have curves'
//     onPress={() => window.alert('Home Button Pressed!')}
//   />
// )

export default class HomeButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    bgColor: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  }

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <View style={{backgroundColor: this.props.bgColor, flex: 1, justifyContent: 'center' }}>
          <Text style={styles.buttonText}>{this.getText()}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
