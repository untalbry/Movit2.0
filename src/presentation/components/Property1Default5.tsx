import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Property1Default5Type = {
  text?: string;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultWidth?: number | string;
  property1DefaultHeight?: number | string;
  property1DefaultMarginLeft?: number | string;
  property1DefaultTop?: number | string;
  property1DefaultLeft?: number | string;
  frameViewWidth?: number | string;
  frameViewHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default5 = ({
  text = "Sub-title",
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultMarginLeft,
  property1DefaultTop,
  property1DefaultLeft,
  frameViewWidth,
  frameViewHeight,
}: Property1Default5Type) => {
  const property1Default5Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("width", property1DefaultWidth),
      ...getStyleValue("height", property1DefaultHeight),
      ...getStyleValue("marginLeft", property1DefaultMarginLeft),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
    };
  }, [
    property1DefaultPosition,
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultMarginLeft,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("height", frameViewHeight),
    };
  }, [frameViewWidth, frameViewHeight]);

  return (
    <View style={[styles.property1default, property1Default5Style]}>
      <View style={[styles.subTitleWrapper, frameView3Style]}>
        <Text style={styles.subTitle}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  subTitleWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  property1default: {
    width: 106,
    height: 36,
  },
});

export default Property1Default5;
