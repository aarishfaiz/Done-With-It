import { StyleSheet, Text } from "react-native";
import React from "react";
import defaultStyle from "../config/style";
export default function AppText({ children, style }) {
  return <Text style={[defaultStyle.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({});
