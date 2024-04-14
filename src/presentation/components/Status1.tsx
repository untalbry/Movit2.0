import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

export type Status1Type = {
  /** Style props */
  status50Position?: string;
  status50Height?: number | string;
  status50Top?: number | string;
  status50Left?: number | string;
  status50Width?: number | string;
  rectangleViewWidth?: number | string;
  rectangleViewRight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Status1 = ({
  status50Position,
  status50Height,
  status50Top,
  status50Left,
  status50Width,
  rectangleViewWidth,
  rectangleViewRight,
}: Status1Type) => {
  const status50Style = useMemo(() => {
    return {
      ...getStyleValue("position", status50Position),
      ...getStyleValue("height", status50Height),
      ...getStyleValue("top", status50Top),
      ...getStyleValue("left", status50Left),
      ...getStyleValue("width", status50Width),
    };
  }, [
    status50Position,
    status50Height,
    status50Top,
    status50Left,
    status50Width,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", rectangleViewWidth),
      ...getStyleValue("right", rectangleViewRight),
    };
  }, [rectangleViewWidth, rectangleViewRight]);

  return (
    <View style={[styles.status50, status50Style]}>
      <View style={[styles.status50Child, styles.status50Position]} />
      <View
        style={[
          styles.status50Item,
          styles.status50Position,
          rectangleViewStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  status50Position: {
    borderRadius: Border.br_9xs,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  status50Child: {
    width: "100%",
    right: "0%",
    backgroundColor: Color.azul1,
  },
  status50Item: {
    width: "47.66%",
    right: "52.34%",
    backgroundColor: Color.verde2,
  },
  status50: {
    width: 256,
    height: 8,
  },
});

export default Status1;
