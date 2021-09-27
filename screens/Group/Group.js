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
import Button1 from "../../components/Buttons/Button1";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
import GroupEvents from "../GroupEvents/GroupEvents";
import server from "../../apis/server";
import BottomBar from "./compopents/bottomBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "react-native-reanimated";

const Group = ({ navigation, route }) => {
  const [groupDet, setgroupDet] = React.useState("");
  const [group, setgroup] = useState(null);
  const [totoGames, setTotoGames] = useState(null);
  const[totoGame_id, setTotoGameId] = useState(null);
  const [isAdmin, setisAdmin] = useState(false);
  const [TotoGameActive, setTotoGameActive] = useState(null);
  const [group_id, setId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [pages, setPages] = useState({home:true,event:false,games:false,players:false});

const pageManager = (pageBofore,nextPage)=>{
  setPages({...pages,[pageBofore]: false,[nextPage]:true})
}

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
  const getMyGroup = (g) => {
    server
      .get("my-toto-group",{headers: { Authorization: "Bearer " + userToken }} )
      .then(function (res) {
        setgroup(res.data.totogroup);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if(group === null && group_id != null){
    getMyGroup();
  }
  
console.log(group)
  const createEventPage = () => {
    if(TotoGameActive.length>0){
      setTotoGameId(TotoGameActive[0]._id)
      console.log(totoGame_id)
      navigation.navigate("CreateEvent", { totogame: totoGame_id })
    }

    else {
      postTotoGame()
      }
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
        navigation.navigate("CreateEvent", { totogame: res.data.totoGames[res.data.totoGames.length-1]})
      })
      .catch(function (error) {
        console.log(mygames.length )
        alert("Bad move", "try again");
        console.log(error);
      });
  };


  return (
    <View style={{flex: 1 }}>
              {pages.home?
      <View style={{flex: 1,
        width: '100%',
        padding: 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white2}}>
        <BackButton goBack={navigation.goBack} />
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
          <Logo  width={0.3} height={0.3} />
  
          <Text style={{fontSize: SIZES.h2 , color: COLORS.primary, fontWeight:"bold" , paddingTop:10}}>
            Group Name :  {groupDet.name}
          </Text>
          <Text style={{ fontSize: SIZES.h2 , color: COLORS.primary, fontWeight:"bold" }}>
            Group Code : {groupDet.code}
          </Text>
          <View></View>
        </View>
        {isAdmin?    
        <Button1
          style={{ flex: 2 }}
          text="Create Event"
          backgroundColor={COLORS.orangePrimary} 
          borderColor={COLORS.orangePrimary}
          nextPage={createEventPage}
          width={0.6}
        />:<View></View>}
    
        <Button1
          style={{ flex:2, justifyContent:'space-between'}}
          text="Place Your Bet"
          backgroundColor={COLORS.orangePrimary} 
          borderColor={COLORS.orangePrimary}
          nextPage={createUserBets}
          width={0.6}
          
        />
  
        <BottomBar pageManager={pageManager} pages={pages} />
      </View>:<GroupEvents navigation={navigation} pageManager={pageManager} pages={pages}/>}
    </View>
   
  );
};

export default Group;
