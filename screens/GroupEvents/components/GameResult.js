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
import moment from "moment";
import { COLORS, SIZES } from "../../../constants";
const GameResult = (props) => {
  const { game, index } = props;
  var wid = Dimensions.get("window").width;

  return (
    <View
      style={{
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.darkWhite,
        height: 90,
        flexDirection:"row",
        alignItems:'center',
        justifyContent: 'center'
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h1,
            color: COLORS.primary,
            fontWeight: "bold",
          }}
        >
          {" "}
          {index + 1}{" "}
        </Text>
      </View>
      <View  style={{ alignItems: "center", flex: 9,}} >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: game.homeFlag }}
            style={{
              width: wid * 0.1,
              height: wid * 0.1,
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{ alignItems: "center", flex: 3, flexWrap: "wrap", top: 3 }}
        >
          <Text
            style={{
              fontSize: SIZES.h3,
              color: COLORS.primary,
              fontWeight: "bold",
              flexDirection: "row",
            }}
          >
            {" "}
            {game.homeTeam}{" "}
          </Text>
        </View>
        <View
          style={{ alignItems: "center", flex: 3, flexWrap: "wrap", }}
        >
          <Text
            style={{
              fontSize: game.scoreHomeTeam!=null? SIZES.h2: SIZES.h4,
              position: "absolute",
              right: 5,
              top:-8,
              color: COLORS.primary,
            }}
          >
              {game.scoreHomeTeam!=null?game.scoreHomeTeam:
                          moment(game.dateGame).format("dddd Do MMM") + "  "

              }
          </Text>
        </View>
      </View >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Image
            source={{ uri: game.awayFlag }}
            style={{
              width: wid * 0.1,
              height: wid * 0.1,
            }}
          />
        </View>
        <View style={{ alignItems: "center", flex: 4, flexWrap: "wrap" }}>
          <Text
            style={{
              fontSize: SIZES.h3,
              color: COLORS.primary,
              fontWeight: "bold",
            }}
          >
            {game.awayTeam}
          </Text>
        </View>
        <View style={{ alignItems: "center", flex: 2, flexWrap: "wrap" }}>
          <Text
            style={{
              fontSize:game.scoreAwayTeam!=null? SIZES.h2: SIZES.h4,
              position: "absolute",
              right: 5,
              top:-8,
              color: COLORS.primary,
            }}
          >
                {game.scoreAwayTeam!=null?game.scoreAwayTeam:
            moment(game.dateGame).format("h:mm a")+" "

              }
          </Text>
        </View>
      </View>
      </View>

    </View>
  );
};

export default GameResult;
