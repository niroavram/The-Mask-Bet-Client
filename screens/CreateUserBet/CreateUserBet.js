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
import BackButton from "../../components/Buttons/BackButton";
import { Switch, TextInput } from "react-native-paper";

const CreateUserBet = ({ navigation }) => {
  const [mygames, setMyGames] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [isMask, setIsMask] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [doubles, setDoubles] = useState(3);
  const [triangles, setTraingles] = useState(1);
  const [price, setPrice] = useState(30);
  const [group_id, setgroup_id] = useState("610639d3cb8f6f0015bf77b5");

  useEffect(() => {
    getUser();
  });
  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("userToken");
      setUserToken(user);
    } catch (error) {
      alert(error);
    }
  };

  const totoGamos = {
    isActive: true,
    totalPrice: 0,
    round: 1,
    events: [
      {
        gamesEvent: [
          {
            startHomeTeam: 0,
            startAwayTeam: 0,
            bet: [0, 0, 0],
            _id: "6140726605c0e0001639c673",
            homeTeam: "Strasbourg",
            awayTeam: "Metz",
            gameApi: "61388a3d5e2ec36b205314ee",
            startGame: "2021-09-17T19:00:00.000Z",
            __v: 0,
          },
          {
            startHomeTeam: 0,
            startAwayTeam: 0,
            bet: [0, 0, 0],
            _id: "6140726605c0e0001639c674",
            homeTeam: "Lens",
            awayTeam: "Lille",
            gameApi: "61388a3d5e2ec36b205314f1",
            startGame: "2021-09-18T15:00:00.000Z",
            __v: 0,
          },
          {
            startHomeTeam: 0,
            startAwayTeam: 0,
            bet: [0, 0, 0],
            _id: "6140726605c0e0001639c675",
            homeTeam: "Saint Etienne",
            awayTeam: "Bordeaux",
            gameApi: "61388a3d5e2ec36b205314f2",
            startGame: "2021-09-18T19:00:00.000Z",
            __v: 0,
          },
          {
            startHomeTeam: 0,
            startAwayTeam: 0,
            bet: [0, 0, 0],
            _id: "6140726605c0e0001639c676",
            homeTeam: "Nice",
            awayTeam: "Monaco",
            gameApi: "61388a3d5e2ec36b205314f3",
            startGame: "2021-09-19T11:00:00.000Z",
            __v: 0,
          },
          {
            startHomeTeam: 0,
            startAwayTeam: 0,
            bet: [0, 0, 0],
            _id: "6140726605c0e0001639c677",
            homeTeam: "Angers",
            awayTeam: "Nantes",
            gameApi: "61388a3d5e2ec36b205314f4",
            startGame: "2021-09-19T13:00:00.000Z",
            __v: 0,
          },
        ],
      },
    ],
    userBets: [],
    _id: "6140726605c0e0001639c678",
    firstGame: "2021-09-17T19:00:00.000Z",
    lastGame: "2021-09-19T13:00:00.000Z",
    isMask: true,
    doubles: 3,
    triangles: 1,
    price: 30,
    __v: 0,
  };

  const postUserBet = () => {
    server
      .post(
        "create-userbets",
        { isMask, doubles, triangles, price, group_id, isActive, mygames },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userToken,
          },
        }
      )
      .then(function (res) {
        console.log(res);
        alert("Create is successfully!", "Now tell your friends");
      })
      .catch(function (error) {
        console.log(mygames.length);
        alert("Bad move", "try again");
        console.log(error);
      });
  };
  // const postEvent = () =>{

  //   console.log( "isMask",typeof isMask, "doubles", typeof doubles,"triangles",typeof triangles,"price",typeof price,"group_id",typeof group_id,"isActive",typeof isActive )
  // }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: SIZES.largeTitle, color: COLORS.primary }}>
          Place Your Bet
        </Text>
      </View>
      <View
        style={{
          flex: 6,
          borderRadius: 25,
          backgroundColor: COLORS.lightGray1,
          borderWidth: 1,
          shadowColor: COLORS.gray3,
          shadowOpacity: 0.5,
          shadowRadius: 25,
          width: Dimensions.get("window").width * 0.9,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: Dimensions.get("window").height * 0.75,
        }}
      ></View>
    </Background>
  );
};

export default CreateUserBet;
