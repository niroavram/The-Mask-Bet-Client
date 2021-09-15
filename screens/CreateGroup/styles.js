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
        flex: 1,
        marginBottom: 30,
        backgroundColor: 'transparent',
        borderRadius: SIZES.radius,
        alignItems: 'baseline',
      },
      inputIcon: {
        paddingRight: 10,
        bottom: 0
      },
      input: {
        fontSize: 20,
        color: COLORS.darkGray2,
        borderColor: COLORS.primary,
        borderWidth: 1,
        fontWeight: '700',
        height: 48,
        borderRadius: SIZES.radius,
        left:4,
        width:Dimensions.get('window').width*0.8 ,
        padding: 10,
        margin:10


      }

})

export default styles;