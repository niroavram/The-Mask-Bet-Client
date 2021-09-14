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
const smiley = ({navigation}) =>{
    const [displayJoin, setDisplayJoin] = React.useState(false);
    const nextPage = () =>{
        navigation.navigate('CreateGroup')
    }
    const joinPage = () =>{
        navigation.navigate('JoinGroup')
    }

    

    return (
        <View style={styles.ctn}>
              <Logo />
            {/* <Text style={{fontSize: SIZES.h1}}>The Mask Bet</Text> */}
            <View style={styles.rows}>
                <Button1 text="Create" backgroundColor={COLORS.lightOrange} nextPage={nextPage} width={0.45}/>
                <Button1 text="Join" backgroundColor={COLORS.lightOrange} nextPage={joinPage}  width={0.45}/>

            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rows:{
        borderRadius: SIZES.radius,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",     
    },
    ctn:{
        flex: 2,
        alignItems: "center",     

    }
  })

export default smiley;