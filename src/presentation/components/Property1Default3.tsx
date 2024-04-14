import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

export type Property1Default3Type = {
  option?: string;
  option1?: string;
  option2?: string;
  option3?: string;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultTop?: number | string;
  property1DefaultLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default3 = ({
  option,
  option1,
  option2,
  option3,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}: Property1Default3Type) => {
  const property1Default3Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <View style={[styles.property1default, property1Default3Style]}>
      <View style={styles.optionLayout}>
        <Text style={styles.option1}>{option}</Text>
      </View>
      <View style={[styles.option2, styles.optionLayout]}>
        <Text style={styles.option1}>{option1}</Text>
      </View>
      <View style={[styles.option2, styles.optionLayout]}>
        <Text style={styles.option1}>{option2}</Text>
      </View>
      <View style={[styles.option2, styles.optionLayout]}>
        <Text style={styles.option1}>{option3}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionLayout: {
    maxHeight: 36,
    maxWidth: 200,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 150,
    backgroundColor: Color.azul1,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
  },
  option1: {
    flex: 1,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.verde1,
    textAlign: "left",
  },
  option2: {
    marginLeft: 7,
  },
  property1default: {
    width: 307,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default Property1Default3;
