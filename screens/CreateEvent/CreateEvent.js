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
import Button1 from "../../components/Buttons/Button1";
import BackButton from "../../components/Buttons/BackButton";
import Leagues from "./components/Leagues";
import { Switch, TextInput } from "react-native-paper";

const CreateEvent = ({ navigation }) => {
  const [leagues, setLeauges] = useState(null);
  const [mygames, setMyGames] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [isMask, setIsMask] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [doubles, setDoubles] = useState(0);
  const [triangles, setTraingles] = useState(0);
  const [price, setPrice] = useState(0);
  const group_id = "610639d3cb8f6f0015bf77b5";
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
    server
      .post(
        "create-newevent",
        { isMask, doubles, triangles, price, group_id, isActive },
        { headers: { Authorization: "Bearer " + userToken } }
      )
      .then(function (res) {
        console.log(res);
        alert("Create is successfully!", "Now tell your friends");
      })
      .catch(function (error) {
        alert("Bad move", "try again");
        console.log(error);
      });
  };
  // const postEvent = () =>{

  // console.log(isMask,doubles,triangles,price,group_id,isActive)

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
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: SIZES.largeTitle, color: COLORS.primary }}>
          Create Event
        </Text>
      </View>

      <SafeAreaView>
        <View
          style={{
            flex: 6,
            borderRadius: 25,
            backgroundColor: COLORS.lightGray1,
            borderWidth: 1,
            shadowColor: COLORS.gray3,
            shadowOpacity: 0.5,
            shadowRadius: 25,
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
                  value={doubles.toString()}
                  onChangeText={onChangeDoubles}
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
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: SIZES.h2 }}>
          You choose {mygames.length} games!
        </Text>
        {!isNext ? (
          <Button1
            text="Next"
            backgroundColor={COLORS.lightOrange}
            nextPage={nextPage}
            width={0.3}
          />
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Button1
              text="Back"
              backgroundColor={COLORS.red}
              nextPage={nextPage}
              width={0.3}
            />
            <Button1
              text="Create"
              backgroundColor={COLORS.lightOrange}
              nextPage={() => postEvent()}
              width={0.3}
            />
          </View>
        )}
      </View>
    </Background>
  );
};

export default CreateEvent;
