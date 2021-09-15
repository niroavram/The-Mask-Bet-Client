import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
      flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  groupContainer: {
     flex:6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius+10,
    backgroundColor: COLORS.gray2,
    width: '100%'
  },
  item: {
    margin: 12,
    padding: 15,
    backgroundColor: COLORS.lightGray2,
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.35,
    justifyContent: "center",
    alignItems: "center", 
    shadowColor: COLORS.lightOrange,    
    borderRadius: SIZES.radius,
    borderWidth: 0.5,
    shadowOpacity: 0.8,
    shadowRadius: 3.5,
    elevation: 6,
    shadowOffset:{
        width:5,
        height:10
      },
    
  },
  btn: {
    marginHorizontal: 15,
    backgroundColor: COLORS.lightOrange2,
    fontSize: SIZES.h5,
    width: 100,
    borderRadius: SIZES.radius,
    alignItems: "center",
  },
});

export default styles;
