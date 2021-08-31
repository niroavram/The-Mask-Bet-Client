import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { List } from "react-native-paper";
import { COLORS } from "../../../constants";
const Leagues = (props) => {
    const {item}=props
    var upp = item.upcoming
    if(upp.length>0){

    }
    
  return (
    <View style={{width: Dimensions.get('window').width}} >
      <List.Accordion
        title={item.league_name}
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
         
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </View>
  );
};

export default Leagues;
