import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import HomeButton from './../Components/HomeButton.js'

import { Images, Colors } from '../Themes'
// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <View style={styles.flexHome}>
          <View style={styles.centered}>
            <Image source={Images.kmfLogo} style={styles.logo} />
          </View>
          <View style={styles.buttonHome}>
            <HomeButton
              text='Music Schedule'
              bgColor= {Colors.kmfPurple}
              onPress={() => navigate('ScheduleScreen')} />
            <HomeButton
              text='Artists'
              bgColor= {Colors.kmfGreen}
              onPress={() => navigate('ArtistsScreen')} />
            <HomeButton
              text='Workshops'
              bgColor= {Colors.kmfLightBlue}
              onPress={() => navigate('WorkshopScreen')} />
            <HomeButton
              text='Info'
              bgColor= {Colors.kmfPeach}
              onPress={() => navigate('InfoScreen')} />
          </View>
        </View>
      </View>
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
