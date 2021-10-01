import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
const gameChecker = (props) => {
  var wid = Dimensions.get("window").width;
  const [index, setIndex] = useState(0);
  const{game,gamesEvent}= props;
  const [gameApi, setGameApi] = useState(null);
  const [win, setWin] = useState(null);
  const [isWin, setIsWin] = useState(false);

    
  const Checker=()=>{ 
    
     for(let i=0;i<gamesEvent.length;i++){
       if(game.homeTeam===gamesEvent[i].homeTeam&&game.awayTeam===gamesEvent[i].awayTeam){
        setGameApi(gamesEvent[i])
       }
     }
  }
  if(gameApi===null){
    Checker();
  }
    // const isWin = GameResult(game.bet).includes(GameScore(gameEvent.gameApi.scoreHomeTeam,gameEvent.gameApi.scoreAwayTeam))
    // console.log(isWin,game.bet,gameEvent.gameApi.scoreHomeTeam,gameEvent.gameApi.scoreAwayTeam)

  const GameResult=(score)=>{ 
    
      var bet = ""
      score[0]?bet+="1 ":''
      score[1]?bet+="X ":''
      score[2]?bet+="2 ":''
      return bet
  }

const GameScore=(home,away)=>{  
  var score = home - away
  var bet = "0"
  score < 0 ? bet ="2" : score > 0 ? bet ="1" : bet = "X"
  return bet
}

if(win===null && gameApi!=null){
    setWin(1)
    var bet = GameScore(gameApi.gameApi.scoreHomeTeam,gameApi.gameApi.scoreAwayTeam)
    setIsWin((GameResult(game.bet)).includes(bet))
}
  return (

        <View  style={{flex: 1,flexDirection:"column", alignItems:'center',justifyContent:'center', borderRadius: SIZES.radius, backgroundColor: isWin? COLORS.orangePrimary: COLORS.gray2, margin:3,marginTop:10, height: 20, marginBottom:10 }}>
            <Text style={{ flex:5 ,fontSize: SIZES.h3, color:COLORS.primary,  alignItems:'center',justifyContent:'center' }}> {GameResult(game.bet)}</Text>
        </View>

  );
};

export default gameChecker;
