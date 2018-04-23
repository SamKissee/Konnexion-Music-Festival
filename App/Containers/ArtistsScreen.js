import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, FlatList, Linking, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import { artistList } from './../../assets/artists'
// Styles
import styles from './Styles/ArtistsScreenStyle'

class ArtistsScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      artists: artistList
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
            <Text style={styles.subName}>{item.genre} | {item.location}</Text>
          </View>
        </View>
        <View style={styles.bio}>
          <Text style={styles.bioText}>
            {item.bio}
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL(item.link)}>Tap To Listen</Text>
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
            <Text style={styles.header}>Artists</Text>
          </View>
          <View>

            <ScrollView style={{height: '75%'}}>

              <FlatList data={this.state.artists} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsScreen)
