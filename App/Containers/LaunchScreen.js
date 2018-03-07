import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ImageBackground } from 'react-native'
import RoundedButton from './../Components/RoundedButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
        <ImageBackground source={Images.background} style={styles.mainContainer}>
          <View style={styles.flexHome}>
            <View style={styles.centered}>
              <Image source={Images.kmfLogo} style={styles.logo} />
            </View>
            <View style={styles.buttonHome}>
              <RoundedButton
                text='Enter'
                onPress={() => navigate('HomeScreen')} />
            </View>
          </View>
        </ImageBackground>
    )
  }
}
