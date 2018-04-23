import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, FlatList, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images, Colors } from '../Themes'
import {thursdayList, fridayList, saturdayList} from './../../assets/schedule'
// Styles
import styles from './Styles/ScheduleScreenStyle'
import Tabs from 'react-native-tabs'

class ScheduleScreen extends Component {
  constructor (props) {
    super(props)
  // this.renderRow = this.renderRow.bind(this);
    this.state = {
      page: thursdayList
    }
  }
  renderItem ({item}) {
    return (
      <View style={styles.card}>
        <View style={styles.timeArea}>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.time}>{item.stage}</Text>
        </View>
        <View style={styles.artistArea}>
          <Text style={styles.artist}>{item.artist} </Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.kmfLogo} style={styles.logo} />
          </View>
          <Tabs selected={this.state.page} style={styles.tabs}
            selectedStyle={{color: Colors.kmfGreen}} onSelect={el => this.setState({page: el.props.name})}>
            <Text style={styles.tabLink} name={thursdayList} >Thursday</Text>
            <Text style={styles.tabLink} name={fridayList}>Friday</Text>
            <Text style={styles.tabLink} name={saturdayList}>Saturday</Text>
          </Tabs>
          <View>
            <ScrollView style={{height: '70%'}}>
              <FlatList data={this.state.page} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)
