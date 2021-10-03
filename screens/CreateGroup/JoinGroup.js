import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
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
import Button1 from "../../components/Buttons/Button1";
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
      Alert.alert("The Mask bet",error);
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
        navigation.navigate('Group',{group: res.data.totogroup})
        Alert.alert("The Mask bet","Join successfuly!");
      })
      .catch(function (error) {
        Alert.alert("The Mask bet","User already inside this group")
      });
  };
  return (
    <View style={{flex: 1,
      width: '100%',
      padding: 2,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.white2}}>
      <BackButton goBack={navigation.goBack} />

      <View style={{ flex: 1, bottom: 0 }}>
        <Text
          style={{ fontSize: SIZES.largeTitle, color: COLORS.lightOrange3 }}
        ></Text>
      </View>

      <View
        style={{
          flex: 5,
          borderRadius: 25,
          width: Dimensions.get("window").width * 0.99,
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
        }}
      >
        <View style={{ flex: 1 }}>
          <Logo />
        </View>
        <View style={{ flex: 1 }}>
        <Text style={{fontSize: SIZES.h3 ,color: COLORS.primary,textAlign: "center"} }>
          Now you can join any Group {"\n"}You Want! {"\n"} Just enter the group code and play {"\n"}
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
            placeholder="Enter Group Code"
            selectionColor={COLORS.primary}
            keyboardAppearance="dark"
            placeholderTextColor={COLORS.darkGray}
            onChangeText={setCode}
            value={code}
          />
        </View>

        <View style={{ flex: 1, marginTop: 10 }}>
        <Button1 text="Join Group" backgroundColor={COLORS.orangePrimary} borderColor={COLORS.orangePrimary}   width={0.6}  nextPage={ postData} />
        </View>
      </View>
      </View>
  );
};

export default JoinGroup;
