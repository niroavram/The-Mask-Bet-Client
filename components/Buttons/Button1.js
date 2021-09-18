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
import { COLORS, FONTS, SIZES } from '../../constants';

const Button1 = (props) =>{
    const {text,backgroundColor,borderColor, textColor,width,nextPage}=props
    return (
        <TouchableOpacity onPress={nextPage} style={{
            backgroundColor: backgroundColor,
            width: Dimensions.get('window').width*width,
            height:35,
            borderRadius: SIZES.radius,
            borderColor: borderColor|| COLORS.primary,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center", 
            margin:5}}>
  
            <Text style={{fontSize: SIZES.h2,
        color:textColor?textColor: COLORS.white}}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn:{
      backgroundColor: COLORS.primaryLight,
        width:130,
        height:35,
        borderRadius: SIZES.radius,
        justifyContent: "center",
        alignItems: "center", 
        margin:10  
    },
    text:{
        fontSize: SIZES.h2,
        color: COLORS.white
    }
  })
export default Button1;