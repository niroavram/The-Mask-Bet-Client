import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#2a9d8f", //turkiz
    primaryLight: "#06d6a0",
    transparentPrimray: 'rgba(227, 120, 75, 0.4)',
    orange: "#FFA133",
    lightOrange: "#FFA133",
    lightOrange2: "#FDDED4",
    lightOrange3: '#FFD9AD',
    white3: '#a8dadc',
    green: "#27AE60",
    red: "#FF1717",
    blue: '#0064C0',
    darkBlue: "#111A2C",
    darkGray: "#525C67",
    darkGray2: "#757D85",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    white2: "#FBFBFB",
    white: '#FFFFFF',
    black: "#000000",

    transparent: 'transparent',
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)"

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    

    //
    p10: '10%',
    p20: '20%',
    p30: '30%',
    p40: '40%',
    p50: '50%',
    p60: '60%',
    p70: '70%',
    p80: '80%',
    p90: '90%',
    p100: '100%',
    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
