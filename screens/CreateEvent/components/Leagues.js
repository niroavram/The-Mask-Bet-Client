import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Game from "./Game";
import { SvgUri } from "react-native-svg";
import moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
import { List } from "react-native-paper";
import { COLORS, SIZES } from "../../../constants";
const Leagues = (props) => {
  const { item, addGame, removeGame } = props;
  const [isSlected, setIsSlected] = useState(false);

  var games = item.upcoming;
  var size = games.length || 0;
  var wid = Dimensions.get("window").width;
  const checkDateGame = (dateGame) => {
    var game = Date.parse(dateGame);
    var is = true;
    game > Date.now() && game < Date.now() + 1000 * 60 * 60 * 24 * 7
      ? (is = true)
      : (is = false);
    return is;
  };
  const selctedItem =()=>{
    isSlected? setIsSlected(false) : setIsSlected(true)
  }
  const leagueGames = () => {
    return (
      <View style={{ width: wid }}>
        <TouchableOpacity
        onPress={selctedItem}
          style={{
            flexDirection: "row",
            borderWidth: 0.5,
            borderRadius: SIZES.radius,
            alignItems: "center",
            backgroundColor: isSlected ? COLORS.gray2 : COLORS.lightGray1,
            padding: 6,
          }}
        >
          {item.flag.includes(".svg") ? (
            <View style={{ borderRadius: 15, flex: 1 }}>
              <SvgUri uri={item.flag} width="40" height="40" />
            </View>
          ) : (
            <Image
              source={{ uri: item.flag }}
              style={{ width: 1, height: 1, padding: SIZES.padding }}
            />
          )}
          <Text style={{ fontSize: SIZES.h2, flex: 6 }}>
            {" "}
            {item.league_name}
          </Text>
          <View style={{ flex: 2 }}>
            {isSlected ? (
              <Ionicons name="chevron-down" size={32} color="black" />
            ) : (
              <FontAwesome5 name="chevron-up" size={27} color="black" />
            )}
          </View>
        </TouchableOpacity>
        {isSlected?
          games.map((game) => {
            return checkDateGame(game.dateGame) ? (
              <Game
                game={game}
                key={game._id}
                addGame={addGame}
                removeGame={removeGame}
              />
            ) : (
              <View key={game._id}></View>
            );
          })
        :<View></View>}
      
      </View>
    );
  };
  return <View>{size > 0 ? leagueGames() : <Text> </Text>}</View>;
};

export default Leagues;
