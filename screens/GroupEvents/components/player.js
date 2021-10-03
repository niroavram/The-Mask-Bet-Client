import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import moment from "moment";
import { COLORS, SIZES } from "../../../constants";
import GameChecker from "./gameChecker";
const Players = (props) => {
  var wid = Dimensions.get("window").width;
  const{item,gamesEvent,isWinner,firstGame}= props;

  return (
            <View style={{ width: wid * 0.98}}>    
                  <View   style={{flexDirection:"row", borderRadius: SIZES.radius-10,backgroundColor: isWinner? COLORS.darkWhite : COLORS.orangePrimary, justifyContent:'center', flexWrap:'wrap'}}>
                    <Text  style={{ flex:3, fontSize: SIZES.h3,fontWeight:'bold', color:COLORS.primary, borderRadius:50 , marginTop:10, left:5}}>{item.mask}</Text>
                    <View style={{flex:10}} >
                    <FlatList
              numColumns={gamesEvent.length}
              keyExtractor={(item) => item._id}
              data={item.gameEvents}
              renderItem={({ item }) => (  
                  <GameChecker
                  game={item}
                  gamesEvent={gamesEvent}
                  firstGame={firstGame}
                />
                )}
                />
                    </View>
                  </View>
            </View>

  )
};

export default Players;
