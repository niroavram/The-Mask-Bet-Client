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
const Games = ({game,addGame,removeGame,gameEvents}) => {
  var wid = Dimensions.get("window").width;
  const [index, setIndex] = useState(0);
  const [isSlected, setIsSlected] = useState(false);
  const selctItem = () => {
      if(isSlected){
        setIsSlected(false)
         
      }else{
        setIsSlected(true)
        
      }
  };

  const GameResult=(score)=>{  
    var bet = "0"
    score < 0 ? bet ="2" : score > 0 ? bet ="1" : bet = "X"
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
      flex:1
      
    }}>
        <View style={{flex:4,}}>
            <Text  style={{ fontSize: SIZES.h3 ,left:10, top:27, color:COLORS.primary, fontWeight:'bold' }}>
                Result game
            </Text>
        </View>
        
        <View style={{flex:6, flexDirection:"row",}}>
        {/* <Text style={{  ontSize: SIZES.h3, color:COLORS.primary, borderRightWidth:0.5,borderRadius:50 ,  backgroundColor:COLORS.orange}}> yyyy</Text> */} 
          {gameEvents.map((game, index)=>{
             return (<View  key ={index} style={{flex: 1,flexDirection:"column", flexWrap:"wrap"}}>
            <Text  style={{  flex:1, fontSize: SIZES.h3,  color:COLORS.primary, borderRadius:50 , top:5}}> {index + 1}</Text>
            <Text style={{ flex:1 ,fontSize: SIZES.h3, color:COLORS.primary, borderRightWidth:0.5,borderRadius:50 }}> {game.gameApi.scoreHomeTeam===null?"-":GameResult(game.gameApi.scoreHomeTeam-game.gameApi.scoreAwayTeam)}</Text>
            </View>
             )
            
            //  (<View style={{flex: 1,flexDirection:"column",backgroundColor:COLORS.orange }} key={index}>
            //  <Text  style={{ fontSize: SIZES.h3, color:COLORS.primary, borderRadius:50 }}>nnnnn {index + 1}</Text>
            //   </View>)
             //console.log(index))
            // <TouchableOpacity key={index} style={{flex:2, flexDirection:"column", maxWidth:wid*0.1, justifyContent:"center", borderLeftWidth:1}}>
            //   <Text style={{ fontSize: SIZES.h3, color:COLORS.primary, borderRightWidth:0.5,borderRadius:50 }}> {index + 1}</Text>
            //   <Text style={{ fontSize: SIZES.h3, color:COLORS.primary, borderRightWidth:0.5,borderRadius:50 }}> {game.gameApi.scoreHomeTeam===null?"-":GameResult(game.gameApi.scoreHomeTeam-game.gameApi.scoreAwayTeam)}</Text>

            // </TouchableOpacity>

            })}
            
            
            </View>
           
        
          </View>











  );
};

export default Games;
