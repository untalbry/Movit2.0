import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

export type FrameComponentType = {
  titlePoppins?: string;
  showFrameView?: boolean;

  /** Style props */
  frameViewPosition?: string;
  frameViewTop?: number | string;
  frameViewLeft?: number | string;
  frameViewMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  titlePoppins,
  frameViewPosition,
  frameViewTop,
  frameViewLeft,
  frameViewMarginLeft,
  showFrameView,
}: FrameComponentType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [frameViewPosition, frameViewTop, frameViewLeft]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", frameViewMarginLeft),
    };
  }, [frameViewMarginLeft]);

  return (
    <View
      style={[styles.returnParent, styles.returnParentFlexBox, frameViewStyle]}
    >
      <View style={styles.return}>
        <Image
          style={styles.returnLeftIcon}
          contentFit="cover"
          source={require("../assets/returnleft.png")}
        />
      </View>
      <View style={styles.title}>
        <View
          style={[
            styles.titlePoppinsWrapper,
            styles.returnParentFlexBox,
            frameView1Style,
          ]}
        >
          <Text style={styles.titlePoppins}>{titlePoppins}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  returnParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  returnLeftIcon: {
    width: 12,
    height: 18,
  },
  return: {
    borderRadius: Border.br_5xs,
    padding: Padding.p_3xs,
    flexDirection: "row",
    backgroundColor: Color.azul1,
  },
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
    justifyContent: "center",
  },
  title: {
    width: 175,
    height: 39,
    marginLeft: 30,
  },
  returnParent: {
    width: 360,
    height: 63,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    backgroundColor: Color.azul1,
    alignItems: "center",
  },
});

export default FrameComponent;
