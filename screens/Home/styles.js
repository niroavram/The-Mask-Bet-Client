import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: COLORS.white2
    //justifyContent: "center",
    //alignItems: "center",
  },
  groupContainer: {
     flex:8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius+10,
    backgroundColor: COLORS.white2,
    width: '100%'
  },
  item: {
    margin: 12,
    padding: 15,
  
    backgroundColor: COLORS.darkWhite,
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.35,
    justifyContent: "center",
    alignItems: "center", 
    shadowColor: COLORS.newBlue,    
    borderRadius: SIZES.radius,
    borderColor: COLORS.white2,
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
