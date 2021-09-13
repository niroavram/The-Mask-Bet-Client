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
const Players = ({game,addGame,removeGame}) => {
  var wid = Dimensions.get("window").width;
  const [isSlected, setIsSlected] = useState(false);
  const selctItem = () => {
      if(isSlected){
        setIsSlected(false)
         
      }else{
        setIsSlected(true)
        
      }
  };
  const [myUser, setUser] = useState([
    { name: "Avi Nimni", id: 1},
  ]);
  const [isChangeUserColor, setIsChangeUserColor] = useState(false);
  const ChangeUserColor = () => {
    if (myUser[0].id == 1 ){
    return true
  }
    return false
  }
  const GameResult=(score)=>{  
      var bet = ""
      score[0]?bet+="1":''
      score[1]?bet+="X":''
      score[2]?bet+="2":''
      return bet
  }

  


  return (
    <View style={{ alignItems:"center", justifyContent:"space-between"}}>
        <View style= {{flexDirection: "row", backgroundColor: ChangeUserColor()? COLORS.primaryLight :COLORS.lightGray1, borderLeftWidth:1, borderRightWidth:1, borderBottomWidth:1}}>
        <View style={{flex:3}}>
            <Text  style={{ fontSize: SIZES.h3 }}>
                Avi nimni
            </Text>
        </View> 
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center",justifyContent:"center", borderLeftWidth:1}}>
            <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                {GameResult([0,1,1])}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center", justifyContent:"center", borderLeftWidth:1}}>
          <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                  {GameResult([0,0,1])}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center",justifyContent:"center", borderLeftWidth:1}}>
            <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                {GameResult([0,1,0])}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center", justifyContent:"center", borderLeftWidth:1}}>
           <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                {GameResult([1,0,0])}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center", justifyContent:"center", borderLeftWidth:1}}>
          <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                {GameResult([1,1,])}
          </Text>
        </TouchableOpacity>
        </View>
        <View style= {{flexDirection: "row", backgroundColor: ChangeUserColor()? COLORS.primaryLight :COLORS.lightGray1, borderLeftWidth:1, borderRightWidth:1, borderBottomWidth:1}}>

        <View style={{flex:3}}>
            <Text  style={{ fontSize: SIZES.h3 }}>
                Niro
            </Text>
        </View> 
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center",justifyContent:"center", borderLeftWidth:1}}>
            <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                {GameResult([0,1,1])}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center", justifyContent:"center", borderLeftWidth:1}}>
          <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                  {GameResult([0,0,1])}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center",justifyContent:"center", borderLeftWidth:1}}>
            <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                {GameResult([0,1,0])}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center", justifyContent:"center", borderLeftWidth:1}}>
           <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                {GameResult([1,0,0])}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1,alignItems:"center", justifyContent:"center", borderLeftWidth:1}}>
          <Text style={{ fontSize: SIZES.h3, fontWeight:"bold" }}>
                {GameResult([1,1,])}
          </Text>
        </TouchableOpacity>
        </View>
          
      </View>

      











  );
};

export default Players;
