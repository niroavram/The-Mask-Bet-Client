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
    <Background style={styles.container}>
      <TouchableOpacity onPress={profilePage} style={{flex:1,flexDirection:'row',borderRadius: SIZES.radius,backgroundColor:COLORS.lightGray2,alignItems:'center'}}>
      <Ionicons name="people-circle" size={44} color={COLORS.primary} />
        <Text style={{ fontSize: SIZES.h1, color: COLORS.primary }}>
          Hey, Nir
        </Text>
      </TouchableOpacity>
      <Smiley  style={{flex:1}} navigation={navigation} joinPage={joinPage} />
      <TouchableOpacity onPress={GroupEvents} style={{flex:1}}>
     
        <Text style={{ fontSize: SIZES.h1, color: COLORS.black }}>
          Group proflie
        </Text>
      </TouchableOpacity>
      <View style={styles.groupContainer}>
        <Text style={{ fontSize: SIZES.h1 }}>My Groups</Text>

        <FlatList
          numColumns={2}
          keyExtractor={(item) => item._id}
          data={myGroupss}
          renderItem={({ item }) => <Group item={item} navigation={navigation} />}
        />
      </View>
    </Background>
  );
};

export default Home;
