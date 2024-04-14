import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type Property1DisponibleType = {
  estado?: string;

  /** Style props */
  property1DisponiblePosition?: string;
  property1DisponibleTop?: number | string;
  property1DisponibleLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Disponible = ({
  estado = "Disponible",
  property1DisponiblePosition,
  property1DisponibleTop,
  property1DisponibleLeft,
}: Property1DisponibleType) => {
  const property1DisponibleStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DisponiblePosition),
      ...getStyleValue("top", property1DisponibleTop),
      ...getStyleValue("left", property1DisponibleLeft),
    };
  }, [
    property1DisponiblePosition,
    property1DisponibleTop,
    property1DisponibleLeft,
  ]);

  return (
    <View style={[styles.property1disponible, property1DisponibleStyle]}>
      <View style={styles.property1disponibleChild} />
      <Text style={styles.disponible}>{estado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  property1disponibleChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorMediumaquamarine,
    position: "absolute",
  },
  disponible: {
    top: "8%",
    left: "11.22%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  property1disponible: {
    width: 98,
    height: 25,
  },
});

export default Property1Disponible;
