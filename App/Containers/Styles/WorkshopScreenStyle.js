import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: 10,
    marginBottom: 5,
    height: Metrics.images.logoSmall,
    width: Metrics.images.logoSmall,
    resizeMode: 'contain'
  },
  container: {
    backgroundColor: 'transparent'

  },
  centered: {
    alignItems: 'center'
  }
})
