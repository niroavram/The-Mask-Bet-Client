import React, {useState,useEffect} from 'react';
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

const Group = ({navigation,route}) =>{
const [groupDet,setgroupDet]= React.useState("")
 useEffect(()=>{
    groupDetGet()
 })
 const groupDetGet = ()=>{
     setgroupDet(route.params.group.data.totogroup)
 }
    console.log(groupDet)
    // const {group} = route
    // let groupa = group.data
  return (
        <Background>
        <BackButton goBack={navigation.goBack}/>
        <Logo />
        {/* <Text> {groupa.name}</Text>
        <Text>Code : {groupa.code}</Text> */}
        <View>
            <Text style={{fontSize: SIZES.h1, color: COLORS.white}}>
           name {groupDet.name}
            </Text>
            <Text style={{fontSize: SIZES.h1, color: COLORS.white}}>
            Code : {groupDet.code}
            </Text>
        </View>
      </Background>    )
}

export default Group;