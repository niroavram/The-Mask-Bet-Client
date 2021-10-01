import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollViewComponent,
    
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {COLORS,FONTS,SIZES,images} from "../../constants/index"
import axios from 'axios';
import server from '../../apis/server';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import BackButton from '../../components/Buttons/BackButton';
import Widget from '../../components/Widget';
import { AuthContext } from '../../components/context';
import Button1 from '../../components/Buttons/Button1';
import { ScrollView } from 'react-native-gesture-handler';
const Rules = ({navigation}) =>{
    
    const profilePage = () => {
        navigation.navigate('Profile')  
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

        
           
     
        <TouchableOpacity onPress={profilePage} style={{  flex:1,marginTop:50,  flexDirection:'row-reverse', alignSelf:"flex-end",justifyContent:"space-around", borderRadius: SIZES.radius, width:50 }}>
          <Ionicons name="ios-person-sharp" size={33} color={COLORS.primary} alignItems={'right'} paddingtop={10}/>
        </TouchableOpacity>
       
        <View style ={{flexDirection:'row' , flex:1, justifyContent:"center" }}>
      <Logo  width={0.15} height={0.15}  paddingleft={10} />
      </View>
        
             
        
        
        <View style={{flex:10}}>
        <View style={{flex:1}}>
        <Text style={{fontSize:SIZES.h3 ,color: COLORS.primary, fontWeight:"bold", textAlign:"center"}}>
            A football guessing game between friends 
        </Text>    
        <Text style={{fontSize:SIZES.h3 ,color: COLORS.primary, fontWeight:"bold", textAlign:"center"}}>  
            The purpose is to catch all the games 
        </Text>
        </View> 
        <View style={{flex:9}}>     
        <Text style={{fontSize:18 ,color: COLORS.primary, fontWeight:"bold", textAlign:"left", left:10}}>
            Game's Rules:
        </Text>
        <Text style={{fontSize:15 ,color: COLORS.primary, textAlign:"left", left:10}}>
        <Text style={{fontWeight:"bold", left:10}}>1.</Text> You can create a new group and invited your{"\n"} 
            &nbsp;&nbsp;&nbsp; freinds by sharing the Group code. You can also{"\n"} 
            &nbsp;&nbsp;&nbsp; enter any existing group by entering a group{"\n"} 
            &nbsp;&nbsp;&nbsp; code.{"\n"}
            <Text style={{fontWeight:"bold", left:10}}>2.</Text> Only an admin user who created the group may{"\n"} 
            &nbsp;&nbsp;&nbsp; create the Group Event {"\n"}
            <Text style={{fontWeight:"bold", left:10}}>3.</Text> Create an Event: {"\n"}
            &nbsp;&nbsp; <Text style={{fontWeight:"bold", left:10}}>a.</Text> You neet to select between 5-9 games you{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; want to play on them from the games list. The  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; games list is up to date a week after. {"\n"}
            &nbsp;&nbsp; <Text style={{fontWeight:"bold", left:10}}>b.</Text> Set a allowed amount of "doubles" (double {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; bet) during a single round. {"\n"}
            &nbsp;&nbsp; <Text style={{fontWeight:"bold", left:10}}>c.</Text> Playing with "Mask"? Allows all team members {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to invent a player name so that none of the {"\n"} 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; team members know who is who. At the{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; beginning of the last game the mask will go  {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; down and everyone will find out who the{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; players are.{"\n"}
            &nbsp;&nbsp; <Text style={{fontWeight:"bold", left:10}}>d.</Text> Set points for Event. Each time you create an{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Event, you need to set game points.{"\n"}
            <Text style={{fontWeight:"bold", left:10}}>4.</Text> The winner is the player who managed to catch{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp; all the games correctly and he gets all the {"\n"}  
            &nbsp;&nbsp;&nbsp;&nbsp; points, if no one catches in the round the  {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp; points are automatically accumulated for the {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp; next round. {"\n"}
            <Text style={{fontWeight:"bold", left:10}}>5.</Text> During each Event you can see on the "LIVE"{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp; page the results of the games, and see who still {"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp; has a chance to win and who is losing.
        </Text>
        </View>   
        </View>      
        
           
            
  </View>
  
       )
}

export default Rules;