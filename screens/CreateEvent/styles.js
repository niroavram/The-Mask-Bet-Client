import {
    StyleSheet,
} from "react-native";
import {Dimensions} from 'react-native'
import {COLORS, SIZES} from "../../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        color:COLORS.primary
      },
      inputContainer: {
        flex: 2,
        marginBottom: 30,
        backgroundColor: 'transparent',
        borderRadius: SIZES.radius,
        alignItems: 'baseline',
        color:COLORS.primary
      },
      inputIcon: {
        paddingRight: 10,
        bottom: 0
      },
      input: {
        fontSize: 15,
        color: COLORS.primary,
    
        
        fontWeight: 'bold',
        height: 20,
        borderRadius: SIZES.radius,
        left:4,
        width:Dimensions.get('window').width*0.2,
        
        margin:10


      }

})

export default styles;