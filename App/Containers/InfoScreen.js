import React, { Component } from 'react'
import PopupDialog, { SlideAnimation, DialogButton } from 'react-native-popup-dialog';
import { ScrollView, Text, KeyboardAvoidingView, Image, View, ImageBackground, Linking, FlatList, Button } from 'react-native'
import { connect } from 'react-redux'
import  openMap  from 'react-native-open-maps';
import HomeButton from './../Components/HomeButton.js'

import { Images, Colors } from '../Themes'
// Styles
import styles from './Styles/InfoScreenStyle'
import { whatToBringList } from './../../assets/whatToBring'
import { rulesList } from './../../assets/rules'

const slideAnimation = new SlideAnimation({
  slideFrom: 'right',
});

class InfoScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      whatToBringList: whatToBringList,
      rulesList: rulesList
    }
  };

  _goToKonnexion() {
    openMap({ latitude: 43.9757659, longitude: -116.141082 });
  };



  renderItem ({item}) {
    return (
      <View style={styles.mainArea}>
        <View style={styles.textArea}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
      </View>
    )
  }


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
                    Self expression is an important aspect of an Art Festival. All individuals are given the right to express themselves freely here at Konnexion. Unfortunately, predatory behaviors are still happening in real life and at festivals. CONSENT IS SEXY. Sexual harassment in any form is NOT.
                  </Text>
                  <Text style={styles.popUpText}>
                    This is an important issue and konnexion music festival does not stand for this type of predatory behavior.  Everyone should be allowed space to feel safe and experience the joys a festival can bring. Please come to our event staff at any time through out the weekend if you need assistance.
                  </Text>
                  <Text style={styles.popUpText}>
                    IF YOU SEE SOMETHING, SAY SOMETHING. IF YOU NEED HELP DO NOT HESITATE TO FIND A STAFF OR SECURITY MEMBER.
                  </Text>
                  <Text style={styles.popUpText}>
                    Those who are found engaging in predatory behaviors will be kicked out if Konnexion immediately and barred from coming to all future events. Be kind to your fellow humans..
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
                  <Text style={styles.popUpLink} onPress={() => Linking.openURL('https://www.tickettailor.com/events/zipidaho/161976/')}>
                    CLICK HERE FOR ZIPLINE TICKETS!
                  </Text>
                  <Text style={styles.popUpText}>
                    Perched roughly 40 minutes outside Boise Idaho, sits this beautiful 150 acres of mountain property, flush with all the beauty that Southern Idaho has to offer!
                    We expect green, lush landscape with cool temperatures in the high 70s/low 80s. The terrain is a mix of flat and hilly mountain forest, so plan accordingly.
                  </Text>
                  <Text style={styles.popUpText}>
                    ZipIdaho will be on-site offering zipline rides during the afternoon. Click the link above to get tickets for Ziplining. We have another year of amazing memories and fantastic times in store for you!
                  </Text>
                  <Text style={styles.popUpText}>
                    Konnexion Music Festival is strictly “Leave No Trace”. You pack it in, you pack it out. No exceptions.
                  </Text>
                  <Text style={styles.popUpText}>
                    WHAT TO BRING:
                  </Text>
                  <FlatList data={this.state.whatToBringList} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
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
                    You will be removed from the event if you fail to follow these rules. No refunds.
                  </Text>
                  <FlatList data={this.state.rulesList} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
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
                    Konnexion is excited to be hosting our 6th year at ZipIdaho just outside Horseshoe Bend, ID. Located about 1 hour outside Boise! Click Below and it will open directions to the Property from wherever you are, using Google or Apple Maps!
                  </Text>
                  <HomeButton
                    bgColor={Colors.kmfLightBlue}
                    onPress={this._goToKonnexion}
                    text="Press To Open Directions"
                  />
                  <HomeButton
                    bgColor={Colors.kmfLightBlue}
                    onPress={() => Linking.openURL('google.navigation:q=43.9757659+-116.141082')}
                    text="Click Here if Android"
                  />

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
                  <Text style={styles.creditText}>
                    This App was built for Konnexion Music Festival by Sam Kissee of Kissee Designs.
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
