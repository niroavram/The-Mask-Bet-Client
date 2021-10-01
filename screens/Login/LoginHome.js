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
    Dimensions,I18nManager
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
I18nManager.allowRTL(false)

const LoginHome = ({navigation}) =>{
      const siginPage = () =>{
            navigation.navigate('Signin')
        }
        const signUpPage = () =>{
            navigation.navigate('Signup')
        }
        
  return (
        <View style={{flex: 1,
            width: '100%',
            padding: 2,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white2}}>
              <View style={{ 
    height: Dimensions.get('window').height*0.7,
    borderRadius: 25,
    backgroundColor: COLORS.white2,
    shadowColor: COLORS.white2,
    shadowOpacity: 0.5,
    shadowRadius:25,
    paddingTop:10,
    width: Dimensions.get('window').width*0.9,
    justifyContent: 'center',
    alignItems: 'center',bottom:0,
    //borderWidth:1,
    //borderColor: COLORS.primaryLight
    }}>
          <View style={{padding:10,justifyContent: 'center',
    alignItems: 'center',marginBottom:50}}>
          
          <Logo width={0.4} height={0.4} />
          <Text style={{fontSize: SIZES.h1,color: COLORS.primary, textAlign: "center", fontWeight:"bold"}}> {"\n"}The Mask Bet</Text>
          <Text style={{fontSize: SIZES.h3,color: COLORS.primary, textAlign: "center"}}> {"\n"}The only place where you can bet   {"\n"} without let anybody know {"\n"} who you are</Text>
          </View>
        <Button1 text="Login" backgroundColor={COLORS.orangePrimary} borderColor={COLORS.orangePrimary} width={0.6}  nextPage={ siginPage}
/>
        <Button1 text="Signup" backgroundColor={COLORS.white2} textColor={COLORS.orangePrimary} borderColor={COLORS.orangePrimary}  width={0.6}  nextPage={signUpPage }
/>
</View>
      </View>    )
}

export default LoginHome;