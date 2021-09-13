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
import Games from './components/games';
import Players from './components/player';

const GroupEvents = ({navigation,route}) =>{

// const [groupDet,setgroupDet]= React.useState("")
//  useEffect(()=>{
//     groupDetGet()
//  })

//  const groupDetGet = ()=>{
//      setgroupDet(route.params.group.data.totogroup)
//  }
 
   
// const addGame = (game) => {
//   setMyGames([...mygames, game]);
// };
// const removeGame = (gameevent) => {
//   setMyGames(gameevent.filter((a) => a.gameevent != resultapi));
// };

// userbets.every(removeGame);


  return (
        <Background>
        <BackButton goBack={navigation.goBack}/>
        <Logo />
        {/* <Text> {groupa.name}</Text>
        <Text>Code : {groupa.code}</Text> */}
        <View style={{flexDirection: "row", alignItems:"center", justifyContent:"space-between",}}>
            <Text style={{fontSize: SIZES.h3, color: COLORS.black, flex:1}}>
            Round  
            </Text>
            <Text style={{fontSize: SIZES.h3, color: COLORS.black, flex:1}}>
            Score: 
            </Text>
            <Text style={{fontSize: SIZES.h3, color: COLORS.black, flex:1}}>
            Doubles:
            </Text>
        </View>
        <Games/>
        <Players/>

    
      </Background>    )
}

export default GroupEvents;