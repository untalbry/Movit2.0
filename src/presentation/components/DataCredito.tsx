import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

export type DataCreditoType = {
  campo?: string;
  value?: string;
  visible?: boolean;

  /** Style props */
  dataCreditoPosition?: string;
  dataCreditoTop?: number | string;
  dataCreditoLeft?: number | string;
  dataCreditoWidth?: number | string;
  dataCreditoHeight?: number | string;
  dataCreditoOpacity?: number;
  valorLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DataCredito = ({
  campo = "Label",
  value = "valor",
  visible = true,
  dataCreditoPosition,
  dataCreditoTop,
  dataCreditoLeft,
  dataCreditoWidth,
  dataCreditoHeight,
  dataCreditoOpacity,
  valorLeft,
}: DataCreditoType) => {
  const dataCreditoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dataCreditoPosition),
      ...getStyleValue("top", dataCreditoTop),
      ...getStyleValue("left", dataCreditoLeft),
      ...getStyleValue("width", dataCreditoWidth),
      ...getStyleValue("height", dataCreditoHeight),
      ...getStyleValue("opacity", dataCreditoOpacity),
    };
  }, [
    dataCreditoPosition,
    dataCreditoTop,
    dataCreditoLeft,
    dataCreditoWidth,
    dataCreditoHeight,
    dataCreditoOpacity,
  ]);

  const valorStyle = useMemo(() => {
    return {
      ...getStyleValue("left", valorLeft),
    };
  }, [valorLeft]);

  return (
    <View style={[styles.datacredito, dataCreditoStyle]}>
      <Text style={[styles.label, styles.labelTypo]}>{campo}</Text>
      {visible && <View style={styles.datacreditoChild} />}
      <Text style={[styles.valor, styles.labelTypo, valorStyle]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  label: {
    width: "60.74%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  datacreditoChild: {
    height: "93.33%",
    width: "39.26%",
    top: "3.33%",
    right: "0%",
    bottom: "3.33%",
    left: "60.74%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightseagreen_100,
    position: "absolute",
  },
  valor: {
    top: "16.67%",
    left: "74.85%",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
  },
  datacredito: {
    width: 326,
    height: 30,
  },
});

export default DataCredito;
