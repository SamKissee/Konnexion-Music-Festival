import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, FlatList, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import {workshopList} from './../../assets/workshops'
// Styles
import styles from './Styles/ArtistsScreenStyle'

class WorkshopScreen extends Component {
  constructor (props) {
    super(props)
  // this.renderRow = this.renderRow.bind(this);
    this.state = {
      workshop: workshopList
    }
  }
  renderItem ({item}) {
    return (
      <View style={styles.card}>
        <View style={styles.topArea}>
          <View style={styles.imgArea}>
            <Image source={item.picture} style={styles.img} resizeMode='cover' />
          </View>
          <View style={styles.nameArea}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.subName}>{item.teacher}</Text>
            <Text style={styles.campName}>{item.location}</Text>
            <Text style={styles.subName}>{item.time} </Text>
          </View>
        </View>
        <View style={styles.bio}>
          <Text style={styles.bioText}>{item.bio}</Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <ImageBackground source={Images.background1} style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.kmfLogo} style={styles.logo} />
            <Text style={styles.header}>Workshops</Text>
          </View>
          <View>
            <ScrollView style={{height: '75%'}}>
              <FlatList data={this.state.workshop} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopScreen)
