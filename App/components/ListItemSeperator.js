import { StyleSheet, View } from "react-native";
import colors from "../config/color";
import React from "react";


export default function ListItemSeperator() {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light,
  }
});
