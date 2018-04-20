import React, { Component } from 'react'
import PopupDialog, { SlideAnimation, DialogButton } from 'react-native-popup-dialog';
import { ScrollView, Text, KeyboardAvoidingView, Image, View, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import HomeButton from './../Components/HomeButton.js'

import { Images, Colors } from '../Themes'
// Styles
import styles from './Styles/InfoScreenStyle'

const slideAnimation = new SlideAnimation({
  slideFrom: 'right',
});


class InfoScreen extends Component {
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
              text='About'
              bgColor= {Colors.kmfPurple}
              onPress={() => {
                this.popupDialog.show();
              }} />
            <PopupDialog
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog.dismiss();
                  }}
                  key="button-1"
                  buttonStyle={styles.popUpButton}
                  textStyle={styles.popUpButtonText}
                />,
              ]}
            >
              <ScrollView style={styles.popUpContainer}>
                <View >
                  <Text style={styles.popUpText}>
                    Konnexion is Idaho’s largest music and arts festival. We’re dedicated to building the best possible summer camping and festival experience we can while staying true to our core values.
                  </Text>
                  <Text style={styles.popUpText}>
                    Our goal is to build community and celebrate music and art. We strive to provide a comfortable and truly unique experience, unlike any other in Idaho. 2018 is going to be massive, taking place in a beautiful venue surrounded by 360 degrees of Idaho mountains. Camp on site in a tent, fun and decorative camps are highly encouraged.
                  </Text>
                  <Text style={styles.popUpText}>
                    This year we are bringing the biggest vision we’ve ever had to fruition May 31st-June 3rd. Blessing our stages will be a highly curated eclectic vision of melodic journeys. From Jam Bands to Techno and everything in between. Aside from music, we feature performance artists, live paintings and artistic sculptures throughout the event. Join us on this journey into our 6th year of creating space for like-minded individuals to gather and connect.
                  </Text>
                </View>
              </ScrollView>
            </PopupDialog>

            <HomeButton
              text='Safety - Awareness'
              bgColor= {Colors.kmfGreen}
              onPress={() => {
                this.popupDialog2.show();
              }} />
            <PopupDialog
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog.dismiss();
                  }}
                  key="button-1"
                  buttonStyle={styles.popUpButton}
                  textStyle={styles.popUpButtonText}
                />,
              ]}
            >
              <ScrollView style={styles.popUpContainer}>
                <View >
                  <Text style={styles.popUpText}>
                    Konnexion is Idaho’s largest music and arts festival. We’re dedicated to building the best possible summer camping and festival experience we can while staying true to our core values.
                  </Text>
                  <Text style={styles.popUpText}>
                    Our goal is to build community and celebrate music and art. We strive to provide a comfortable and truly unique experience, unlike any other in Idaho. 2018 is going to be massive, taking place in a beautiful venue surrounded by 360 degrees of Idaho mountains. Camp on site in a tent, fun and decorative camps are highly encouraged.
                  </Text>
                  <Text style={styles.popUpText}>
                    This year we are bringing the biggest vision we’ve ever had to fruition May 31st-June 3rd. Blessing our stages will be a highly curated eclectic vision of melodic journeys. From Jam Bands to Techno and everything in between. Aside from music, we feature performance artists, live paintings and artistic sculptures throughout the event. Join us on this journey into our 6th year of creating space for like-minded individuals to gather and connect.
                  </Text>
                </View>
              </ScrollView>
            </PopupDialog>
            <HomeButton
              text='What To Bring'
              bgColor= {Colors.kmfLightBlue}
              onPress={() => navigate('WorkshopScreen')} />
            <PopupDialog
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog.dismiss();
                  }}
                  key="button-1"
                  buttonStyle={styles.popUpButton}
                  textStyle={styles.popUpButtonText}
                />,
              ]}
            >
              <ScrollView style={styles.popUpContainer}>
                <View >
                  <Text style={styles.popUpText}>
                    Konnexion is Idaho’s largest music and arts festival. We’re dedicated to building the best possible summer camping and festival experience we can while staying true to our core values.
                  </Text>
                  <Text style={styles.popUpText}>
                    Our goal is to build community and celebrate music and art. We strive to provide a comfortable and truly unique experience, unlike any other in Idaho. 2018 is going to be massive, taking place in a beautiful venue surrounded by 360 degrees of Idaho mountains. Camp on site in a tent, fun and decorative camps are highly encouraged.
                  </Text>
                  <Text style={styles.popUpText}>
                    This year we are bringing the biggest vision we’ve ever had to fruition May 31st-June 3rd. Blessing our stages will be a highly curated eclectic vision of melodic journeys. From Jam Bands to Techno and everything in between. Aside from music, we feature performance artists, live paintings and artistic sculptures throughout the event. Join us on this journey into our 6th year of creating space for like-minded individuals to gather and connect.
                  </Text>
                </View>
              </ScrollView>
            </PopupDialog>
            <HomeButton
              text='Rules'
              bgColor= {Colors.kmfPeach}
              onPress={() => navigate('InfoScreen')} />
            <PopupDialog
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog.dismiss();
                  }}
                  key="button-1"
                  buttonStyle={styles.popUpButton}
                  textStyle={styles.popUpButtonText}
                />,
              ]}
            >
              <ScrollView style={styles.popUpContainer}>
                <View >
                  <Text style={styles.popUpText}>
                    Konnexion is Idaho’s largest music and arts festival. We’re dedicated to building the best possible summer camping and festival experience we can while staying true to our core values.
                  </Text>
                  <Text style={styles.popUpText}>
                    Our goal is to build community and celebrate music and art. We strive to provide a comfortable and truly unique experience, unlike any other in Idaho. 2018 is going to be massive, taking place in a beautiful venue surrounded by 360 degrees of Idaho mountains. Camp on site in a tent, fun and decorative camps are highly encouraged.
                  </Text>
                  <Text style={styles.popUpText}>
                    This year we are bringing the biggest vision we’ve ever had to fruition May 31st-June 3rd. Blessing our stages will be a highly curated eclectic vision of melodic journeys. From Jam Bands to Techno and everything in between. Aside from music, we feature performance artists, live paintings and artistic sculptures throughout the event. Join us on this journey into our 6th year of creating space for like-minded individuals to gather and connect.
                  </Text>
                </View>
              </ScrollView>
            </PopupDialog>
            <HomeButton
              text='Getting Here'
              bgColor= {Colors.kmfPurple}
              onPress={() => navigate('ScheduleScreen')} />
            <PopupDialog
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog.dismiss();
                  }}
                  key="button-1"
                  buttonStyle={styles.popUpButton}
                  textStyle={styles.popUpButtonText}
                />,
              ]}
            >
              <ScrollView style={styles.popUpContainer}>
                <View >
                  <Text style={styles.popUpText}>
                    Konnexion is Idaho’s largest music and arts festival. We’re dedicated to building the best possible summer camping and festival experience we can while staying true to our core values.
                  </Text>
                  <Text style={styles.popUpText}>
                    Our goal is to build community and celebrate music and art. We strive to provide a comfortable and truly unique experience, unlike any other in Idaho. 2018 is going to be massive, taking place in a beautiful venue surrounded by 360 degrees of Idaho mountains. Camp on site in a tent, fun and decorative camps are highly encouraged.
                  </Text>
                  <Text style={styles.popUpText}>
                    This year we are bringing the biggest vision we’ve ever had to fruition May 31st-June 3rd. Blessing our stages will be a highly curated eclectic vision of melodic journeys. From Jam Bands to Techno and everything in between. Aside from music, we feature performance artists, live paintings and artistic sculptures throughout the event. Join us on this journey into our 6th year of creating space for like-minded individuals to gather and connect.
                  </Text>
                </View>
              </ScrollView>
            </PopupDialog>
            <HomeButton
              text='Credits'
              bgColor= {Colors.kmfGreen}
              onPress={() => navigate('ArtistsScreen')} />
            <PopupDialog
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog.dismiss();
                  }}
                  key="button-1"
                  buttonStyle={styles.popUpButton}
                  textStyle={styles.popUpButtonText}
                />,
              ]}
            >
              <ScrollView style={styles.popUpContainer}>
                <View >
                  <Text style={styles.popUpText}>
                    Konnexion is Idaho’s largest music and arts festival. We’re dedicated to building the best possible summer camping and festival experience we can while staying true to our core values.
                  </Text>
                  <Text style={styles.popUpText}>
                    Our goal is to build community and celebrate music and art. We strive to provide a comfortable and truly unique experience, unlike any other in Idaho. 2018 is going to be massive, taking place in a beautiful venue surrounded by 360 degrees of Idaho mountains. Camp on site in a tent, fun and decorative camps are highly encouraged.
                  </Text>
                  <Text style={styles.popUpText}>
                    This year we are bringing the biggest vision we’ve ever had to fruition May 31st-June 3rd. Blessing our stages will be a highly curated eclectic vision of melodic journeys. From Jam Bands to Techno and everything in between. Aside from music, we feature performance artists, live paintings and artistic sculptures throughout the event. Join us on this journey into our 6th year of creating space for like-minded individuals to gather and connect.
                  </Text>
                </View>
              </ScrollView>
            </PopupDialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen)
