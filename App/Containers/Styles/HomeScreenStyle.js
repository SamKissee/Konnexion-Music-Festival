import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
    marginBottom: 60

  },
  flexHome: {
    flex: 1,
    height: '100%',
    flexDirection: 'column'
    // justifyContent: 'flex-end'
    // // alignItems: 'center',
  },
  dummy: {
    // // alignItems: 'center',
  },
  buttonHome: {
    // flex: 1,
    flexDirection: 'column'
    // justifyContent: 'flex-end'
  }
})
