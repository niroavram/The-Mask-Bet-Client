import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  I18nManager
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import styles from "./styles";
import Group from "./components/group";
import Smiley from "./components/smiley";
import Logo from "../../components/Logo";
import server from "../../apis/server";
import Background from "../../components/Background";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
I18nManager.allowRTL(false)

const Home = ({ navigation}) => {
  const [myGroupss, setMyGroupss] = useState(null)

  const [userToken, setUser] = React.useState(null);

  useEffect(() => {
    getUser();
  });
  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("userToken");
      setUser(user);
    } catch (error) {
      Alert.alert("The Mask bet",error);
    }
  };
  const [displayJoin, setDisplayJoin] = React.useState(false);

  const joinPage = () => {
    setDisplayJoin(true);
  };

  const profilePage = () => {
    navigation.navigate('Profile')  
  };

  const rulesGame = () => {
    navigation.navigate('Rules')  
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
 

  return (
    <View style={styles.container}>
      
      <View style={{flex:1, flexDirection:'row'}}>
      <TouchableOpacity onPress={rulesGame} style={{flex:1, justifyContent:"space-around", borderRadius: SIZES.radius, width:50,left:20 }}>
          <SimpleLineIcons name="book-open" size={33} color={COLORS.primary} alignItems={'right'} paddingtop={10}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={profilePage} style={{  flex:1, left: 145, justifyContent:"space-around", borderRadius: SIZES.radius, width:50 }}>
          <Ionicons name="ios-person-sharp" size={33} color={COLORS.primary} alignItems={'right'} paddingtop={10}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>getMyGroup()} style={{position: 'absolute',right:180}} >
      <Feather name="refresh-cw" size={30} color={COLORS.primary} paddingtop={15}  />
      </TouchableOpacity>
        </View>
        <View style ={{flexDirection:'row' , flex:1, justifyContent:"center" , top:-15}}>
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
