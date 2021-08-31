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
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import server from "../../apis/server";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
const JoinGroup = ({ navigation }) => {
  const [code, setCode] = useState("");
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

  const postData = () => {
    server
      .put(
        "join-toto-group",
        { code },
        { headers: { Authorization: "Bearer " + userToken } }
      )
      .then(function (res) {
        navigation.navigate('Group',{group: res})
        alert("Join successfuly!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <View style={{ flex: 1, bottom: 0 }}>
        <Text
          style={{ fontSize: SIZES.largeTitle, color: COLORS.lightOrange3 }}
        ></Text>
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
        <View style={{ flex: 1 }}>
          <Logo />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: SIZES.largeTitle, color: COLORS.darkGray }}>
            Join Group
          </Text>
        </View>
      
        <View style={styles.inputContainer}>
      
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            placeholder="Name"
            selectionColor="white"
            keyboardAppearance="dark"
            placeholderTextColor={COLORS.darkGray}
            onChangeText={setCode}
            value={code}
          />
        </View>

        <View style={{ flex: 1, marginTop: 10 }}>
          <Button title="Join" onPress={() => postData()} />
        </View>
      </View>
    </Background>
  );
};

export default JoinGroup;
