import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import styles from "./styles";
import Group from "./components/group";
import Smiley from "./components/smiley";
import Logo from "../../components/Logo";
import server from "../../apis/server";
import Background from "../../components/Background";
import Hello from "../newOne/hello";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({ navigation}) => {
  const [myGroupss, setMyGroupss] = useState(null)
  const [myGroups, setMyGroups] = useState([
    { name: "Maccabi", id: 1 },
    { name: "Killes", id: 2 },
    { name: "Zehavi", id: 3 },
    { name: "Haifa", id: 4 },
  ]);
  const [userToken, setUser] = React.useState(null);

  useEffect(() => {
    getUser();
  });
  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("userToken");
      setUser(user);
    } catch (error) {
      alert(error);
    }
  };
  const [displayJoin, setDisplayJoin] = React.useState(false);

  const joinPage = () => {
    setDisplayJoin(true);
  };

  const profilePage = () => {
    navigation.navigate('Profile')  
  };
  const getMyGroups = () => {
    server
      .get("my-toto-group",{headers: { Authorization: "Bearer " + userToken }} )
      .then(function (res) {
        setMyGroupss(res.data.totogroup);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (myGroupss === null) {
    getMyGroups();
  }
  const GroupEvents = () => {
    navigation.navigate('GroupEvents')  
  };

  return (
    <View style={styles.container}>
      
        <TouchableOpacity onPress={profilePage} style={{  flex:1, flexDirection:'row-reverse',alignSelf:"flex-end", justifyContent:"space-around", borderRadius: SIZES.radius, width:50 }}>
          <Ionicons name="ios-person-sharp" size={33} color={COLORS.primary} alignItems={'right'} paddingtop={10}/>
        </TouchableOpacity>
        <View flexDirection={'row'}  flex={1} justifyContent= {"center" } >
      <Logo  width={0.15} height={0.15}  paddingleft={10} />
      </View>
      <Smiley  style={{flex:3}} navigation={navigation} joinPage={joinPage} />
      {/* <TouchableOpacity onPress={GroupEvents} style={{flex:1}}>
     
        <Text style={{ fontSize: SIZES.h1, color: COLORS.black }}>
          Group proflie
        </Text>
      </TouchableOpacity> */}
      <Text style={{fontSize: SIZES.h3 ,color: COLORS.primary,textAlign: "center"} }>
        Here you can see the groups{"\n"} you are part of them {"\n"}
          </Text>
      <View style={styles.groupContainer}>
        <Text style={{ fontSize: SIZES.h1 ,color: COLORS.primary, fontWeight:"bold", paddingTop:5, paddingBottom:5}}>My Groups</Text>
         

        <FlatList
          numColumns={2}
          keyExtractor={(item) => item._id}
          data={myGroupss}
          renderItem={({ item }) => <Group item={item} navigation={navigation} />}
        />
      </View>
    </View>
  );
};

export default Home;
