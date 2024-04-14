import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type Property1Default1Type = {
  valueContent?: string;
  rightIcon?: boolean;
  successMessage?: boolean;
  leftIcon?: boolean;
  value?: boolean;
  errorMessage?: boolean;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultTop?: number | string;
  property1DefaultLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default1 = ({
  valueContent = "Cantidad",
  rightIcon = false,
  successMessage = false,
  leftIcon = false,
  value = true,
  errorMessage = false,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}: Property1Default1Type) => {
  const property1Default1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <View style={[styles.property1default, property1Default1Style]}>
      <View style={[styles.textInput, styles.textInputFlexBox]}>
        {leftIcon && (
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        )}
        {value && <Text style={styles.value}>{valueContent}</Text>}
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        {rightIcon && (
          <Image
            style={[styles.chevronDownIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-down.png")}
          />
        )}
      </View>
      {errorMessage && (
        <View style={[styles.errorMessage, styles.textInputFlexBox]}>
          <Image
            style={styles.iconwarning}
            contentFit="cover"
            source={require("../assets/iconwarning.png")}
          />
          <Text style={[styles.errorMessage1, styles.messageTypo]}>
            Error message
          </Text>
        </View>
      )}
      {successMessage && (
        <View style={[styles.errorMessage, styles.textInputFlexBox]}>
          <Image
            style={styles.iconwarning}
            contentFit="cover"
            source={require("../assets/check.png")}
          />
          <Text style={[styles.successMessage1, styles.messageTypo]}>
            Success message
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 20,
    width: 20,
    display: "none",
    overflow: "hidden",
  },
  messageTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    marginLeft: 4,
    textAlign: "left",
    flex: 1,
  },
  searchIcon: {
    display: "none",
    overflow: "hidden",
  },
  value: {
    fontSize: FontSize.wFBodyBodyMedium_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontFamily: FontFamily.wFBodyBodyMedium,
    color: Color.colorLightsteelblue,
    marginLeft: 4,
    textAlign: "left",
    flex: 1,
  },
  vectorIcon: {
    width: 15,
    height: 8,
    marginLeft: 4,
  },
  chevronDownIcon: {
    marginLeft: 4,
    display: "none",
    overflow: "hidden",
  },
  textInput: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_2xs,
  },
  iconwarning: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  errorMessage1: {
    color: Color.colorCrimson,
  },
  errorMessage: {
    marginTop: 4,
    display: "none",
  },
  successMessage1: {
    color: Color.colorLimegreen,
  },
  property1default: {
    width: 320,
    justifyContent: "flex-end",
  },
});

export default Property1Default1;
