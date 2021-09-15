import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button,
    Alert,
    Dimensions
} from 'react-native';
import styles from "./styles"
import { Ionicons } from '@expo/vector-icons';
import {COLORS,FONTS,SIZES} from "../../constants/index"
import axios from 'axios';
import Button1 from '../../components/Buttons/Button1';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import BackButton from '../../components/Buttons/BackButton';
import Btn from '../../components/Btn';

const LoginHome = ({navigation}) =>{
      const siginPage = () =>{
            navigation.navigate('Signin')
        }
        const signUpPage = () =>{
            navigation.navigate('Signup')
        }
        
  return (
        <Background>
              <View style={{ 
    height: Dimensions.get('window').height*0.8,
    borderRadius: 25,
    backgroundColor: COLORS.white2,
    shadowColor: COLORS.white2,
    shadowOpacity: 0.5,
    shadowRadius:25,
    width: Dimensions.get('window').width*0.9,
    justifyContent: 'center',
    alignItems: 'center',bottom:0,
    borderWidth:1,
    borderColor: COLORS.primaryLight}}>
          <View style={{padding:10,justifyContent: 'center',
    alignItems: 'center',marginBottom:50}}>
          <Logo />

          <Text style={{fontSize: SIZES.largeTitle,color: COLORS.primary}}>The Mask Bet </Text>

          </View>
        <Button1 text="Login" backgroundColor={COLORS.primary}  width={0.8}  nextPage={ siginPage}
/>
        <Button1 text="Signup" backgroundColor={COLORS.white2} textColor={COLORS.primary}  width={0.8}  nextPage={signUpPage }
/>
</View>
      </Background>    )
}

export default LoginHome;