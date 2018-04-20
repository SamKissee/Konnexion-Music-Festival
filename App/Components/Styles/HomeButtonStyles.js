import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    flexGrow: 1,
    width: '95%',
    // marginHorizontal: Metrics.section,
    // marginVertical: Metrics.baseMargin,
    borderRadius: 15,
    justifyContent: 'center',
    margin: 5
  },
  buttonText: {
    color: Colors.blue,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
    marginVertical: Metrics.baseMargin
  }
})
