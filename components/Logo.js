import React from 'react'
import { Dimensions, Image, StyleSheet ,View} from 'react-native'
import { images } from '../constants'
export default function Logo(props) {
  const { width, height} = props
  return <Image source={images.Logoo} style={{ padding:10,
    width: Dimensions.get('window').width*width || Dimensions.get('window').width*0.2 ,
    height: Dimensions.get('window').width*height || Dimensions.get('window').width*0.2}} />
}


