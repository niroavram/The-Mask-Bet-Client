import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button,
    StyleSheet
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const ButtonInside = (props) =>{
    const {text}=props
    return (
        <View style={styles.btn}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    btn:{
      backgroundColor: COLORS.white4,
        width:100,
        height:30,
        borderRadius: SIZES.radius,
        justifyContent: "center",
        alignItems: "center", 
        margin:5  
    },
    text:{
        fontSize: 19,
        color: COLORS.white
    }
  })
export default ButtonInside;