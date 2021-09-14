import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { COLORS, images, SIZES } from "../../../constants";
const bottomBar = () => {
  var wid = Dimensions.get("window").width;
  const [isSlected, setIsSlected] = useState(false);

  const selctItem = () => {
      if(isSlected){
        setIsSlected(false)
      }else{
        setIsSlected(true)
      }
  };


  return (
      <View  style={{
        borderRadius: 25,
        backgroundColor: COLORS.primaryLight,
        shadowColor: COLORS.gray3,
        shadowOpacity: 0.5,
        shadowRadius: 25,
        width: Dimensions.get("window").width * 0.9,
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        flex:1,
        flexDirection:'row'
      }}>
     <TouchableOpacity style={{flex:1,alignItems:'center'}}>
    <Image
      source={images.Home}
      style={{
        width: wid * 0.1,
        height: wid * 0.1,
        borderRadius: 50,
        padding: SIZES.padding,
      }}
    />
 
 </TouchableOpacity>
 <TouchableOpacity style={{flex:1,alignItems:'center',borderWidth:1,borderColor: COLORS.red}}>
     <View    style={{
        width: wid * 0.3,
        height: wid * 0.13,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center'
        }}>
    <Text
      style={{
        color: COLORS.red,
        fontSize: SIZES.h1,
      }}
    >LIVE</Text>
 </View>
 </TouchableOpacity>
 <TouchableOpacity style={{flex:1,alignItems:'center'}}>

 <AntDesign name="team" size={45} color="black" />
 </TouchableOpacity>
      </View>
  

  );
};

export default bottomBar;
