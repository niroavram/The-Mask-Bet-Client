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
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import axios from "axios";
import Button1 from "../../components/Buttons/Button1";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
import Btn from "../../components/Btn";
import Games from "./components/games";
import BottomBar from "../Group/compopents/bottomBar";
import Players from "./components/player";
import { Feather } from '@expo/vector-icons';

const GroupEvents = (props) => { 
  const [hasAchance, setHasAchance] = useState([]);
  const [losers, setLosers] = useState([]);
  const [isBuckerDone, setIsBucketDone] = useState(null);
  const { navigation, pageManager, pages, TotoGameActive,getMyGroup } = props;
  const [gamesEvent, setGamesEvents] = useState([]);


  const bucketUsers = (event) => {
    let user = event.userBets;
    let games = event.gamesEvent;
    let isLoser = false;
    let index = 0;
    let lose = []
    let win = []
    for (let i = 0; i < user.length; i++) {
      index = 0;
      isLoser = false;
      while (index < games.length - 1 && !isLoser) {
        if (games[index].gameApi.scoreHomeTeam === null) {
          index = games.length;
        } else {
          var result = games[index].gameApi.scoreHomeTeam - games[index].gameApi.scoreHomeTeam
              if(result>0){
                user[i].gameEvents[index].bet[0]===1?isLoser=true:isLoser=false
              }else if( result<0){
                user[i].gameEvents[index].bet[2]===1?isLoser=true:isLoser=false
              }else{
                user[i].gameEvents[index].bet[1]===1?isLoser=true:isLoser=false
              }
        }
        index++;
      }
      isLoser===true? lose.push(user[i]):win.push(user[i])
    }
    setIsBucketDone(true);
    setHasAchance(win)
    setLosers(lose)
  };
  if (isBuckerDone === null && TotoGameActive.length>0 ) {
    bucketUsers(TotoGameActive[0].events[TotoGameActive[0].events.length - 1]);
    setGamesEvents(TotoGameActive[0].events[TotoGameActive[0].events.length - 1].gamesEvent)

  }
  const GamePage = () => {
    navigation.navigate("GamePage");
  };
  
  const profilePage = () => {
    navigation.navigate("Profile");
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        padding: 2,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white2,
      }}
    >
      <BackButton goBack={navigation.goBack} />
      <TouchableOpacity onPress={profilePage} style={{  flex:2, flexDirection:'row-reverse', marginTop:50, alignSelf:"flex-end", justifyContent:"space-around", borderRadius: SIZES.radius, width:50 }}>
          <Ionicons name="ios-person-sharp" size={33} color={COLORS.primary} paddingtop={10}/>
        </TouchableOpacity>
      <TouchableOpacity onPress={getMyGroup} style={{position: 'absolute',top: 55}} >
      <Feather name="refresh-cw" size={30} color={COLORS.primary} paddingtop={15}  />
      </TouchableOpacity>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Logo width={0.15} height={0.15} paddingleft={10} />
      </View>
      <TouchableOpacity onPress={GamePage} style={{backgroundColor:COLORS.orangePrimary,  flex:1, flexDirection:'row', alignItems:"center", justifyContent:"center", borderRadius: SIZES.radius, width:'50%', height:30 }}>
        <Text style={{fontSize: SIZES.h2,color: COLORS.white,}}> See all Games</Text>
        </TouchableOpacity>
      {TotoGameActive.length>0 && TotoGameActive[0].events.length>0?
       <View style={{flex: 14}} >
       <View
         style={{
           flexDirection: "row",
           alignItems: "center",
           justifyContent: "space-between",
           flex: 2,
           left: 20, }}
       >
         <Text
           style={{
             fontSize: SIZES.h3,
             color: COLORS.primary,
             fontWeight: "bold",
             flex: 1,
           }}
         >
           Round: {TotoGameActive!=null? TotoGameActive[0].events.length:0}
         </Text>
         <Text
           style={{
             fontSize: SIZES.h3,
             color: COLORS.primary,
             fontWeight: "bold",
             flex: 1,
           }}
         >
           Price:{" "}
           {TotoGameActive[0].events[TotoGameActive[0].events.length - 1].price}
         </Text>
         <Text
           style={{
             fontSize: SIZES.h3,
             color: COLORS.primary,
             fontWeight: "bold",
             flex: 1,
           }}
         >
           Doubles:{" "}
           {
             TotoGameActive[0].events[TotoGameActive[0].events.length - 1]
               .doubles
           }
         </Text>
       </View>
       <View style={{ flex: 15}}>
         <View style={{ flex: 1}}>
         <Games
           gameEvents={
             TotoGameActive[0].events[TotoGameActive[0].events.length - 1]
               .gamesEvent
           }
         />
         </View>
   
         <View
           style={{
             flex: 2,
             backgroundColor: COLORS.white2,
             flexDirection: "row",
           }}
         >
           <Text
             style={{
               fontSize: SIZES.h3,
               left: 20,
               color: COLORS.primary,
               fontWeight: "bold",
               top: 40,
             }}
           >
             Has A Chance
           </Text>
         </View>
         <FlatList
               numColumns={1}
               keyExtractor={(item) => item._id}
               data={hasAchance}
               renderItem={({ item }) => (
                 <Players
                   item={item}
                   gamesEvent={TotoGameActive[0].events[TotoGameActive[0].events.length - 1].gamesEvent}
                   isWinner={true}
                 />
                 )}
                 />
  
         <View
           style={{
             flex: 2,
             backgroundColor: COLORS.white2,
             flexDirection: "row",
           }}
         >
           <Text
             style={{
               fontSize: SIZES.h3,
               left: 20,
               color: COLORS.primary,
               fontWeight: "bold",
               top: 40,
             }}
           >
             Mmmmmm Maybe Next Time
           </Text>
         </View>
         <FlatList
               numColumns={1}
               keyExtractor={(item) => item._id}
               data={losers}
               renderItem={({ item }) => (
                 <Players
                   item={item}
                   gamesEvent={TotoGameActive[0].events[TotoGameActive[0].events.length - 1].gamesEvent}
                   isWinner={false}
                 />
                 )}
                 />
       </View>
       </View>:
       <View style={{flex:12}} >
   <Text
             style={{
               fontSize: SIZES.largeTitle,
               left: 20,
               color: COLORS.primary,
               fontWeight: "bold",
               top: 40,
             }}
           >
           There is no event yet
           </Text>
       </View>
}
     

      <View style={{ flex: 3 }}>
        <BottomBar pageManager={pageManager} pages={pages} />
      </View>
    </View>
  );
};

export default GroupEvents;
