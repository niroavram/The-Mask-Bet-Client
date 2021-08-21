import React, { Component } from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "./screens/Home/Home";
// import Signin from "./screens/Login/Signin";
// import Signup from "./screens/Login/Signup";
// import LoginHome from "./screens/Login/LoginHome";

const Stack = createStackNavigator();

const App = () => {
  const [isLoading,setIsLoading] = React.useState(true)
  // const [isLoading,setIsLoading] = React.useState()

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      > */}
        <Tabs />
        {/* <Stack.Screen name="Home" component={Tabs} /> */}
        {/* <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="LoginHome" component={LoginHome} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
