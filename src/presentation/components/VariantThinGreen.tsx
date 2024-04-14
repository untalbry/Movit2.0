import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type VariantThinGreenType = {
  text?: string;
  showFrameView?: boolean;

  /** Style props */
  variantThinGreenPosition?: string;
  variantThinGreenTop?: number | string;
  variantThinGreenLeft?: number | string;
  variantThinGreenMarginLeft?: number | string;
  frameViewMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VariantThinGreen = ({
  text = "Title-Poppins",
  showFrameView,
  variantThinGreenPosition,
  variantThinGreenTop,
  variantThinGreenLeft,
  variantThinGreenMarginLeft,
  frameViewMarginLeft,
}: VariantThinGreenType) => {
  const variantThinGreenStyle = useMemo(() => {
    return {
      ...getStyleValue("position", variantThinGreenPosition),
      ...getStyleValue("top", variantThinGreenTop),
      ...getStyleValue("left", variantThinGreenLeft),
      ...getStyleValue("marginLeft", variantThinGreenMarginLeft),
    };
  }, [
    variantThinGreenPosition,
    variantThinGreenTop,
    variantThinGreenLeft,
    variantThinGreenMarginLeft,
  ]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", frameViewMarginLeft),
    };
  }, [frameViewMarginLeft]);

  return (
    <View style={[styles.variantthingreen, variantThinGreenStyle]}>
      {showFrameView && (
        <View style={[styles.titlePoppinsWrapper, frameView2Style]}>
          <Text style={styles.titlePoppins}>{text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titlePoppins: {
    fontSize: FontSize.size_7xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.verde1,
    textAlign: "center",
  },
  titlePoppinsWrapper: {
    position: "absolute",
    marginLeft: -87.5,
    top: 0,
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  variantthingreen: {
    width: 175,
    height: 39,
  },
});

export default VariantThinGreen;
