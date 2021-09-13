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
import Background from "../../components/Background";
import Hello from "../newOne/hello";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({ navigation}) => {
  const [myGroups, setMyGroups] = useState([
    { name: "Maccabi", id: 1 },
    { name: "Killes", id: 2 },
    { name: "Zehavi", id: 3 },
    { name: "Haifa", id: 4 },
  ]);

  const [displayJoin, setDisplayJoin] = React.useState(false);
  const [userDetails, setUser] = React.useState(null);

  const joinPage = () => {
    setDisplayJoin(true);
  };
  useEffect(()=>{
    getUser()
  })
  const getUser =async ()=>{  
    try{  
     let  user = await AsyncStorage.getItem('userToken'); 
      console.log(user)
      setUser(user) 
      
    }  
    catch(error){  
      alert(error)  
    }  
  }
  const profilePage = () => {
    navigation.navigate('Profile')  
  };

  const GroupEvents = () => {
    navigation.navigate('GroupEvents')  
  };
  return (
    <Background style={styles.container}>
      <TouchableOpacity onPress={profilePage} style={{flex:1,flexDirection:'row'}}>
      <Ionicons name="people-circle" size={44} color={COLORS.lightGray2} />
        <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>
          Hey, Nir
        </Text>
      </TouchableOpacity>
      <Smiley navigation={navigation} joinPage={joinPage} />
      <TouchableOpacity onPress={GroupEvents} style={{flex:1,flexDirection:'row'}}>
     
        <Text style={{ fontSize: SIZES.h1, color: COLORS.black }}>
          Group proflie
        </Text>
      </TouchableOpacity>
      <View style={styles.groupContainer}>
        <Text style={{ fontSize: SIZES.h1 }}>My Groups</Text>

        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={myGroups}
          renderItem={({ item }) => <Group item={item} />}
        />
      </View>
    </Background>
  );
};

export default Home;
