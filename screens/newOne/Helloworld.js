import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {COLORS,FONTS,SIZES} from "../../constants/index"
import axios from 'axios';
import Button1 from '../../components/Buttons/Button1';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import BackButton from '../../components/Buttons/BackButton';
import Btn from '../../components/Btn';

const hello = ({navigation}) =>{
  return (
        <Background>
        {/* <BackButton goBack={navigation.goBack}/> */}
        <Logo />
        <Text>Hello World</Text>

      </Background>    )
}

export default hello;