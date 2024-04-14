import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type Property1ElearningType = {
  text?: string;
  iconscool?: ImageSourcePropType;

  /** Style props */
  property1ElearningPosition?: string;
  property1ElearningTop?: number | string;
  property1ElearningLeft?: number | string;
  property1ElearningWidth?: number | string;
  property1ElearningHeight?: number | string;
  continuarAprendizajeLeft?: number | string;
  iconscoolHeight?: number | string;
  iconscoolBottom?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Elearning = ({
  text = "Continuar \nAprendizaje",
  iconscool,
  property1ElearningPosition,
  property1ElearningTop,
  property1ElearningLeft,
  property1ElearningWidth,
  property1ElearningHeight,
  continuarAprendizajeLeft,
  iconscoolHeight,
  iconscoolBottom,
}: Property1ElearningType) => {
  const property1ElearningStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1ElearningPosition),
      ...getStyleValue("top", property1ElearningTop),
      ...getStyleValue("left", property1ElearningLeft),
      ...getStyleValue("width", property1ElearningWidth),
      ...getStyleValue("height", property1ElearningHeight),
    };
  }, [
    property1ElearningPosition,
    property1ElearningTop,
    property1ElearningLeft,
    property1ElearningWidth,
    property1ElearningHeight,
  ]);

  const continuarAprendizajeStyle = useMemo(() => {
    return {
      ...getStyleValue("left", continuarAprendizajeLeft),
    };
  }, [continuarAprendizajeLeft]);

  const iconscoolStyle = useMemo(() => {
    return {
      ...getStyleValue("height", iconscoolHeight),
      ...getStyleValue("bottom", iconscoolBottom),
    };
  }, [iconscoolHeight, iconscoolBottom]);

  return (
    <View style={[styles.property1elearning, property1ElearningStyle]}>
      <View style={styles.property1elearningChild} />
      <Text style={[styles.continuarAprendizaje, continuarAprendizajeStyle]}>
        {text}
      </Text>
      <Image
        style={[styles.iconscool, iconscoolStyle]}
        contentFit="cover"
        source={iconscool}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1elearningChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.azul1,
    position: "absolute",
  },
  continuarAprendizaje: {
    top: "54.9%",
    left: "13.73%",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  iconscool: {
    height: "19.02%",
    width: "24.51%",
    top: "25.49%",
    right: "38.24%",
    bottom: "55.49%",
    left: "37.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1elearning: {
    width: 102,
    height: 102,
  },
});

export default Property1Elearning;
