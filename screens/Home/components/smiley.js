import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';
import { SIZES,COLORS } from '../../../constants';
import Button1 from '../../../components/Buttons/Button1';
import Logo from '../../../components/Logo';
import hello from '../../newOne/hello';
const smiley = ({navigation,joinPage}) =>{
    const [displayJoin, setDisplayJoin] = React.useState(false);
    const nextPage = () =>{
        navigation.navigate('Signin')
    }
    

    return (
        <View style={styles.ctn}>
              <Logo />
            {/* <Text style={{fontSize: SIZES.h1}}>The Mask Bet</Text> */}
            <View style={styles.rows}>
                <Button1 text="Create" backgroundColor={COLORS.primary} nextPage={nextPage} width={0.3}/>
                <Button1 text="Join" backgroundColor={COLORS.primary} nextPage={joinPage}  width={0.3}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rows:{
        height:Dimensions.get('window').height*0.2,
        borderRadius: SIZES.radius,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",     
    },
    ctn:{
        marginTop:100,
        top:40,
        alignItems: "center",     

    }
  })

export default smiley;