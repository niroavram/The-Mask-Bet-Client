import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import Button1 from "../../components/Buttons/Button1";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
import GroupEvents from "../GroupEvents/GroupEvents";
import server from "../../apis/server";
import BottomBar from "./compopents/bottomBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Players from "./Players";
import { Feather } from '@expo/vector-icons';
window.navigator.userAgent = 'react-native'
import io from 'socket.io-client/dist/socket.io'

const Group = ({ navigation, route }) => {
  const [groupDet, setgroupDet] = React.useState("");
  const [group, setGroup] = useState(null);
  const [totoGames, setTotoGames] = useState(null);
  const [isAdmin, setisAdmin] = useState(false);
  const [TotoGameActive, setTotoGameActive] = useState(null);
  const [group_id, setId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [buttonCheck, setBottunCheck] = useState(0);
  const [isPlaceBet, setIsPlaceBet] = useState(false);
  const [isCreateEvent, setIsCreateEvent] = useState(false);

  const [pages, setPages] = useState({
    home: true,
    event: false,
    games: false,
    players: false,
  });

  const pageManager = (pageBofore, nextPage) => {
    setPages({ ...pages, [pageBofore]: false, [nextPage]: true });
  };

  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("userToken");
      let user_id = await AsyncStorage.getItem("userId");
      setUserToken(user);
      setUserId(user_id);
    } catch (error) {
      Alert.alert("The Mask bet",error);
    }
  };
  
  useEffect(() => {
    Promise.all([
      groupDetGet(),
      getUser()
    ])
  });
  const groupDetGet = () => {
    route.params.group
      ? setgroupDet(route.params.group)
      : setgroupDet(route.params.groupin.data.totogroup);
    setId(groupDet._id);
    setTotoGames(groupDet.totoGames);
    if (groupDet.admins != undefined || null) {
      setisAdmin(groupDet.admins.some((id) => (id = userId)));
    }
  };
  if(buttonCheck!=3 && group!=null){
    if(group.totoGames.length===0||(TotoGameActive!=null &&Date.parse(TotoGameActive[0].events[TotoGameActive[0].events.length-1].firstGame)<Date.now())){
      setIsCreateEvent(true)
    }
    if(TotoGameActive!=null&&TotoGameActive.length>0&&TotoGameActive[0].isActive&&TotoGameActive[0].events.length>0
      &&Date.parse(TotoGameActive[0].events[TotoGameActive[0].events.length-1].firstGame)>Date.now()&&
      (TotoGameActive[0].events[TotoGameActive[0].events.length-1].userBets.length<1 ||!TotoGameActive[0].events[TotoGameActive[0].events.length-1].userBets.some(user=>user.created_by._id===userId))){ 
        console.log(  )
        setIsPlaceBet(true)
      }
      setBottunCheck(buttonCheck+1)
  }
  if (group != null && TotoGameActive === null) {
    setTotoGameActive((group.totoGames).filter((a) => a.isActive));
  }

  const getMyGroup = () => {
    server
      .get("my-toto-group", {
        headers: { Authorization: "Bearer " + userToken },
      })
      .then(function (res) {
        setGroup(
          ...res.data.totogroup.filter((group) => group._id === group_id)
        );
        if(group!=null){
          setTotoGameActive( group.totoGames.filter((a) => a.isActive));
        }
        setBottunCheck(0)
        // console.log(group)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  
  if (group === null && group_id != null) {
    getMyGroup();
  }
  const createEventPage = () => {
    clearInterval()
    if (TotoGameActive.length > 0) {
      navigation.navigate("CreateEvent", { totogame: TotoGameActive[0]._id, group: group });
    } else {
      postTotoGame();
    }
  };

  const createUserBets = () => {
    clearInterval()
    const activeGame = group.totoGames.filter((game) => game.isActive);
    navigation.navigate("CreateUserBet", { event:  activeGame[0].events[ activeGame[0].events.length-1] , group: group});
  };
  const postTotoGame = () => {
    server
      .post(
        "create-totogame",
        { group_id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userToken,
          },
        }
      )
      .then(function (res) {
        setTotoGameActive(res.data.totoGames[res.data.totoGames.length - 1])
        navigation.navigate("CreateEvent", {
          totogame: res.data.totoGames[res.data.totoGames.length - 1], group: group
        });
      })
      .catch(function (error) {
        Alert.alert("The Mask bet","Bad move, try again");
      });
  };
  return (
    <View style={{ flex: 1 }}>
      {pages.home ? (
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
      <TouchableOpacity onPress={()=>getMyGroup()} style={{position: 'absolute', top: 45, right: 15,}} >
      <Feather name="refresh-cw" size={40} color={COLORS.primary} />
      </TouchableOpacity>
          <View style={{ flex: 2 }}></View>

          <View
            style={{
              flex: 2,
              borderRadius: SIZES.radius,
              width: Dimensions.get("window").width * 0.9,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo width={0.3} height={0.3} />
            <Text
              style={{
                fontSize: SIZES.h2,
                color: COLORS.primary,
                fontWeight: "bold",
                paddingTop: 10,
              }}
            >
              Group Name : {groupDet.name}
            </Text>
            <Text
              style={{
                fontSize: SIZES.h2,
                color: COLORS.primary,
                fontWeight: "bold",
              }}
            >
              Group Code : {groupDet.code}
            </Text>
            <View></View>
          </View>
          {isAdmin && isCreateEvent ? (
            <Button1
              style={{ flex: 2 }}
              text="Create Event"
              backgroundColor={COLORS.orangePrimary}
              borderColor={COLORS.orangePrimary}
              nextPage={createEventPage}
              width={0.6}
            />
          ) : (
            <View></View>
          )}
          {isPlaceBet? <Button1
            style={{ flex: 2, justifyContent: "space-between" }}
            text="Place Your Bet"
            backgroundColor={COLORS.orangePrimary}
            borderColor={COLORS.orangePrimary}
            nextPage={createUserBets}
            width={0.6}
          />
: <View></View>}
         
          <BottomBar pageManager={pageManager} pages={pages}  />
        </View>
      ) :pages.players?<Players  navigation={navigation}
      pageManager={pageManager}
      pages={pages} players={group.myUsers}/>:(
        <GroupEvents
          navigation={navigation}
          pageManager={pageManager}
          pages={pages}
          TotoGameActive={TotoGameActive}
          getMyGroup={getMyGroup}
        />
      )}
    </View>
  );
};

export default Group;
