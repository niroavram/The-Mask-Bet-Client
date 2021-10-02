import React, { useEffect } from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View,I18nManager } from "react-native";
import Tabs from "./navigation/Tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./components/context";
import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
import Signin from "./screens/Login/Signin";
import Signup from "./screens/Login/Signup";
import LoginHome from "./screens/Login/LoginHome";
import JoinGroup from "./screens/CreateGroup/JoinGroup";
import CreateGroup from "./screens/CreateGroup/CreateGroup";
import CreateEvent from "./screens/CreateEvent/CreateEvent";
import CreateUserBet from "./screens/CreateUserBet/CreateUserBet";
import Group from "./screens/Group/Group";
import Rules from "./screens/Ruels/Ruels";
import AsyncStorage from '@react-native-async-storage/async-storage';
import GroupEvents from "./screens/GroupEvents/GroupEvents";
const Stack = createStackNavigator();
I18nManager.allowRTL(false)
const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserTsoken] = React.useState(null);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {

    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {

      const user = foundUser.user
      console.log(user)
      try {
        await AsyncStorage.setItem('userToken', foundUser.token)
        await AsyncStorage.setItem('userId', user._id),AsyncStorage.setItem('userName', user.username);

      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: user._id, token: foundUser.token });
    },
    signOut: async() => {
     
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('useeId');
        await AsyncStorage.removeItem('userName');

      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
 
    },
 
  }), []);
  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  // console.log(userToken)
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userName !== null?(
        
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      > 
    
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="CreateGroup" component={CreateGroup} />
    <Stack.Screen name="CreateEvent" component={CreateEvent} />
    <Stack.Screen name="JoinGroup" component={JoinGroup} />
    <Stack.Screen name="Group" component={Group} />
    <Stack.Screen name="GroupEvents" component={GroupEvents} />
    <Stack.Screen name="CreateUserBet" component={CreateUserBet} />
    <Stack.Screen name="Rules" component={Rules} />



      </Stack.Navigator>):(
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      > 
    
    <Stack.Screen name="LoginHome" component={LoginHome} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      
      </Stack.Navigator>
        )}
   
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
