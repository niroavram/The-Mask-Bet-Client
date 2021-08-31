import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native'
import { images,COLORS } from '../constants'
export default function Background({ children }) {
  return (
    <ImageBackground
      source={images.background}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
