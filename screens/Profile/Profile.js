import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button,
    Dimensions
} from 'react-native';
import styles from "./styles"
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
const Profile = ({navigation}) =>{
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [s, setPad]=useState("ss")
 
  // const getDataUsingAsyncAwaitGetCall = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://the-mask-bet-server.herokuapp.com/leagues',
  //     );
  //     alert(JSON.stringify(response.data));
  //     setPad(JSON.stringify(response))
  //   } catch (error) {
  //     // handle error
  //     alert(error.message);
  //   }
  // };
  const {signOut} = React.useContext(AuthContext)
  const [coins,setCoins] =  React.useState(5400)
  const postData = ()=>{

    signOut()

}
const Coins = ()=>{

    setCoins(10000)

}
  return (
        <Background>
                    <BackButton goBack={navigation.goBack}/>

          <View style={{flex:1,bottom:0}}>
{/* <Text style={{fontSize: SIZES.largeTitle ,color: COLORS.lightOrange3}}>
  Welcome !
  </Text>    */}
         </View>
       
          <View style={{
    flex:6 ,
    borderRadius: 25,
    backgroundColor: 'rgba(180, 180, 180, 0.8)',
    shadowColor: COLORS.gray3,
    shadowOpacity: 0.5,
    shadowRadius:25,
    width: Dimensions.get('window').width*0.8,
    justifyContent: 'center',
    alignItems: 'center',bottom:0

  }}>

        <View style={{flex:1}}>
        <Logo />
</View>
<View style={{flex:1}}>
<Text style={{fontSize: SIZES.largeTitle ,color: COLORS.darkGray}}>
 Profile
  </Text>   
         </View>
        
        <View style={styles.inputContainer}>
          <View style={{flexDirection:'row'}}>
        <Text style={{fontSize: SIZES.h1 ,color: COLORS.darkGray}}>
 Coins:   <Image source={images.bitcoin}
            resizeMode='contain'
            style={{
              width:40,
              height:40,
            
            }}
            />{coins}
  </Text>  

            </View>
  <Button1 text="Get Coins" backgroundColor={COLORS.orange} nextPage={Coins} width={0.3}/>
            </View>
           
            <View style={{flex:1}}>
            <Button title=" SignOut" onPress={()=>{signOut()}}/>
            </View>
  </View>
  <View style={{flex:1,bottom:0}}>
{/* <Text style={{fontSize: SIZES.largeTitle ,color: COLORS.lightOrange3}}>
  Welcome !
  </Text>    */}
         </View>
      </Background>    )
}

export default Profile;