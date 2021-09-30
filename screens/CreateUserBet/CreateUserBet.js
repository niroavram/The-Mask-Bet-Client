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
import Alert from "react-native";
import axios from 'axios'

const CreateUserBet = ({ navigation,route }) => {
  const [mygames, setMyGames] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [mask, setMask] = useState("Mask");
  const [event, setEvent] = useState(route.params.event);
  const [userToken, setUserToken] = useState(null);
  const [doubles, setDoubles] = useState(route.params.event.doubles);
  const [triangles, setTraingles] = useState(route.params.event.triangles);
  const [gamesEvent, setGamesEvents] = useState(route.params.event.gamesEvent);
  const [userBets, setUserBet] = useState(null);
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
if(userBets===null){
  setUserBet(gamesEvent)
}

  const postUserBet = () => {

    server.put("create-userbets",
        { mask, doubles, triangles, eventId: event._id, gameEvents: userBets },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken , 
          },
        }
      )
      .then(function (res) {
        navigation.navigate("Group",{group: route.params.group})
      })
      .catch(function (error) {
console.log(error)
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
          flex: 9,
          borderRadius: 25,
          width: Dimensions.get("window").width * 0.99,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: Dimensions.get("window").height * 0.75,
        }}
      >
        <View style={{flexDirection: 'row', alignContent:'center', marginTop:10}}>
          <Text style={{ flex:1 ,fontSize: SIZES.h3, color: COLORS.primary, fontWeight:"bold", marginLeft:50 }}> Doubles : {event.doubles}</Text>
          <Text style={{ flex:1, fontSize: SIZES.h3, color: COLORS.primary, fontWeight:"bold"}}> Round :4</Text>
        </View>
        <FlatList 
              numColumns={1}
              keyExtractor={(item) => item._id}
              data={event.gamesEvent}
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
          flex: 5,
          borderRadius: 25,
          width: Dimensions.get("window").width * 0.9,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: Dimensions.get("window").height * 0.75,
          marginTop: 10,
        }}
      >
      <View style={{flex:1,alignItems:'center'}}>
      <View style={{flexDirection: "row",justifyContent: "center",flex:2}}>
                <Text style={{ fontSize: SIZES.h3, color:COLORS.primary, fontWeight:"bold", top:23 }}>Mask </Text>
                <TextInput
                  style={{
                    minWidth: 60,
                    maxHeight: 40,
                    color:COLORS.primary,
                    fontWeight:'bold',
                    placeholderTextColor:COLORS.primary,
                    fontSize:18,
                    textAlign:'center'
                  }}
                  value={mask}
                  onChangeText={setMask}
                />
              </View>
          <View style={{ flexDirection:'row',marginTop:10 ,marginBottom: 10}}>  
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary, fontWeight:"bold" }}>   First Game : </Text> 
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary }}> {moment(event.firstGame).format("dddd, h:mm a")}  </Text>
          </View>
          <View style={{ flexDirection:'row',marginBottom: 10}}>
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary, fontWeight:"bold" }}> Last Game : </Text> 
              <Text style={{ fontSize: SIZES.h3, color: COLORS.primary }}> {moment(event.lastGame).format("dddd, h:mm a")}</Text>
              
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
