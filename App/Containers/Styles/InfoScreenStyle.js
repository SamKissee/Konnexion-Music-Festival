import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: 10,
    height: Metrics.images.logoSmall,
    width: Metrics.images.logoSmall,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
    marginBottom: 10

  },
  flexHome: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.darkBlue,
    // justifyContent: 'flex-end'
    // // alignItems: 'center',
  },
  dummy: {
    // // alignItems: 'center',
  },
  buttonHome: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    // justifyContent: 'flex-end'
  },
  popUp: {
    height: '100%',

  },
  popUpContainer: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.darkBlue,
    // borderRadius: 4,
    // borderColor: Colors.kmfLightBlue,
    // borderWidth: 3,
    padding: 5,
  },
  popUpText: {
    elevation: 10,
    color: Colors.white,
    fontSize: Fonts.size.regular,
    padding: 10,
    paddingBottom: 15,
  },
  popUpButton: {
    backgroundColor: Colors.kmfPurple,
    borderColor: Colors.darkBlue,
    width: '100%',
    borderWidth: 3,
  },
  popUpButtonText: {
    color: Colors.white,
    fontSize: Fonts.size.regular,

  },
  popUpLink: {
    color: Colors.kmfPurple,
    fontSize: Fonts.size.h6,
    textAlign: 'center',
  },
  creditText: {
    color: Colors.kmfPurple,
    fontSize: Fonts.size.h4,
    textAlign: 'center',

  },
  mainArea: {
    width: '100%'
  },
  textArea: {

    padding: 10,
  },
  subTitle: {
    color: Colors.kmfLightBlue,
    color: Colors.white,
    fontSize: Fonts.size.regular,
  },
  title: {
    color: Colors.kmfLightBlue,
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
  },
})
