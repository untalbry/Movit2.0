import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

export type CreditoDisponibleType = {
  cantidadCredito?: string;

  /** Style props */
  creditoDisponiblePosition?: string;
  creditoDisponibleMarginLeft?: number | string;
  creditoDisponibleTop?: number | string;
  creditoDisponibleBottom?: number | string;
  creditoDisponibleLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CreditoDisponible = ({
  cantidadCredito = "200.00",
  creditoDisponiblePosition,
  creditoDisponibleMarginLeft,
  creditoDisponibleTop,
  creditoDisponibleBottom,
  creditoDisponibleLeft,
}: CreditoDisponibleType) => {
  const creditoDisponibleStyle = useMemo(() => {
    return {
      ...getStyleValue("position", creditoDisponiblePosition),
      ...getStyleValue("marginLeft", creditoDisponibleMarginLeft),
      ...getStyleValue("top", creditoDisponibleTop),
      ...getStyleValue("bottom", creditoDisponibleBottom),
      ...getStyleValue("left", creditoDisponibleLeft),
    };
  }, [
    creditoDisponiblePosition,
    creditoDisponibleMarginLeft,
    creditoDisponibleTop,
    creditoDisponibleBottom,
    creditoDisponibleLeft,
  ]);

  return (
    <View style={[styles.creditodisponible, creditoDisponibleStyle]}>
      <Text style={[styles.text, styles.textTypo]}>{cantidadCredito}</Text>
      <Text style={[styles.text1, styles.textTypo]}>$</Text>
      <Text style={[styles.creditoDisponible, styles.textTypo]}>
        Credito disponible
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text: {
    left: "16.22%",
    fontSize: FontSize.size_45xl,
    top: "10.28%",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text1: {
    left: "0%",
    fontSize: FontSize.size_45xl,
    top: "10.28%",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  creditoDisponible: {
    top: "0%",
    left: "5.41%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  creditodisponible: {
    width: 259,
  },
});

export default CreditoDisponible;
