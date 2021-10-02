import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    I18nManager
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
I18nManager.allowRTL(false)

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
        <View style={{flex:2}}>
        <Text style={{fontSize:SIZES.h3 ,color: COLORS.primary, fontWeight:"bold", textAlign:"center"}}>
            A football guessing game between friends 
        </Text>    
        <Text style={{fontSize:SIZES.h3 ,color: COLORS.primary, fontWeight:"bold", textAlign:"center"}}>  
            The purpose is to catch all the games 
        </Text>

        </View> 
        <View style={{flex:1}}>
        <Text style={{fontSize:18 ,color: COLORS.primary, fontWeight:"bold", textAlign:"left", left:10}}>
            Game's Rules:
        </Text>
        </View>
        <View style={{ flex:12}}> 
            <ScrollView > 
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>1. </Text>
                </View>
                <View style={{flex:6}}>
                <Text style={{fontSize:15,textAlign:'justify', width:'96%', color:COLORS.primary}}>
                You can create a new group and invited your
                freinds by sharing the Group code. You can 
                also enter any existing group by entering a 
                group code.{"\n"}
                </Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>2. </Text>
                </View>
                <View style={{flex:6}}>
                <Text style={{fontSize:15, textAlign:'justify',  width:'96%' ,color:COLORS.primary}}>
                Only an admin user who created the group may create the Group Event {"\n"}
                </Text>
                </View>
            </View> 
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>3. </Text>
                </View>
                <View style={{flex:6}}>
                <Text style={{fontSize:15, textAlign:'justify',  width:'96%' ,color:COLORS.primary}}>
                Create an Event: {"\n"}
                </Text>
                </View>
            </View> 
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20, left:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>a. </Text>
                </View>
                <View style={{flex:6, left:20, flexWrap:'wrap', flexDirection:'row'}}>
                <Text style={{fontSize:15, textAlign:'justify',  width:'90%' ,color:COLORS.primary}}>
                You neet to select between 5-9 games you want to play on them from the games list. The games list is up to date a week after.{"\n"}
                </Text>
                </View>
            </View> 
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20, left:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>b. </Text>
                </View>
                <View style={{flex:6, left:20, flexWrap:'wrap', flexDirection:'row'}}>
                <Text style={{fontSize:15, textAlign:'justify',  width:'90%' ,color:COLORS.primary}}>
                Set amount of "doubles" (double bet) during a single round. {"\n"}                
                </Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20, left:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>c. </Text>
                </View>
                <View style={{flex:6, left:20, flexWrap:'wrap', flexDirection:'row'}}>
                <Text style={{fontSize:15, textAlign:'justify',  width:'90%' ,color:COLORS.primary}}>
                Playing with "Mask"? Allows all team members to invent a player name so that none of the team members know who is who. At the beginning of the last game the mask will go down and everyone will find out who the players are.{"\n"}               
                </Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20, left:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>d. </Text>
                </View>
                <View style={{flex:6, left:20, flexWrap:'wrap', flexDirection:'row'}}>
                <Text style={{fontSize:15, textAlign:'justify',  width:'90%' ,color:COLORS.primary}}>
                Set points for Event. Each time you create an Event, you need to set game points.{"\n"}              
                </Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>4. </Text>
                </View>
                <View style={{flex:6}}>
                <Text style={{fontSize:15, textAlign:'justify',  width:'96%' ,color:COLORS.primary}}>
                The winner is the player who managed to catch all the games correctly and he gets all the points, if no one catches in the round the points are automatically accumulated for the next round. {"\n"}
                </Text>
                </View>
            </View> 
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-start', flexWrap:'wrap', marginVertical:4,  justifyContent:'center', }}>
                <View style={{width:20}}>
                <Text style={{fontSize:15,color:COLORS.primary, fontWeight:'bold'}}>5. </Text>
                </View>
                <View style={{flex:6}}>
                <Text style={{fontSize:15, textAlign:'justify',  width:'96%' ,color:COLORS.primary}}>
                During each Event you can see on the "LIVE" page the results of the games, and see who still has a chance to win and who is losing.{"\n"}
                </Text>
                </View>
            </View> 

            
            <Text style={{fontWeight:"bold", textAlign:'center', fontSize:SIZES.h1, color:COLORS.primary}}> Start Playing!! {"\n"}</Text>
           
            </ScrollView>  
        </View>   
       
        </View>      
        
           
            
  </View>
  
       )
}

export default Rules;