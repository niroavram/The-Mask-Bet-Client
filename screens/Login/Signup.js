import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  Dimensions
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import axios from "axios";
import server from "../../apis/server";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // const getDataUsingAsyncAwaitGetCall = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://the-mask-bet-server.herokuapp.com/leagues',
  //     );
  //     alert(JSON.stringify(response.data));
  //     setPad(JSON.stringify(response))
  //   } catch (error) {
  //     // handle error
  //     alert(error.message);
  //   }
  // };
  const postData = () => {
    server
      .post("signup", { name, email, password })
      .then(function (res) {
        setPad(JSON.stringify(res));
        alert(res);
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
        >
          Welcome !
        </Text>
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
            Sign Up
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
            onChangeText={setName}
            value={name}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            placeholder="Email"
            selectionColor="white"
            keyboardAppearance="dark"
            placeholderTextColor={COLORS.darkGray}
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            style={styles.input}
            returnKeyType="go"
            // ref={input => (this.passwordInput = input)}
            placeholder="Password"
            placeholderTextColor={COLORS.gray2}
            selectionColor="white"
            keyboardAppearance="dark"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
       
        
        <View style={{ flex: 1 , marginTop:10}}>
          <Button title=" Sign Up" onPress={() => postData()} />
        </View>
      </View>
    </Background>
  );
};

export default Signup;
