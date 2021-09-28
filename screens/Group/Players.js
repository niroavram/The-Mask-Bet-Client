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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import server from "../../apis/server";
import Background from "../../components/Background";
import Button1 from "../../components/Buttons/Button1";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
import { Switch, TextInput } from "react-native-paper";
import BottomBar from "./compopents/bottomBar";
import Alert from "react-native";

const Players = (props) => {
  const [mygames, setMyGames] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [userId, setuserId] = useState(null);
  const {navigation,players,pageManager,pages} = props
    console.log(players)
  useEffect(() => {
    getUser();
  });
  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("userId");
      setuserId(user);
    } catch (error) {
      Alert.alert("The Mask bet",error);
    }
  };


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
      <TouchableOpacity onPress={profilePage} style={{  flex:1, flexDirection:'row-reverse', marginTop:50, alignSelf:"flex-end", justifyContent:"space-around", borderRadius: SIZES.radius, width:50 }}>
          <Ionicons name="ios-person-sharp" size={33} color={COLORS.primary} alignItems={'right'} paddingtop={10}/>
        </TouchableOpacity>
        <View flexDirection={'row'}  flex={1} justifyContent= {"center" } >
      <Logo  width={0.15} height={0.15}  paddingleft={10} />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: SIZES.h1, color: COLORS.primary, fontWeight:"bold" }}>
          Players
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          borderRadius: 25,
          width: Dimensions.get("window").width * 0.99,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: Dimensions.get("window").height * 0.75,
        }}
      >
      
        <FlatList 
              numColumns={1}
              keyExtractor={(item) => item._id}
              data={players}
              renderItem={({ item,index }) => (
             <View style={{backgroundColor: item._id===userId? COLORS.primary:COLORS.gray2}}>
                    <Text>
                        {item.email}
                    </Text>
             </View>
                )}
                />
      </View>
      <View
        style={{
          flex: 3,
          borderRadius: 25,
          width: Dimensions.get("window").width * 0.9,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: Dimensions.get("window").height * 0.75,
          marginTop: 10,
        }}
      >

      <BottomBar pageManager={pageManager} pages={pages} />

      </View>
    </View>
  );
};

export default Players;
