import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import axios from "axios";
import Button1 from "../../components/Buttons/Button1";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
import Btn from "../../components/Btn";
import server from "../../apis/server";
import BottomBar from "./compopents/bottomBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "react-native-reanimated";

const Group = ({ navigation, route }) => {
  const [groupDet, setgroupDet] = React.useState("");
  const [totoGames, setTotoGames] = useState(null);
  const[totoGame_id, setTotoGameId] = useState(null);
  const [isAdmin, setisAdmin] = useState(false);
  const [TotoGameActive, setTotoGameActive] = useState(null);
  const [group_id, setId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);


  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("userToken");
      let user_id = await AsyncStorage.getItem("userId");
      setUserToken(user);
      setUserId(user_id)
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    groupDetGet();
    getUser();
  });
  const groupDetGet = () => {
    route.params.groupin
      ? setgroupDet(route.params.groupin)
      : setgroupDet(route.params.group.data.totogroup);
    setId(groupDet._id);
    setTotoGames(groupDet.totoGames)
    
    if(groupDet.admins!=undefined||null){
      setisAdmin((groupDet.admins).some(id => id =userId))
    }
  if(totoGames!=null && TotoGameActive === null){
    setTotoGameActive(totoGames.filter((a) => a.isActive))
  }
  };

  console.log(TotoGameActive)
  console.log("is User Admin : ",isAdmin)
  const createEventPage = () => {
    if(TotoGameActive.length>0)
    {navigation.navigate("CreateEvent", { totogame: totoGame_id })}
    else {
      postTotoGame
      navigation.navigate("CreateEvent", { totogame: totoGame_id })}
  };
  const createUserBets = () => {
    navigation.navigate("CreateUserBet");
  };
  const postTotoGame = () => {
    server.post(
        'create-totogame',
       { group_id },
        { headers: { 
          'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken , 
  } }
      )
      .then(function (res) {
        console.log(res)
        navigation.navigate("")
        alert("Create is successfully!", "Now tell your friends");
      })
      .catch(function (error) {
        console.log(mygames.length )
        alert("Bad move", "try again");
        console.log(error);
      });
  };
  // if (totoGames != null) {
  //   someActive()
  //   isUserAdmin()
  // }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style={{ flex: 2 }}></View>

      <View
        style={{
          flex: 8,
          backgroundColor: COLORS.white3,
          borderRadius: SIZES.radius,
          width: Dimensions.get("window").width * 0.9,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />

        <Text style={{ fontSize: SIZES.h1, color: COLORS.black }}>
          name {groupDet.name}
        </Text>
        <Text style={{ fontSize: SIZES.h1, color: COLORS.black }}>
          Code : {groupDet.code}
        </Text>
        <View></View>
      </View>
      {isAdmin?    
      <Button1
        style={{ flex: 1 }}
        text="Create Event"
        backgroundColor={COLORS.lightOrange}
        nextPage={createEventPage}
        width={0.8}
      />:<View></View>}
  
      <Button1
        style={{ flex: 1 }}
        text="Place Your Bet"
        backgroundColor={COLORS.lightOrange}
        nextPage={createUserBets}
        width={0.8}
      />

      <BottomBar />
    </Background>
  );
};

export default Group;
