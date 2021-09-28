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
  console.log(totogame_id)
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

  const switchON = () => {
    setIsMask(!isMask);
  };

  const nextPage = () => {
    mygames.length < 5
      ? alert("You must choose minimum 5 games")
      : setIsNext(!isNext);
  };
  const onChangeDoubles = (doubles) => {
    console.log(doubles);
    var text = "The max of doubles is " + mygames.length;
    doubles > mygames.length ? alert(text) : setDoubles(doubles);
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
        console.log(res)
        navigation.goBack()
        alert("Create is successfully!", "Now tell your friends");
      })
      .catch(function (error) {
        console.log(mygames.length )
        alert("Bad move", "try again");
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
      <View style={{  alignItems: "center", justifyContent: "center" }}>
      <Text style={{fontSize: SIZES.h3 ,color: COLORS.primary,textAlign: "center"} }>
      Choose the games you want to bet on {"\n"} And start playing </Text>
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
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: SIZES.h2 }}>Is Mask </Text>
                <Switch value={isMask} onValueChange={switchON} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: SIZES.h2 }}>Doubles </Text>
                <TextInput
                  style={{
                    minWidth: 100,
                    maxHeight: 50,
                    borderRadius: SIZES.radius,
                  }}
                  keyboardType="numeric"
                  label="doubles"
                  value={doubles.toString()}
                  onChangeText={onChangeDoubles}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: SIZES.h2 }}>Price </Text>
                <TextInput
                  style={{
                    minWidth: 100,
                    maxHeight: 50,
                    borderRadius: SIZES.radius,
                  }}
                  keyboardType="numeric"
                  label="Price"
                  value={price.toString()}
                  onChangeText={setPrice}
                />
              </View>
            </View>
          ) : (
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
              width={0.6}
            />
            <Button1
              text="Create"
              backgroundColor={COLORS.orangePrimary}
              nextPage={() => postEvent()}
              width={0.6}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default CreateEvent;
