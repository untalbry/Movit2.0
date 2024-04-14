import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

export type Property1Default2Type = {
  returnLeft?: ImageSourcePropType;

  /** Style props */
  property1DefaultPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default2 = ({
  returnLeft,
  property1DefaultPosition,
}: Property1Default2Type) => {
  const property1Default2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
    };
  }, [property1DefaultPosition]);

  return (
    <View style={[styles.property1default, property1Default2Style]}>
      <Image
        style={styles.returnLeftIcon}
        contentFit="cover"
        source={returnLeft}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  returnLeftIcon: {
    width: 12,
    height: 18,
  },
  property1default: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.azul1,
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
});

export default Property1Default2;
