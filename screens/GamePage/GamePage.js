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


const GamePage = ( props ) => {
  const{GamePage}=props

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
      <BackButton goBack={navigation.goBack} />
      <TouchableOpacity onPress={profilePage} style={{ flexDirection:'row-reverse', marginTop:50, alignSelf:"flex-end", justifyContent:"space-around", borderRadius: SIZES.radius, width:50 }}>
          <Ionicons name="ios-person-sharp" size={33} color={COLORS.primary} alignItems={'right'} paddingtop={10}/>
        </TouchableOpacity>
        <View style ={{flex:1,  justifyContent:"center" }} >
      <Logo  width={0.15} height={0.15}  paddingleft={10} />
      </View>
      
     
      

      
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
           

            < >
            
              <View style={{  alignItems: "center", justifyContent: "center" }}>
              <Text style={{fontSize: SIZES.h3 ,color: COLORS.primary,textAlign: "center"} }>
              Choose the games you want to bet on {"\n"} And start playing </Text>
              </View>
            
            {/* <FlatList
              numColumns={1}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <Game
                  item={item}
                  addGame={addGame}
                  removeGame={removeGame}
                />
              )}
            /> */}
            </>
         
        </View>
     
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
       
        
        {!isNext ? (
          <View style={{ flexDirection: "row"}}>
            <Button1
              text="Next"
              backgroundColor={COLORS.orangePrimary} 
              borderColor={COLORS.orangePrimary}
              nextPage={nextPage}
              width={0.6}
              
          />
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Button1
              text="Back"
              backgroundColor={COLORS.orangePrimary}
              nextPage={nextPage}
              width={0.4}
              borderColor={COLORS.orangePrimary}
            />
            <Button1
              text="Create"
              backgroundColor={COLORS.orangePrimary}
              nextPage={() => postEvent()}
              width={0.4}
              borderColor={COLORS.orangePrimary}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default GamePage;
