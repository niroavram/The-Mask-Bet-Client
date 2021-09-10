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
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Game from "./Game";
import SvgUri from 'react-native-svg-uri';
import moment from "moment";
import { List } from "react-native-paper";
import { COLORS, SIZES } from "../../../constants";
const Leagues = (props) => {
  const { item,addGame,removeGame } = props;
  var games = item.upcoming;
  var size = games.length || 0;
  var wid = Dimensions.get("window").width;

  const leagueGames = ()=>{
    return ( 
      <View style={{ width: wid }}>
      <TouchableOpacity
      style={{
        flexDirection: "row",
        borderWidth: 0.5,
        borderRadius: SIZES.radius,
        alignItems: "center",
        padding: 6,
      }}
    >
      {item.flag.includes(".svg") ? (
        <View style={{ borderRadius: 15 ,flex:1}}>
        <SvgUri
          source={{ uri: item.flag }}
          width="30"
          height="30"
          
/>
        </View>
      ) : (
        <Image
          source={{ uri: item.flag }}
          style={{ width: 1, height: 1, padding: SIZES.padding }}
        />)}
     
      <Text style={{ fontSize: SIZES.h2,flex:5 }}> {item.league_name}</Text>
    </TouchableOpacity>
    {games.map((game)=>{
      return(
        <Game game={game} key={game._id} addGame={addGame} removeGame={removeGame} />
      )
    })}
     </View>) 
  }
  return (
    <View>
      {size>0?leagueGames():<Text> </Text>}

    </View>
  );
};

export default Leagues;
