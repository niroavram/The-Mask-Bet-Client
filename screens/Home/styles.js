import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupContainer: {
    margin: 15,
    padding: 15,
    width: SIZES.p80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
  },
  item: {
    margin: 12,
    padding: 15,
    backgroundColor: COLORS.gray2,
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.35,
    justifyContent: "center",
    alignItems: "center", 
    borderRadius: SIZES.radius,
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
    shadowOffset:{
        width:5,
        height:10
      },
    shadowColor: COLORS.lightOrange
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
