import {
    StyleSheet,
} from "react-native";
import {Dimensions} from 'react-native'
import {COLORS, SIZES} from "../../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50
      },
      inputContainer: {
        flex: 8,
        borderRadius: SIZES.radius,
        alignItems: 'baseline',
      },
      inputIcon: {
        paddingRight: 10,
        bottom: 0
      },
      input: {
        fontSize: 16,
        backgroundColor: COLORS.white,
        borderColor: COLORS.primary,
        borderWidth: 1,
        fontWeight: '500',
        height: 48,
        padding:10,
        borderRadius: SIZES.radius,
        width:Dimensions.get('window').width*0.9 ,
        margin:10


      }

})

export default styles;