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
const Players = (props) => {
  var wid = Dimensions.get("window").width;
  const [index, setIndex] = useState(0);
  const{userBets,gamesEvent}= props;

  const [isSlected, setIsSlected] = useState(false);
  const selctItem = () => {
      if(isSlected){
        setIsSlected(false)
         
      }else{
        setIsSlected(true)
        
      }
  };

  const [isChangeUserColor, setIsChangeUserColor] = useState(false);
  // const ChangeUserColor = () => {
  //   if (myUser[0].id == 1 ){
  //   return true
  // }
  //   return false
  // }
  const GameResult=(score)=>{ 
    
      var bet = ""
      score[0]?bet+="1 ":''
      score[1]?bet+="X ":''
      score[2]?bet+="2 ":''
      return bet
  }



  return (
            <View style={{flex:1, marginTop: 4,width: wid * 0.95}}>
                      {/* <View style= {{flexDirection: "row", backgroundColor: ChangeUserColor()? COLORS.primaryLight :COLORS.lightGray1, borderLeftWidth:1, borderRightWidth:1, borderBottomWidth:1}}> */}

              {userBets.map((user, index)=>{
                return (
                  <View  key ={index} style={{flexDirection:"row", marginTop:10, borderRadius: SIZES.radius,backgroundColor: COLORS.darkWhite, justifyContent:'center', flexWrap:'wrap'}}>
                    <Text  style={{ flex:3, fontSize: SIZES.h3,fontWeight:'bold', color:COLORS.primary, borderRadius:50 , marginTop:10, left:5,  }}>{user.mask}</Text>
                    {user.gameEvents.map((gameEvent,_id)=>{
                      return (
                        <View  key ={gameEvent._id} style={{flex: 1,flexDirection:"column", height:wid *0.05 , alignItems:'center',justifyContent:'center', borderRadius: SIZES.radius, backgroundColor:COLORS.white4, margin:3,marginTop:10, }}>
                          <Text style={{ flex:5 ,fontSize: SIZES.h3, color:COLORS.primary,  alignItems:'center',justifyContent:'center' }}> {gameEvent.bet===null?"-":GameResult(gameEvent.bet)}</Text>
                        </View>
                          )})}
                  </View>
                )})}
            </View>
          
           
     
     

  );
};

export default Players;
