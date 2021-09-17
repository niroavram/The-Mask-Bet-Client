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
import { AntDesign } from '@expo/vector-icons';
import { COLORS, images, SIZES } from "../../../constants";
import moment from "moment";


const Game = (props) => {
  const { item, index, choosenBet } = props;
  var wid = Dimensions.get("window").width;
  const [isSlected1, setIsSlected1] = useState(false);
  const [isSlectedX, setIsSlectedX] = useState(false);
  const [isSlected2, setIsSlected2] = useState(false);

const selectedItem1 = (bet)=>{
  setIsSlected1(!isSlected1)
  item.bet[bet]===0? item.bet[bet]=1:item.bet[bet]=0
  choosenBet(item._id,bet)
}
const selectedItemX = (bet)=>{
  setIsSlectedX(!isSlectedX)
  item.bet[bet]===0? item.bet[bet]=1:item.bet[bet]=0
  choosenBet(item._id,bet)
}
const selectedItem2 = (bet)=>{
  setIsSlected2(!isSlected2)
  item.bet[bet]===0? item.bet[bet]=1:item.bet[bet]=0
  choosenBet(item._id,bet)
}

  return (
    <View
          key={index}
          style={{
            flexDirection: "row",
            borderWidth: 0.5,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.gray2,
            marginTop: 4,
            width: wid
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: SIZES.h2, borderRightWidth:0.5,backgroundColor: COLORS.gray,borderRadius:50 }}>{index + 1}</Text>
          </View>
     
          <View
            style={{ flex: 5, justifyContent: "center" }}
          >
            <Text style={{ fontSize: SIZES.h3,textAlign:'left' }}>{item.homeTeam}</Text>
            <Text style={{ fontSize: SIZES.h3,textAlign: 'left' }}>{item.awayTeam}</Text>
          </View>
          <View
            style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: SIZES.h5 }}>
              {moment(item.startGame).format("ddd, h:mm a")}
            </Text>
          </View>
          <View
            style={{
              flex: 5,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => selectedItem1(0)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.5,
                borderRadius: SIZES.radius,
                backgroundColor:
                  isSlected1? COLORS.primaryLight : COLORS.gray,
              }}
            >
              <Text style={{ fontSize: SIZES.h2 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectedItemX(1)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.5,
                borderRadius: SIZES.radius,
                backgroundColor:
                isSlectedX? COLORS.primaryLight : COLORS.gray,
              }}
            >
              <Text style={{ fontSize: SIZES.h2 }}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectedItem2(2)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.5,
                borderRadius: SIZES.radius,
                backgroundColor:
                isSlected2? COLORS.primaryLight : COLORS.gray,
              }}
            >
              <Text style={{ fontSize: SIZES.h2 }}>2</Text>
            </TouchableOpacity>
          </View>
        </View>

  );
};

export default Game;
