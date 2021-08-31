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
      alert(error);
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
        navigation.navigate('Group',{group: res})
        alert("Saves successfuly!");
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
            Create Group
          </Text>
        </View>
        <RadioButton.Group
          onValueChange={(newValue) => setIsPublic(newValue)}
          value={isPublic}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ padding: SIZES.padding,justifyContent:'center',alignItems:'center' }}>
              <Text style={{fontSize: SIZES.h1}}>Group Type</Text>
              </View>
            <View style={{ padding: SIZES.padding,justifyContent:'center',alignItems:'center' }}>
              <Text style={{ fontSize: SIZES.h2 }}>Private </Text>
              <RadioButton value={false} />
            </View>
            <View style={{ padding: SIZES.padding,justifyContent:'center',alignItems:'center' }}>
              <Text style={{ fontSize: SIZES.h2 }}>Public</Text>
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
            placeholder="Name"
            selectionColor="white"
            keyboardAppearance="dark"
            placeholderTextColor={COLORS.darkGray}
            onChangeText={setName}
            value={name}
          />
        </View>

        <View style={{ flex: 1, marginTop: 10 }}>
          <Button title="Create" onPress={() => postData()} />
        </View>
      </View>
    </Background>
  );
};

export default CreateGroup;
