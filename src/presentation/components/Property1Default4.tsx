import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type Property1Default4Type = {
  text?: string;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default4 = ({
  text = "Option",
  property1DefaultPosition,
  property1DefaultMarginLeft,
}: Property1Default4Type) => {
  const property1Default4Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("marginLeft", property1DefaultMarginLeft),
    };
  }, [property1DefaultPosition, property1DefaultMarginLeft]);

  return (
    <View style={[styles.property1default, property1Default4Style]}>
      <Text style={styles.option}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    flex: 1,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.verde1,
    textAlign: "left",
  },
  property1default: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.azul1,
    width: 150,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    maxWidth: 200,
    maxHeight: 36,
  },
});

export default Property1Default4;
