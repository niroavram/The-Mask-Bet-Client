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

const Group = ({ navigation, route }) => {
  const [groupDet, setgroupDet] = React.useState("");
  const [totoGames, setTotoGames] = useState(null);
  const [isActiveGame, setisActiveGame] = useState(false);
  const [_id, setId] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("userToken");
      setUserToken(user);
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
  };

  const createEventPage = () => {
    navigation.navigate("CreateEvent", { group_id: _id });
  };
  const createUserBets = () => {
    navigation.navigate("CreateUserBet");
  };
  const geTotoGame = () => {
    server
      .get(
        "get-toto-game",
         {_id},
         {headers: "application/json"}
      )
      .then(function (res) {
        setTotoGames(res.data)
        console.log(res)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (totoGames === null && _id !=null) {
    geTotoGame();
  }
  // console.log("_id", _id, " totoGame ", totoGames);
  // if (totoGames != null) {
  //   someActive();
  // }
  // const someActive = () => {
  //   console.log(totoGames.some((a) => a.isActive));
  // };
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
      <Button1
        style={{ flex: 1 }}
        text="Create Event"
        backgroundColor={COLORS.lightOrange}
        nextPage={createEventPage}
        width={0.8}
      />
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
