import React from 'react'
import { Dimensions, Image, StyleSheet,View } from 'react-native'
import { COLORS, images } from '../constants'
export default function Widget({flex}) {
  return (
  <View style={{
    flex: flex,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray2,
    shadowColor: COLORS.gray3,
    shadowOpacity: 0.5,
    shadowRadius:25,
    width: Dimensions.get('window').width*0.9,

  }}>

  </View>)
}

const styles = StyleSheet.create({
  image: {
      marginTop:40,
    width: Dimensions.get('window').width*0.2,
    height: Dimensions.get('window').width*0.2,
    top: 40,
  },
})
