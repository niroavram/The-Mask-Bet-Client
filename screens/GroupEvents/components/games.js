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
const Games = ({game,addGame,removeGame}) => {
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
    <View style={{flexDirection: "row", backgroundColor: COLORS.lightGray1, alignItems:"center", justifyContent:"space-between",borderWidth:1}}>
        <View style={{flex:3}}>
            <Text  style={{ fontSize: SIZES.h3 }}>
                Players
            </Text>
        </View>
        
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1, justifyContent:"center", borderLeftWidth:1}}>
            <Text style={{ fontSize: SIZES.h3 }}>
                1
            </Text>
            {/* <Image
        source={{ uri: 'https://media.api-sports.io/football/teams/85.png' }}
        style={{
            width: 5,
            height: 5,
            borderRadius: 50,
            padding: SIZES.padding,
        }}
        />
        <Text  style={{ fontSize: SIZES.h3 }}>
             -
        </Text>
         <Image
        source={{ uri: 'https://media.api-sports.io/football/teams/85.png' }}
        style={{
        width: 5,
        height: 5,
        borderRadius: 50,
        padding: SIZES.padding,
      }}
     /> */}

        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1, justifyContent:"center", borderLeftWidth:1}}>
        <Text style={{ fontSize: SIZES.h3 }}>
               2
           </Text>

        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1, justifyContent:"center", borderLeftWidth:1}}>
        <Text style={{ fontSize: SIZES.h3 }}>
            3
           </Text>

           </TouchableOpacity>
           <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1, justifyContent:"center", borderLeftWidth:1}}>
           <Text style={{ fontSize: SIZES.h3 }}>
               4
           </Text>

        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, flexDirection:"row", maxWidth:wid*0.1, justifyContent:"center", borderLeftWidth:1}}>
        <Text style={{ fontSize: SIZES.h3 }}>
            5
           </Text>

        </TouchableOpacity>  
          </View>











  );
};

export default Games;
