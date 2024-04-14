import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import VariantThinGreen from "../components/VariantThinGreen";
import Property1Default from "../components/Property1Default";
import Property1Elearning from "../components/Property1Elearning";
import CreditoDisponible from "../components/CreditoDisponible";
import Property1Disponible from "../components/Property1Disponible";
import { Border, Color, FontFamily } from "../GlobalStyles";

const Main = () => {
  return (
    <View style={styles.main}>
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
        navBarIcons={require("../assets/navbaricons.png")}
        vector={require("../assets/vector.png")}
        vector1={require("../assets/vector1.png")}
        vector2={require("../assets/vector2.png")}
        navBarIcons1={require("../assets/navbaricons1.png")}
        property1DefaultPosition="absolute"
        property1DefaultTop={751}
        property1DefaultLeft={0}
        property1DefaultBackgroundColor="#004e64"
        property1DefaultBorderStyle="unset"
        property1DefaultBorderColor="unset"
        navBarIconsHeight={20}
        navBarIconsWidth={20}
        navBarIconsHeight1={20}
      />
      <View style={styles.mainChild} />
      <Property1Elearning
        text={`Continuar 
Aprendizaje`}
        iconscool={require("../assets/iconscool.png")}
        property1ElearningPosition="absolute"
        property1ElearningTop={498}
        property1ElearningLeft={20}
        property1ElearningWidth={102}
        property1ElearningHeight={102}
        continuarAprendizajeLeft="13.73%"
        iconscoolHeight="19.02%"
        iconscoolBottom="55.49%"
      />
      <Property1Elearning
        text={`Solicitar 
Crédito`}
        iconscool={require("../assets/iconscool1.png")}
        property1ElearningPosition="absolute"
        property1ElearningTop={498}
        property1ElearningLeft={132}
        property1ElearningWidth={102}
        property1ElearningHeight={102}
        continuarAprendizajeLeft="23.53%"
        iconscoolHeight="19.02%"
        iconscoolBottom="55.49%"
      />
      <Property1Elearning
        text={`Aplicar a
Inversión`}
        iconscool={require("../assets/iconscool2.png")}
        property1ElearningPosition="absolute"
        property1ElearningTop={498}
        property1ElearningLeft={244}
        property1ElearningWidth={102}
        property1ElearningHeight={102}
        continuarAprendizajeLeft="22.55%"
        iconscoolHeight="18.43%"
        iconscoolBottom="56.08%"
      />
      <CreditoDisponible
        cantidadCredito="200.00"
        creditoDisponiblePosition="absolute"
        creditoDisponibleMarginLeft={-128}
        creditoDisponibleTop={270}
        creditoDisponibleBottom={423}
        creditoDisponibleLeft="50%"
      />
      <Property1Disponible
        estado="Disponible"
        property1DisponiblePosition="absolute"
        property1DisponibleTop={69}
        property1DisponibleLeft={243}
      />
      <View style={styles.title}>
        <Text style={styles.holaDeNuevo}>Hola de nuevo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainChild: {
    top: -10,
    left: 1,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.azul1,
    width: 359,
    height: 146,
    position: "absolute",
  },
  holaDeNuevo: {
    top: "0%",
    left: "0%",
    fontSize: 32,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  title: {
    top: 21,
    left: 109,
    width: 232,
    height: 48,
    position: "absolute",
  },
  main: {
    backgroundColor: Color.azul,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Main;
