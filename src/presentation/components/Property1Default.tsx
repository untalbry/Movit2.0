import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Color } from "../GlobalStyles";

export type Property1DefaultType = {
  navBarIcons?: ImageSourcePropType;
  vector?: ImageSourcePropType;
  vector1?: ImageSourcePropType;
  vector2?: ImageSourcePropType;
  navBarIcons1?: ImageSourcePropType;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultTop?: number | string;
  property1DefaultLeft?: number | string;
  property1DefaultBackgroundColor?: string;
  property1DefaultBorderStyle?: string;
  property1DefaultBorderColor?: string;
  property1DefaultBorderTopWidth?: number;
  navBarIconsHeight?: number | string;
  navBarIconsWidth?: number | string;
  navBarIconsHeight1?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  navBarIcons,
  vector,
  vector1,
  vector2,
  navBarIcons1,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultBackgroundColor,
  property1DefaultBorderStyle,
  property1DefaultBorderColor,
  property1DefaultBorderTopWidth,
  navBarIconsHeight,
  navBarIconsWidth,
  navBarIconsHeight1,
}: Property1DefaultType) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("backgroundColor", property1DefaultBackgroundColor),
      ...getStyleValue("borderStyle", property1DefaultBorderStyle),
      ...getStyleValue("borderColor", property1DefaultBorderColor),
      ...getStyleValue("borderTopWidth", property1DefaultBorderTopWidth),
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultBackgroundColor,
    property1DefaultBorderStyle,
    property1DefaultBorderColor,
    property1DefaultBorderTopWidth,
  ]);

  const navBarIconsStyle = useMemo(() => {
    return {
      ...getStyleValue("height", navBarIconsHeight),
    };
  }, [navBarIconsHeight]);

  const navBarIcons1Style = useMemo(() => {
    return {
      ...getStyleValue("width", navBarIconsWidth),
      ...getStyleValue("height", navBarIconsHeight1),
    };
  }, [navBarIconsWidth, navBarIconsHeight1]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <Image
        style={[styles.navbaricons, navBarIconsStyle]}
        contentFit="cover"
        source={navBarIcons}
      />
      <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
      <Image style={styles.vectorIcon} contentFit="cover" source={vector1} />
      <Image style={styles.vectorIcon} contentFit="cover" source={vector2} />
      <Image
        style={[styles.navbaricons1, navBarIcons1Style]}
        contentFit="cover"
        source={navBarIcons1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbaricons: {
    height: 20,
    width: 25,
  },
  vectorIcon: {
    height: 19,
    marginLeft: 42,
    width: 25,
  },
  navbaricons1: {
    width: 20,
    marginLeft: 42,
    height: 20,
  },
  property1default: {
    backgroundColor: Color.azul1,
    width: 360,
    height: 49,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Property1Default;
