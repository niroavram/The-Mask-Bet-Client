import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text,View,Image, TouchableOpacity } from "react-native";
import Home from '../screens/Home/Home';
import Signin from '../screens/Login/Signin'
import Signup from '../screens/Login/Signup'
import Signin2 from "../screens/Login/Signin2";

import { COLORS,images } from "../constants";
// import LoginHome from "../screens/Login/LoginHome";
const Tab = createBottomTabNavigator();
const LogoHome =({children, onPress})=>(
  <TouchableOpacity style={{top:-30,justifyContent:'center',alignItems:'center',...styles.shadow}} onPress={onPress}>
    <View style={{width:70,height:70,borderRadius:35,backgroundColor: COLORS.gray}}>
      {children}
    </View>
  </TouchableOpacity>
) 
const Tabs = () => {
  var isSignin = true
  const tab1 = (  
    <>

      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({focused})=>(
          <View style={{alignItems:'center', justifyContent:"center",top:10}}> 
            <Image source={images.Home}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused? COLORS.primary : COLORS.gray3
            }}
            />
            <Text style={{color:focused? COLORS.primary : COLORS.gray3, fontSize:12}}>HOME</Text>
          </View>
        )
      }} />
          {/* <Tab.Screen name="HomeLogin" component={LoginHome} options={{
        tabBarIcon: ({focused})=>(
          <View style={{alignItems:'center', justifyContent:"center",top:10}}> 
            <Image source={images.Login}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused? COLORS.primary : COLORS.gray3
            }}
            />
            <Text style={{color:focused? COLORS.primary : COLORS.gray3, fontSize:12}}>Guy</Text>
          </View>
          
        )
      }}/> */}
            <Tab.Screen name="Signin2" component={Signin2} options={{
        tabBarIcon: ({focused})=>(
          <View style={{alignItems:'center', justifyContent:"center",top:10}}> 
            <Image source={images.Login}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused? COLORS.primary : COLORS.gray3
            }}
            />
            <Text style={{color:focused? COLORS.primary : COLORS.gray3, fontSize:12}}>Login</Text>
          </View>
          
        )
      }}/>  
       <Tab.Screen name="Home2" component={Home} options={{
tabBarIcon: ({focused})=>(
  <Image
  source={images.Logoo} 
  style={{
    width:40,
    height:40,
    tintColor: focused? COLORS.lightOrange : COLORS.primaryLight
  }}
  />
),
tabBarButton: (props)=>(<LogoHome {...props}/>)
      }} />
      <Tab.Screen name="Signin" component={Signin} options={{
        tabBarIcon: ({focused})=>(
          <View style={{alignItems:'center', justifyContent:"center",top:10}}> 
            <Image source={images.Login}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused? COLORS.primary : COLORS.gray3
            }}
            />
            <Text style={{color:focused? COLORS.primary : COLORS.gray3, fontSize:12}}>Login</Text>
          </View>
          
        )
      }}/>      
  
          <Tab.Screen name="Signup" component={Signup} options={{
        tabBarIcon: ({focused})=>(
          <View style={{alignItems:'center', justifyContent:"center",top:10}}> 
            <Image source={images.Login}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused? COLORS.primary : COLORS.gray3
            }}
            />
            <Text style={{color:focused? COLORS.primary : COLORS.gray3, fontSize:12}}>Sign Up</Text>
          </View>
          
        )
      }}/> 
      </>

  )
  const tab2 = (  
    <>

     
          {/* <Tab.Screen name="HomeLogin" component={LoginHome} options={{
        tabBarIcon: ({focused})=>(
          <View style={{alignItems:'center', justifyContent:"center",top:10}}> 
            <Image source={images.Login}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused? COLORS.primary : COLORS.gray3
            }}
            /> */}
            {/* <Text style={{color:focused? COLORS.primary : COLORS.gray3, fontSize:12}}>Guy</Text>
          </View>
          
        )
      }}/> */}
       <Tab.Screen name="Home2" component={Home} options={{
tabBarIcon: ({focused})=>(
  <Image
  source={images.Logoo} 
  style={{
    width:30,
    height:30,
    tintColor: focused? COLORS.primary : COLORS.gray3
  }}
  />
),
tabBarButton: (props)=>(<LogoHome {...props}/>)
      }} />
      <Tab.Screen name="Signin" component={Signin} options={{
        tabBarIcon: ({focused})=>(
          <View style={{alignItems:'center', justifyContent:"center",top:10}}> 
            <Image source={images.Login}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused? COLORS.primary : COLORS.gray3
            }}
            />
            <Text style={{color:focused? COLORS.primary : COLORS.gray3, fontSize:12}}>Signin</Text>
          </View>
          
        )
      }}/>
   
      </>

  )
  return (
    <Tab.Navigator
    screenOptions  ={{
      headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
            postion: 'absolute',
            bottom: 2,
            left: 5,
            right: 5,
            elevation:0,
            borderRadius: 15,
            height: 80,
            ...styles.shadow
        }
      } }
    >
 {isSignin?tab1:tab1}
 </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: COLORS.gray3,
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default Tabs