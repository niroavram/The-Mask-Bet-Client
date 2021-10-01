import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button,
    Dimensions,
    I18nManager
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
I18nManager.allowRTL(false)

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
        <View style={{flex: 1,
          width: '100%',
          padding: 2,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.white2}}>
                    <BackButton goBack={navigation.goBack}/>

          <View style={{flex:1,bottom:0}}>
{/* <Text style={{fontSize: SIZES.largeTitle ,color: COLORS.lightOrange3}}>
  Welcome !
  </Text>    */}
         </View>
       
          <View style={{
    flex:6 ,
    borderRadius: 25,
    backgroundColor: COLORS.white2,
    
    width: Dimensions.get('window').width*0.9,
    justifyContent: 'center',
    alignItems: 'center',bottom:0

  }}>

        <View style={{flex:1}}>
        <Logo />
</View>
<View style={{flex:1}}>
<Text style={{fontSize: SIZES.h2 ,color: COLORS.primary, fontWeight:"bold" ,textAlign: "center"}}>
 Hello , Nir {"\n"}
  </Text>
  <Text style={{fontSize: SIZES.h3 ,color: COLORS.primary,textAlign: "center"} }>
 Here you can see your profile name {"\n"}and the amount of coins you {"\n"}have achieved so far
  </Text>      
         </View>
        
        <View style={styles.inputContainer}>
          <View style={{flexDirection:'row'}}>
        <Text style={{fontSize: SIZES.h1 ,color: COLORS.primary, fontWeight:"bold"}}>
 Coins:   <Image source={images.bitcoin}
            resizeMode='contain'
            style={{
              width:20,
              height:20,
            
            }}
            />{coins}
            {"\n"}
  </Text>  

            </View>
  <Button1 text="Get Coins"  backgroundColor={COLORS.orangePrimary}  borderColor={COLORS.orangePrimary} nextPage={Coins} width={0.4}/>
            </View>
           
            <View style={{flex:1}}>
            <Button1 text="Sign Out" backgroundColor={COLORS.yellow} borderColor={COLORS.yellow}  width={0.6}  nextPage={ signOut}/>
            </View>
  </View>
  <View style={{flex:1,bottom:0}}>
{/* <Text style={{fontSize: SIZES.largeTitle ,color: COLORS.lightOrange3}}>
  Welcome !
  </Text>    */}
         </View>
      </View>    )
}

export default Profile;