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
import moment from "moment";
import Game from "./components/Game";
import axios from 'axios'
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
          _id: "6140726600e0001639c676",
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
          _id: "6140726605c0e00639c67",
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
  _id: "6140726605c0e000169c678",
  firstGame: "2021-09-17T19:00:00.000Z",
  lastGame: "2021-09-19T13:00:00.000Z",
  isMask: true,
  doubles: 3,
  triangles: 1,
  price: 30,
  __v: 0,
};
const CreateUserBet = ({ navigation }) => {
  const [mygames, setMyGames] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [mask, setMask] = useState("Jordan");
  const [isActive, setIsActive] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [doubles, setDoubles] = useState(3);
  const [triangles, setTraingles] = useState(0);
  const [gamesEvent, setGamesEvents] = useState([]);
  const [userBets, setUserBet] = useState(totoGamos.events[0].gamesEvent);
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

 

  const postUserBet = () => {

    server.put("create-userbets",
        { mask, doubles: totoGamos.doubles, triangles, eventId: "61419b9f63689e00168d30fb", gameEvents: userBets },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken , 
          },
        }
      )
      .then(function (res) {
        console.log(res);
        alert("Create is successfully!", "Now tell your friends");
      })
      .catch(function (error) {
        alert(error, "Sss");
        console.log(error);
      });
  };

  const profilePage = () => {
    navigation.navigate('Profile')  
  };

  const choosenBet = (game_id,indexBet) => {

    let gamesUpdate = userBets.map(game=>{
      if(game._id===game_id){
        game.bet[indexBet] === 1?game.bet[indexBet] =0:game.bet[indexBet] =1
        return game
      }else{
        return game
      }
    })
    setUserBet(gamesUpdate)
    // setUserBet(userBets.filter((a) => a.gameApi != gameEvent.gameApi))
    // setUserBet([...userBets,gameEvent])

  };
// console.log(userBets)
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
          Place Your Bet
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
        <View style={{flexDirection: 'row', alignContent:'center', marginTop:10}}>
          <Text style={{ flex:1 ,fontSize: SIZES.h3, color: COLORS.primary, fontWeight:"bold", marginLeft:50 }}> Doubles : {totoGamos.doubles}</Text>
          <Text style={{ flex:1, fontSize: SIZES.h3, color: COLORS.primary, fontWeight:"bold"}}> Round : {totoGamos.events.length}</Text>
        </View>
        <FlatList 
              numColumns={1}
              keyExtractor={(item) => item._id}
              data={totoGamos.events[0].gamesEvent}
              renderItem={({ item,index }) => (
                <Game
                  item={item}
                  index={index}
                  choosenBet={choosenBet}
                />
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
      <View style={{flex:1,alignItems:'center'}}>
          <View style={{ flexDirection:'row',marginTop:10 ,marginBottom: 10}}>  
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary, fontWeight:"bold" }}>   First Game : </Text> 
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary }}> {moment(totoGamos.firstGame).format("dddd, h:mm a")}  </Text>
          </View>
          <View style={{ flexDirection:'row',marginBottom: 10}}>
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary, fontWeight:"bold" }}> Last Game : </Text> 
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary }}> {moment(totoGamos.lastGame).format("dddd, h:mm a")}</Text>
              
            </View>
            <View>
            <Button1 text="Create" backgroundColor={COLORS.orangePrimary} borderColor={COLORS.orangePrimary}  width={0.6}  nextPage={postUserBet} />
            </View>
      </View>

      </View>
    </View>
  );
};

export default CreateUserBet;
