import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import moment from "moment";
import { COLORS, SIZES } from "../../../constants";
const Game = ({game,addGame,removeGame}) => {
  var wid = Dimensions.get("window").width;
  const [isSlected, setIsSlected] = useState(false);
  const gamey ={
    homeTeam: game.homeTeam,
    awayTeam: game.awayTeam,
    startHomeTeam: 0,
    startAwayTeam: 0,
    startGame: game.dateGame,
    gameApi: game,
    bet: [0, 0, 0],
  }
  const selctItem = () => {
      if(isSlected){
        setIsSlected(false)
         removeGame(gamey) 
      }else{
        setIsSlected(true)
        addGame(gamey)
      }
  };


  return (
    <TouchableOpacity
    onPress={selctItem}
  style={{
    marginTop: 4,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    backgroundColor: isSlected? COLORS.yellow :COLORS.darkGreen,
    height:90
  }}>
 <View style={{ flexDirection: "row", alignItems: "center", flex:1}}>
  <View style={{ flexDirection: "row", alignItems: "center", flex:1}}>  
    <Image
      source={{ uri: game.homeFlag }}
      style={{
        width:wid * 0.1,
        height: wid * 0.1,
        borderRadius: 50,
        left:6,
        top:1,
        
        
      }}
    />
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", flex:3,  flexWrap:"wrap", top:3}}>
      <Text style={{ fontSize: SIZES.h3, color:COLORS.primary , fontWeight:"bold",  flexDirection:"row"}}> {game.homeTeam} </Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", flex:3,  flexWrap:"wrap", top:3}}>
      <Text style={{ fontSize: SIZES.h4, position: 'absolute', right: 5, color:COLORS.primary}}>{moment(game.dateGame).format("dddd Do MMM")} </Text>
    </View>  
  </View>
  <View style={{ flexDirection: "row", alignItems: "center", flex:1}}>
  <View style={{ flexDirection: "row", alignItems: "center", flex:1 }}>
    <Image
      source={{ uri: game.awayFlag }}
      style={{
        width: wid * 0.1,
        height: wid * 0.1,
        left:6,
        
        
      }}
    />
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", flex:4,  flexWrap:"wrap"}}>
      <Text style={{ fontSize: SIZES.h3 , color:COLORS.primary, fontWeight:"bold"}}> {game.awayTeam}</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", flex:2,  flexWrap:"wrap"}}>
      <Text style={{ fontSize: SIZES.h4, position: 'absolute', right: 5, color:COLORS.primary}}>{moment(game.dateGame).format("h:mm a")} </Text>
    </View>     
  </View> 
 </TouchableOpacity>

  );
};

export default Game;
