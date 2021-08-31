import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
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
import BackButton from "../../components/Buttons/BackButton";
import Leagues from "./components/Leagues";
const CreateEvent = ({ navigation }) => {
  const [leagues, setLeauges] = useState(null);
  const [userToken, setUser] = React.useState(null);
    
  const getLeagues = () => {
    server
      .get("leagues")
      .then(function (res) {
        setLeauges(res.data)
    
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(leagues)
  if(leagues===null){
    getLeagues()
  }
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <View style={{ flex: 1, bottom: 0 }}>
        <Text
          style={{ fontSize: SIZES.largeTitle, color: COLORS.lightOrange3 }}
        >czzxczx</Text>
      </View>

      <View
        style={{
          flex: 3,
          borderRadius: 25,
          backgroundColor: COLORS.lightGray2,
          shadowColor: COLORS.gray3,
          shadowOpacity: 0.5,
          shadowRadius: 25,
          width: Dimensions.get("window").width * 0.9,
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
        }}
      >
          <Text>Hiiii</Text>
      <FlatList
          numColumns={1}
          keyExtractor={(item) => item._id}
          data={leagues}
          renderItem={({ item }) => <Leagues item={item}/>}
        />
      </View>
    </Background>
  );
};

export default CreateEvent;
