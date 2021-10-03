import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Button,
    TextInput,
    Alert,
    Dimensions,I18nManager
} from 'react-native';
import styles from "./styles"
import { Ionicons } from '@expo/vector-icons';
import {COLORS,FONTS,SIZES} from "../../constants/index"
import axios from 'axios';
import Button1 from '../../components/Buttons/Button1';
import server from '../../apis/server';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import BackButton from '../../components/Buttons/BackButton';
import Widget from '../../components/Widget';
import { AuthContext } from '../../components/context';

const Signin = ({navigation}) =>{
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
 

  const {signIn} = React.useContext(AuthContext)
  const postData = ()=>{
  server.post('signin',{email,password})
  .then(function(res){
      signIn(res.data)
  })
  .catch(function(error){
    Alert.alert("The Mask bet","Invalid Email Or Password")
  })
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

          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
 
         </View>
       
          <View style={{
    flex: 4,
    borderRadius: 25,
    backgroundColor: COLORS.white2,
    shadowColor: COLORS.white2,
    shadowOpacity: 0.5,
    shadowRadius:25,
    width: Dimensions.get('window').width*0.9,
    justifyContent: 'center',
    alignItems: 'center',bottom:0,
    borderWidth:1,
    borderColor: COLORS.white2

  }}>

        <View style={{flex:8 ,alignItems:'center',justifyContent:'center'}}>
        <Logo  width={0.3} height={0.3}/>
        <Text style={{fontSize: SIZES.h2,color: COLORS.primary, textAlign: "center", fontWeight:"bold"}}> {"\n"}The Mask Bet</Text>
</View>
<View style={{flex:1}}>

         </View>
        
        <View style={styles.inputContainer}>
 
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            placeholder="Email"
            selectionColor={COLORS.primary}
            keyboardAppearance='dark'
            placeholderTextColor={COLORS.darkGray}
            onChangeText={setEmail}
            value={email}   />
              
              <TextInput
            style={styles.input}
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            placeholder="Password"
            selectionColor={COLORS.primary}
            keyboardAppearance='dark'
            secureTextEntry
            placeholderTextColor={COLORS.darkGray}
            value={password}
            onChangeText={setPassword} />
               
       
            </View>
            <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                    style={[styles.signIn, {
                    
                        flex:4
                    }]}
                >
                    <Text style={{ color: COLORS.primary}}>Didn't have account yet? <Text style={[styles.textSign, {
                      color: '#009387'
                  }]}>Sign Up</Text> </Text>
                      
                </TouchableOpacity>
            <View style={{flex:7}}>
            <Button1 text="Sign In"  backgroundColor={COLORS.orangePrimary} borderColor={COLORS.orangePrimary}  width={0.6}  nextPage={ postData} />

            </View>
  </View>
      </View>    )
}

export default Signin;