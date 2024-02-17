import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/color";

export default function AppButton({ title, onPress, buttonColor = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[buttonColor] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.white,
    textTransform: "uppercase",
  },
});
