import { StyleSheet } from 'react-native'
import { Fonts, Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    marginBottom: 2,
    height: Metrics.images.logoSmall,
    width: Metrics.images.logoSmall,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.darkBlue,

  },
  centered: {
    alignItems: 'center'
  },
  header: {
    marginBottom: 2,
    textAlign: 'center',
    fontSize: Fonts.size.h1,
    color: Colors.kmfLightBlue
  },
  card: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    backgroundColor: Colors.darkBlue,
    borderRadius: 4,
    borderColor: Colors.kmfLightBlue,
    borderWidth: 2,
  },
  topArea: {
    flexDirection: 'column',
    margin: 10,
    // padding: 5,
    backgroundColor: Colors.darkBlue,
    borderRadius: 4
  },
  imgArea: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5
    // height: Metrics.images.photo,
    // width: Metrics.images.photo,

  },
  img: {
    height: Metrics.images.photo,
    width: Metrics.images.photo,
    resizeMode: 'contain'
  },
  nameArea: {
    flex: 2
  },
  subName: {
    fontSize: Fonts.size.h5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white
  },
  name: {
    fontSize: Fonts.size.h2,
    textAlign: 'center',
    alignItems: 'center',
    color: Colors.white,
    fontWeight: 'bold'
  },
  bio: {
  },
  bioText: {
    color: Colors.white
  },
  link: {
    paddingTop: 10,
    fontSize: Fonts.size.h6,
    color: Colors.kmfGreen,

  }
})
