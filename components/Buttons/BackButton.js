import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { COLORS, images } from '../../constants'
import { AntDesign } from '@expo/vector-icons'; 
export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <AntDesign name="arrowleft" size={35}  style={{color:COLORS.primary, paddingLeft:5}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 46,
    height: 46,
    backgroundColor:'white',
    borderRadius: 50    
  },
})
