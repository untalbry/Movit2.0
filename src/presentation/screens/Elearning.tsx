import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import VariantThinGreen from "../components/VariantThinGreen";
import Property1Default from "../components/Property1Default";
import FrameComponent from "../components/FrameComponent";
import Property1Default3 from "../components/Property1Default3";
import Property1Default5 from "../components/Property1Default5";
import Status1 from "../components/Status1";
import { Border, Color } from "../GlobalStyles";

const Elearning = () => {
  return (
    <View style={styles.elearning}>
      <View style={styles.elearningChild} />
      <VariantThinGreen
        text={`Veamos qué 
tipo de 
ahorrador eres`}
        showFrameView={false}
        variantThinGreenPosition="absolute"
        variantThinGreenTop={53}
        variantThinGreenLeft={68}
        variantThinGreenMarginLeft="unset"
        frameViewMarginLeft={-87.5}
      />
      <Property1Default
        navBarIcons={require("../assets/iconscool3.png")}
        vector={require("../assets/iconscool4.png")}
        vector1={require("../assets/iconscool5.png")}
        vector2={require("../assets/iconscool6.png")}
        navBarIcons1={require("../assets/iconscool7.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={755}
        property1DefaultLeft={0}
        property1DefaultBackgroundColor="#e6e6e6"
        property1DefaultBorderStyle="solid"
        property1DefaultBorderColor="#092f39"
        property1DefaultBorderTopWidth={0.4}
        navBarIconsHeight={19}
        navBarIconsWidth={23}
        navBarIconsHeight1={24}
      />
      <FrameComponent
        titlePoppins="Financiamiento"
        frameViewPosition="absolute"
        frameViewTop={0}
        frameViewLeft={0}
        frameViewMarginLeft={-102.5}
        showFrameView
      />
      <Property1Default3
        option="Garantías "
        option1="Ahorro"
        option2="Taza de interes"
        option3="Seguros"
        property1DefaultPosition="absolute"
        property1DefaultTop={391}
        property1DefaultLeft={26}
      />
      <Property1Default5
        text={`Es un elemento de un 
crédito`}
        property1DefaultPosition="absolute"
        property1DefaultWidth={306}
        property1DefaultHeight={80}
        property1DefaultMarginLeft={-153}
        property1DefaultTop={291}
        property1DefaultLeft="50%"
        frameViewWidth={106}
        frameViewHeight={36}
      />
      <Status1
        status50Position="absolute"
        status50Height={7}
        status50Top={507}
        status50Left={13}
        status50Width={340}
        rectangleViewWidth="47.65%"
        rectangleViewRight="52.35%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  elearningChild: {
    position: "absolute",
    top: 277,
    left: 12,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_7xs,
    borderBottomLeftRadius: Border.br_7xs,
    backgroundColor: "#d9d9d9",
    width: 340,
    height: 237,
  },
  elearning: {
    backgroundColor: Color.blanco,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Elearning;
