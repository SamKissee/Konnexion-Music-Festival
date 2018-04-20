import { StyleSheet } from 'react-native'
import { Fonts, Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  tabs: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 10
  },
  tabLink: {
    color: Colors.white,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: Fonts.size.h5
  },
  logo: {
    marginTop: Metrics.doubleSection,
    marginBottom: 5,
    height: Metrics.images.logoSmall,
    width: Metrics.images.logoSmall,
    resizeMode: 'contain'
  },
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.darkBlue,

  },
  centered: {
    alignItems: 'center'
  },
  header: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: Fonts.size.h1,
    color: Colors.blue
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    backgroundColor: Colors.kmfPurple,
    borderRadius: 4
  },
  time: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white
  },
  artist: {
    fontSize: Fonts.size.h4,
    textAlign: 'center',
    alignItems: 'center',
    color: Colors.white
  },
  timeArea: {
    flex: 1
  },
  artistArea: {
    flex: 2
  }
})
