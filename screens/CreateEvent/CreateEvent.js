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
  I18nManager
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import server from "../../apis/server";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Button1 from "../../components/Buttons/Button1";
import BackButton from "../../components/Buttons/BackButton";
import Leagues from "./components/Leagues";
import { Switch, TextInput } from "react-native-paper";
import { Alert } from "react-native";
I18nManager.allowRTL(false)

const CreateEvent = ({ navigation,route }) => {
  const [leagues, setLeauges] = useState(null);
  const [mygames, setMyGames] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [isMask, setIsMask] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [doubles, setDoubles] = useState(3);
  const [triangles, setTraingles] = useState(0);
  const [price, setPrice] = useState(30);
  const [totogame_id, setgroup_id] = useState(route.params.totogame);
  const [group, setgroup] = useState(route.params.group);

  useEffect(() => {
    getUser();
  });
  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("userToken");
      setUserToken(user);
    } catch (error) {
      Alert.alert("The Mask bet",error);
    }
  };

  const switchON = () => {
    setIsMask(!isMask);
  };

  const nextPage = () => {
    mygames.length < 5
      ? Alert.alert("The Mask bet","You must choose minimum 5 games")
      : mygames.length > 9
      ? Alert.alert("The Mask bet","You can choose maximum 9 games")
      : setIsNext(!isNext);
      
  };
  
    
  
  const onChangeDoubles = (doubles) => {
    console.log(doubles);
    var text = "The max of doubles is " + mygames.length;
    doubles > mygames.length ? Alert.alert("The Mask bet",text) : setDoubles(doubles);
  };

  const addGame = (game) => {
    setMyGames([...mygames, game]);
  };
  const removeGame = (game) => {
    setMyGames(mygames.filter((a) => a.homeTeam != game.homeTeam));
  };
  const postEvent = () => {
    server.post(
        'create-newevent',
       { isMask, doubles, triangles, price,  totogame_id, isActive,  mygames },
        { headers: { 
          'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken , 
  } }
      )
      .then(function (res) {
        navigation.navigate("Group",{group: route.params.group})
        Alert.alert("The Mask bet","Create is successfully!, Now tell your friends");
      })
      .catch(function (error) {
        console.log(mygames.length )
        Alert.alert("The Mask bet","Bad move, try again");
        console.log(error);
      });
  };

  const profilePage = () => {
    navigation.navigate('Profile')  
  };
  // const postEvent = () =>{

  //   console.log( "isMask",typeof isMask, "doubles", typeof doubles,"triangles",typeof triangles,"price",typeof price,"group_id",typeof group_id,"isActive",typeof isActive )
  // }
  const getLeagues = () => {
    server
      .get("leagues")
      .then(function (res) {
        setLeauges(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (leagues === null) {
    getLeagues();
  }
  return (
    <View style={{flex: 1,
      width: '100%',
      padding: 2,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.white2}}>
      <BackButton goBack={navigation.goBack} />
      <TouchableOpacity onPress={profilePage} style={{ flexDirection:'row-reverse', marginTop:50, alignSelf:"flex-end", justifyContent:"space-around", borderRadius: SIZES.radius, width:50 }}>
          <Ionicons name="ios-person-sharp" size={33} color={COLORS.primary} alignItems={'right'} paddingtop={10}/>
        </TouchableOpacity>
        <View style ={{flex:1,  justifyContent:"center" }} >
      <Logo  width={0.15} height={0.15}  paddingleft={10} />
      </View>
      
     
      

      
        <View
          style={{
            flex: 5,
            borderRadius: 25,
            backgroundColor: COLORS.white2,
            width: Dimensions.get("window").width * 0.9,
            justifyContent: "center",
            alignItems: "center",
            maxHeight: Dimensions.get("window").height * 0.75,
          }}
        >
          {isNext ? (
            <View style ={{flex:1,  justifyContent:"center" ,flexDirection: "column"}}>
              <View style={{ flex:2, alignItems: "center", justifyContent: "center" }}>
                <Text style={{fontSize: SIZES.h3 ,color: COLORS.primary,textAlign: "center"} }>
                Choose If you want to play with Mask on,  {"\n"} Choose the number of doubles  {"\n"} And decide the price of the game  {"\n"}</Text>
              </View>
              <View style={{flex:3, flexDirection: "row" , top:50, justifyContent: "center"}}>
                <Text style={{ fontSize: SIZES.h3, color:COLORS.primary, fontWeight:"bold", right:10 }}>Is Mask </Text>
                <Switch value={isMask} onValueChange={switchON} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  flex:2
                }}
              >
                <Text style={{ fontSize: SIZES.h3, color:COLORS.primary, fontWeight:"bold", top:23 }}>Doubles </Text>
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
                  keyboardType="numeric"
                  value={doubles.toString()}
                  onChangeText={onChangeDoubles}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  flex:7
                }}
              >
                <Text style={{ fontSize: SIZES.h3, color:COLORS.primary, fontWeight:"bold" , top:23}}>Price </Text>
                <TextInput
                  style={{
                    minWidth: 80,
                    maxHeight: 40,
                    color:COLORS.primary,
                    fontWeight:'bold',
                    placeholderTextColor:COLORS.primary,
                    fontSize:16,
                    textAlign:'center'

                  }}
                  keyboardType="numeric"
                  //label="Price"
                  value={price.toString()}
                  onChangeText={setPrice}
                />
              </View>
            </View>
          ) : (

            < >
            
              <View style={{  alignItems: "center", justifyContent: "center" }}>
              <Text style={{fontSize: SIZES.h3 ,color: COLORS.primary,textAlign: "center"} }>
              Choose the games you want to bet on {"\n"} And start playing </Text>
              </View>
            
            <FlatList
              numColumns={1}
              keyExtractor={(item) => item._id}
              data={leagues}
              renderItem={({ item }) => (
                <Leagues
                  item={item}
                  addGame={addGame}
                  removeGame={removeGame}
                />
              )}
            />
            </>
          )}
        </View>
     
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View style={{margin:5}}>
        <Text style={{ fontSize: SIZES.h2 , color:COLORS.primary, fontWeight:"bold"}}>
          You choose {mygames.length} games!
        </Text>
        </View>
        
        {!isNext ? (
          <View style={{ flexDirection: "row"}}>
            <Button1
              text="Next"
              backgroundColor={COLORS.orangePrimary} 
              borderColor={COLORS.orangePrimary}
              nextPage={nextPage}
              width={0.6}
              
          />
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Button1
              text="Back"
              backgroundColor={COLORS.orangePrimary}
              nextPage={nextPage}
              width={0.4}
              borderColor={COLORS.orangePrimary}
            />
            <Button1
              text="Create"
              backgroundColor={COLORS.orangePrimary}
              nextPage={() => postEvent()}
              width={0.4}
              borderColor={COLORS.orangePrimary}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default CreateEvent;
