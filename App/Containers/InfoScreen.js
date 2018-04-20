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
              ref={(popupDialog2) => { this.popupDialog2 = popupDialog2; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog2.dismiss();
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
                    Here at Konnexion, we very much value the chance for self expression. We all LOVE the chance to get away from society and act, dress, and be who we want. Unfortunately this sometimes brings out those with a predatory mentality. CONSENT IS SEXY. Sexual Harassment, however, is not.
                  </Text>
                  <Text style={styles.popUpText}>
                    This is an important topic and it needs to be known that Konnexion Music Festival does not stand for this type of predatory behavior. We want you to all feel safe at our event and want you to know that we are available to you 24/7 of the event if you need assistance. It doesn't matter what gender you are. Sexual harassment will not be tolerated.
                  </Text>
                  <Text style={styles.popUpText}>
                    IF YOU SEE SOMETHING, SAY SOMETHING. IF YOU NEED HELP DO NOT HESITATE TO FIND A STAFF OR SECURITY MEMBER.
                  </Text>
                </View>
              </ScrollView>
            </PopupDialog>
            <HomeButton
              text='Venue - What To Bring'
              bgColor= {Colors.kmfLightBlue}
              onPress={() => {
                this.popupDialog3.show();
              }} />
            <PopupDialog
              ref={(popupDialog3) => { this.popupDialog3 = popupDialog3; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog3.dismiss();
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
                    https://www.tickettailor.com/events/zipidaho/161976/
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
              onPress={() => {
                this.popupDialog4.show();
              }} />
            <PopupDialog
              ref={(popupDialog4) => { this.popupDialog4 = popupDialog4; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog4.dismiss();
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
              onPress={() => {
                this.popupDialog5.show();
              }}/>
            <PopupDialog
              ref={(popupDialog5) => { this.popupDialog5 = popupDialog5; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog5.dismiss();
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
              onPress={() => {
                this.popupDialog6.show();
              }}/>
            <PopupDialog
              ref={(popupDialog6) => { this.popupDialog6 = popupDialog6; }}
              dialogAnimation={slideAnimation}
              containerStyle={styles.popUp}
              height={500}
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    this.popupDialog6.dismiss();
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
