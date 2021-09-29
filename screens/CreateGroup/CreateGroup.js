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
const CreateGroup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [name, setName] = useState("");
  const [value, setChecked] = React.useState("first");
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
      .post(
        "create-toto-group",
        { name, isPublic },
        { headers: { Authorization: "Bearer " + userToken } }
      )
      .then(function (res) {
        navigation.navigate('Group',{groupin: res})
        Alert.alert("The Mask bet","Saves successfuly!");
      })
      .catch(function (error) {
        console.log(error);
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
          Here you can create your own Group {"\n"}Choose the Name of your Group {"\n"} And decide Whether it be {"\n"}Public or Private
        </Text>
        </View>
        <RadioButton.Group
          onValueChange={(newValue) => setIsPublic(newValue)}
          value={isPublic}
        >
         
          
              <View style={{flexDirection:'row'}}>
            <View style={{ padding: SIZES.padding,justifyContent:'center',alignItems:'center' }}>
              <Text style={{ fontSize: SIZES.h2 , color: COLORS.primary, fontWeight:"bold"}}>Private </Text>
              <RadioButton value={false} />
            </View>
            <View style={{ padding: SIZES.padding,justifyContent:'center',alignItems:'center' }}>
              <Text style={{ fontSize: SIZES.h2, color: COLORS.primary, fontWeight:"bold" }}>Public</Text>
              <RadioButton value={true} />
              </View>

          </View>
        </RadioButton.Group>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            placeholder="Enter your group name"
            selectionColor="white"
            keyboardAppearance="dark"
            placeholderTextColor={COLORS.darkGray}
            onChangeText={setName}
            value={name}
          />
        </View>

        <View style={{ flex: 1, marginTop: 10 }}>
        <Button1 text="Create Group" backgroundColor={COLORS.orangePrimary} borderColor={COLORS.orangePrimary}  width={0.6}  nextPage={ postData} />
        </View>
      </View>
    </View>
  );
};

export default CreateGroup;
