import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type TypeLargeType = {
  text?: string;

  /** Style props */
  typeLargePosition?: string;
  typeLargeWidth?: number | string;
  typeLargeHeight?: number | string;
  typeLargeTop?: number | string;
  typeLargeLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeLarge = ({
  text = "Button",
  typeLargePosition,
  typeLargeWidth,
  typeLargeHeight,
  typeLargeTop,
  typeLargeLeft,
}: TypeLargeType) => {
  const typeLargeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeLargePosition),
      ...getStyleValue("width", typeLargeWidth),
      ...getStyleValue("height", typeLargeHeight),
      ...getStyleValue("top", typeLargeTop),
      ...getStyleValue("left", typeLargeLeft),
    };
  }, [
    typeLargePosition,
    typeLargeWidth,
    typeLargeHeight,
    typeLargeTop,
    typeLargeLeft,
  ]);

  return (
    <View style={[styles.typelarge, typeLargeStyle]}>
      <Text style={styles.button}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.verde1,
    textAlign: "left",
  },
  typelarge: {
    borderRadius: Border.br_base,
    backgroundColor: Color.azul1,
    width: 225,
    height: 27,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
  },
});

export default TypeLarge;
