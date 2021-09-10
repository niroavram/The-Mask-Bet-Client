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
import moment from "moment";
import { COLORS, SIZES } from "../../../constants";
const Game = ({game,addGame,removeGame}) => {
  var wid = Dimensions.get("window").width;
  const [isSlected, setIsSlected] = useState(false);
  const selctItem = () => {
      if(isSlected){
        setIsSlected(false)
         removeGame(game) 
      }else{
        setIsSlected(true)
        addGame(game)
      }
  };


  return (
    <TouchableOpacity
    onPress={selctItem}
  style={{
    borderWidth: 0.5,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    backgroundColor: isSlected? COLORS.primaryLight :COLORS.lightGray1,
  }}>
 <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={{ uri: game.homeFlag }}
      style={{
        width: wid * 0.1,
        height: wid * 0.1,
        borderRadius: 50,
        padding: SIZES.padding,
      }}
    />
    <Text style={{ fontSize: SIZES.h3 }}> {game.homeTeam} </Text>
    <Text style={{ fontSize: SIZES.h4, position: 'absolute', right: 50}}>{moment(game.dateGame).format("dddd Do MMM")} </Text>
  </View>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={{ uri: game.awayFlag }}
      style={{
        width: wid * 0.1,
        height: wid * 0.1,
        padding: SIZES.padding,
      }}
    />
    <Text style={{ fontSize: SIZES.h3 }}> {game.awayTeam}</Text>
    <Text style={{ fontSize: SIZES.h4, position: 'absolute', right: 50}}>{moment(game.dateGame).format("h:mm a")} </Text>
  </View> 
 </TouchableOpacity>

  );
};

export default Game;
