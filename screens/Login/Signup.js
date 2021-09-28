import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  Dimensions,
  Alert
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants/index";
import axios from "axios";
import server from "../../apis/server";
import Background from "../../components/Background";
import Button1 from "../../components/Buttons/Button1";
import Logo from "../../components/Logo";
import BackButton from "../../components/Buttons/BackButton";
const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");

  const postData = () => {
    server
      .post("signup", { username, email, password })
      .then(function (res) {
        Alert.alert("The Mask bet","Sign Up is successfully!");
        navigation.navigate('Signin')
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
      <BackButton goBack={navigation.goBack}/>

      <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>

     </View>
   
      <View style={{
flex: 6,
borderRadius: 25,
backgroundColor: COLORS.white2,
shadowColor: COLORS.white2,
shadowOpacity: 0.5,
shadowRadius:25,
width: Dimensions.get('window').width*0.9,
justifyContent: 'center',
alignItems: 'center',bottom:0,
borderWidth:1,
borderColor: COLORS.white2

}}>

    <View style={{flex:5 ,alignItems:'center',justifyContent:'center'}}>
    <Logo  width={0.3} height={0.3}/>
    <Text style={{fontSize: SIZES.h1,color: COLORS.primary, textAlign: "center", fontWeight:"bold"}}>{"\n"} Welcome To {"\n"} The Mask Bet</Text>
</View>

    
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        returnKeyType="next"
        placeholder="Name"
        selectionColor="white"
        keyboardAppearance="dark"
        placeholderTextColor={COLORS.darkGray}
        onChangeText={setName}
        value={username}
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

        <View style={{flex:3}}>
        <Button1 text="Sign Up" backgroundColor={COLORS.orangePrimary} borderColor={COLORS.orangePrimary}  width={0.6}  nextPage={ postData} />
        </View>
</View>
  </View>    )
}


export default Signup;
