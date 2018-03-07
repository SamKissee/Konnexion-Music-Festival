import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import RoundedButton from './../Components/RoundedButton.js'

import { Images } from '../Themes'
// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <ImageBackground source={Images.background1} style={styles.mainContainer}>
        <View style={styles.flexHome}>
          <View style={styles.centered}>
            <Image source={Images.kmfLogo} style={styles.logo} />
          </View>
          <View style={styles.buttonHome}>
            <RoundedButton
              text='Music Schedule'
              onPress={() => navigate('ScheduleScreen')} />
          </View>
          <View style={styles.buttonHome}>
            <RoundedButton
              text='Artists'
              onPress={() => navigate('ArtistsScreen')} />
          </View>
          <View style={styles.buttonHome}>
            <RoundedButton
              text='Workshops'
              onPress={() => navigate('WorkshopScreen')} />
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
