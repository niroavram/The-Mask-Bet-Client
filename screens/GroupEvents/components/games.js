import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
const Games = ({gameEvents}) => {
  var wid = Dimensions.get("window").width;
  const GameResult=(home,away)=>{  
    var score = home - away
    var bet = ""
    bet+="("+home+"-"+away+") "
    return bet
}  




const GameScore=(home,away)=>{  
  var score = home - away
  var bet = ""
  score < 0 ? bet +="2" : score > 0 ? bet +="1" : bet += "X"
  return bet
}

  return (
    <View  
    style={{
      flexDirection: "row",
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.darkWhite,
      marginTop: 4,
      width: wid * 0.95,
      height: wid,
      flex:1,
      
    }}>
      
        <View style={{flex:3}}>
            <Text  style={{ fontSize:13 ,top:10,left:10,height:55, color:COLORS.primary, fontWeight:'bold' }}>
                Result game
            </Text>
        </View>
        
        <View style={{flex:8, flexDirection:"row",}}>
  
        {/* <Text style={{  ontSize: SIZES.h3, color:COLORS.primary, borderRightWidth:0.5,borderRadius:50 ,  backgroundColor:COLORS.orange}}> yyyy</Text> */} 
          {gameEvents.map((game, index)=>{
             return (<View  key ={index} style={{flex: 3,flexDirection:"column",height:55, alignSelf:'center',justifyContent:'center'}}>
             
            <Text style={{  flex:1, fontSize: SIZES.h3,  color:COLORS.primary, borderRadius:50 ,left:10, top:5}}> {index + 1}</Text>
            
            <Text style={{ flex:1 ,fontSize: SIZES.h3,left:10, color:COLORS.primary,borderRadius:50}}> {game.gameApi.scoreHomeTeam===null?"-":GameScore(game.gameApi.scoreHomeTeam,game.gameApi.scoreAwayTeam)}</Text>
            {/* <Text style={{ flex:1 ,fontSize: SIZES.h3, color:COLORS.primary,borderRadius:50 }}> {game.gameApi.scoreHomeTeam===null?"-":GameResult(game.gameApi.scoreHomeTeam,game.gameApi.scoreAwayTeam)}</Text> */}
            </View>
            
             )
            })}
            </View>
          </View>











  );
};

export default Games;
