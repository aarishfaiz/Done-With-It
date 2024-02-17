import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/color";
import AppText from "./AppText";

export default function Card({ title, image, subtitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.imgStyle} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={{ marginBottom: 7 }}>{title}</AppText>
        <AppText style={{ color: colors.secondary, fontWeight: "bold" }}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  imgStyle: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
});
