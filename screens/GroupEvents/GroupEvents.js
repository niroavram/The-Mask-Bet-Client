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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import axios from "axios";
import Button1 from "../../components/Buttons/Button1";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
import Btn from "../../components/Btn";
import Games from "./components/games";
import BottomBar from "../Group/compopents/bottomBar";
import Players from "./components/player";
import { event } from "react-native-reanimated";

const GroupEvents = (props) => {
  const [hasAchance, setHasAchance] = useState([]);
  const [losers, setLosers] = useState([]);
  const [isBuckerDone, setIsBucketDone] = useState(null);
  const { navigation, pageManager, pages, TotoGameActive } = props;

  const bucketUsers = (event) => {
    let user = event.userBets;
    let games = event.gamesEvent;
    let isLoser = false;
    let index = 0;
    let lose = []
    let win = []
    console.log("object")
    for (let i = 0; i < user.length; i++) {
      index = 0;
      isLoser = false;
      while (index < games.length - 1 && !isLoser) {
        if (user[i].gameEvents[index].gameApi.scoreHomeTeam === null) {
          index = games.length;
        } else if (user[i].gameEvents[index].startGame != games[index].startGame) {
          isLoser = true;
        }
        index++;
      }
      isLoser===true? lose.push(user[i]):win.push(user[i])
    }
    setIsBucketDone(true);
    setHasAchance(win)
    setLosers(lose)
  };

  if (isBuckerDone === null) {
    bucketUsers(TotoGameActive[0].events[TotoGameActive[0].events.length - 1]);
  }
  const profilePage = () => {
    navigation.navigate("Profile");
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        padding: 2,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white2,
      }}
    >
      <BackButton goBack={navigation.goBack} />
      <TouchableOpacity
        onPress={profilePage}
        style={{
          flexDirection: "row-reverse",
          marginTop: 50,
          alignSelf: "flex-end",
          justifyContent: "space-around",
          borderRadius: SIZES.radius,
          width: 50,
        }}
      >
        <Ionicons
          name="ios-person-sharp"
          size={33}
          color={COLORS.primary}
          alignItems={"right"}
          paddingtop={10}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Logo width={0.15} height={0.15} paddingleft={10} />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 2,
          left: 20, }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            color: COLORS.black,
            fontWeight: "bold",
            flex: 1,
          }}
        >
          Round: {TotoGameActive[0].events.length}
        </Text>
        <Text
          style={{
            fontSize: SIZES.h3,
            color: COLORS.black,
            fontWeight: "bold",
            flex: 1,
          }}
        >
          Price:{" "}
          {TotoGameActive[0].events[TotoGameActive[0].events.length - 1].price}
        </Text>
        <Text
          style={{
            fontSize: SIZES.h3,
            color: COLORS.black,
            fontWeight: "bold",
            flex: 1,
          }}
        >
          Doubles:{" "}
          {
            TotoGameActive[0].events[TotoGameActive[0].events.length - 1]
              .doubles
          }
        </Text>
      </View>
      <View style={{ flex: 15}}>
        <View style={{ flex: 2}}>
        <Games
          gameEvents={
            TotoGameActive[0].events[TotoGameActive[0].events.length - 1]
              .gamesEvent
          }
        />
        </View>
  
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white2,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.h3,
              left: 20,
              color: COLORS.primary,
              fontWeight: "bold",
              top: 40,
            }}
          >
            Has A Chance
          </Text>
        </View>
        <View style={{ flex: 6 }}>
          <Players
            userBets={hasAchance}
            gamesEvent={TotoGameActive[0].events[TotoGameActive[0].events.length - 1].gamesEvent}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white2,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.h3,
              left: 20,
              color: COLORS.primary,
              fontWeight: "bold",
              top: 40,
            }}
          >
            Mmmmmm Maybe Next Time
          </Text>
        </View>
        <View style={{ flex: 6 }}>
          <Players
            userBets={losers}
            gamesEvent={TotoGameActive[0].events[TotoGameActive[0].events.length - 1].gamesEvent}
          />
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <BottomBar pageManager={pageManager} pages={pages} />
      </View>
    </View>
  );
};

export default GroupEvents;
