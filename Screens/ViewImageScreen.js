import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../App/config/color";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        resizeMethod="contain"
        source={require("../App/assets/chair.jpg")}
      />
      <View style={styles.closeicon}>
        <AntDesign name="closecircle" size={30} color="white" />
      </View>
      <View style={styles.deleteicon}>
        <AntDesign name="delete" size={30} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeicon: {
    position: "absolute",
    top: 40,
    left: 30,
    borderRadius: 9,
  },
  deleteicon: {
    position: "absolute",
    top: 40,
    right: 30,
    borderRadius: 9,
  },
  background: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    backgroundColor: colors.black,
  },
});
