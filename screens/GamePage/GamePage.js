import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  I18nManager
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import server from "../../apis/server";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Button1 from "../../components/Buttons/Button1";
import BackButton from "../../components/Buttons/BackButton";
import { Alert } from "react-native";
import Game from "./Game";


const GamePage = ( props ) => {
  const{GamePage,navigation,gamesEvent}=props
  const profilePage = () => {
    navigation.navigate('Profile')  
  };
  
  
  return (
    <View style={{flex: 1,
      width: '100%',
      padding: 2,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.white2}}>
        <View
          style={{
            flex: 5,
            borderRadius: 25,
            backgroundColor: COLORS.white2,
            width: Dimensions.get("window").width * 0.9,
            justifyContent: "center",
            alignItems: "center",
            maxHeight: Dimensions.get("window").height * 0.75,
          }}
        >
           

            
              <View style={{  alignItems: "center", justifyContent: "center" }}>
              <Text style={{fontSize: SIZES.h3 ,color: COLORS.primary,textAlign: "center"} }>
              Choose the games you want to bet on {"\n"} And start playing </Text>
              </View>
            
            <FlatList
              numColumns={1}
              keyExtractor={(item) => item._id}
              date={gamesEvent}
              renderItem={({ item }) => (
                <Game
                  game={item.gameApi}
                  addGame={addGame}
                  removeGame={removeGame}
                />
              )}
            />
          
         
        </View>
     
  
    </View>
  );
};

export default GamePage;
