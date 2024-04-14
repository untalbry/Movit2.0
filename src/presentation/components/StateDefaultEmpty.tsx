import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type StateDefaultEmptyType = {
  label1?: string;
  valueContent?: string;
  successMessage?: boolean;
  optionalLabel?: boolean;
  errorMessage?: boolean;
  label?: boolean;
  helpIcon?: boolean;
  rightIcon?: boolean;
  value?: boolean;
  leftIcon?: boolean;

  /** Style props */
  stateDefaultEmptyPosition?: string;
  stateDefaultEmptyTop?: number | string;
  stateDefaultEmptyLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultEmpty = ({
  label1,
  valueContent = "Value",
  successMessage = false,
  optionalLabel = false,
  errorMessage = false,
  label = true,
  helpIcon = false,
  rightIcon = false,
  value = true,
  leftIcon = false,
  stateDefaultEmptyPosition,
  stateDefaultEmptyTop,
  stateDefaultEmptyLeft,
}: StateDefaultEmptyType) => {
  const stateDefaultEmptyStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultEmptyPosition),
      ...getStyleValue("top", stateDefaultEmptyTop),
      ...getStyleValue("left", stateDefaultEmptyLeft),
    };
  }, [stateDefaultEmptyPosition, stateDefaultEmptyTop, stateDefaultEmptyLeft]);

  return (
    <View style={[styles.statedefaultEmpty, stateDefaultEmptyStyle]}>
      {label && (
        <View style={styles.labelStack}>
          <Text style={styles.label}>{label1}</Text>
          {optionalLabel && (
            <Text style={[styles.label1, styles.label1SpaceBlock]}>
              Optional
            </Text>
          )}
          {helpIcon && (
            <Image
              style={[styles.infoIcon, styles.infoIconLayout]}
              contentFit="cover"
              source={require("../assets/info.png")}
            />
          )}
        </View>
      )}
      <View style={[styles.textInput, styles.textInputFlexBox]}>
        {leftIcon && (
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        )}
        {value && (
          <Text style={[styles.value, styles.valueTypo]}>{valueContent}</Text>
        )}
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
            style={styles.infoIconLayout}
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
            style={styles.infoIconLayout}
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
  label1SpaceBlock: {
    marginLeft: 10,
    display: "none",
  },
  infoIconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
  },
  textInputFlexBox: {
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  valueTypo: {
    fontFamily: FontFamily.wFBodyBodyMedium,
    flex: 1,
  },
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
    display: "none",
  },
  messageTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    flex: 1,
  },
  label: {
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    flex: 1,
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
  },
  label1: {
    color: Color.colorSlategray,
    textAlign: "right",
    fontFamily: FontFamily.wFBodyBodyMedium,
    flex: 1,
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    marginLeft: 10,
  },
  infoIcon: {
    marginLeft: 10,
    display: "none",
  },
  labelStack: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  value: {
    fontSize: FontSize.wFBodyBodyMedium_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    color: Color.colorSilver,
    marginLeft: 4,
    textAlign: "left",
  },
  chevronDownIcon: {
    marginLeft: 4,
  },
  textInput: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_2xs,
  },
  errorMessage1: {
    color: Color.colorCrimson,
  },
  errorMessage: {
    display: "none",
    marginTop: 4,
    alignItems: "center",
  },
  successMessage1: {
    color: Color.colorLimegreen,
  },
  statedefaultEmpty: {
    width: 320,
    justifyContent: "flex-end",
  },
});

export default StateDefaultEmpty;
