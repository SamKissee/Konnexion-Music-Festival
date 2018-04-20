import { StackNavigator } from 'react-navigation'
import InfoScreen from '../Containers/InfoScreen'
import ArtistsScreen from '../Containers/ArtistsScreen'
import WorkshopScreen from '../Containers/WorkshopScreen'
import HomeScreen from '../Containers/HomeScreen'
import ScheduleScreen from '../Containers/ScheduleScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  InfoScreen: { screen: InfoScreen },
  ArtistsScreen: { screen: ArtistsScreen },
  WorkshopScreen: { screen: WorkshopScreen },
  HomeScreen: { screen: HomeScreen },
  ScheduleScreen: { screen: ScheduleScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'ArtistsScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
