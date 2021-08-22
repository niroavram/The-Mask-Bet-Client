import React, { Component } from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import Tabs from "./navigation/Tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./components/context";
import Home from "./screens/Home/Home";
import Signin from "./screens/Login/Signin";
import Signup from "./screens/Login/Signup";
import LoginHome from "./screens/Login/LoginHome";

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserTsoken] = React.useState(null);
  
  const authContext = React.useMemo(() => ({
    signIn: (user) => {
      setIsLoading(false), setUserTsoken(user);
    },
    signOut: () => {
      setIsLoading(false), setUserTsoken(null);
    },
    signUp: () => {
      setIsLoading(false), setUserTsoken("ss");
    },
  }));
  console.log(userToken)
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null?(<Tabs/>):(
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
