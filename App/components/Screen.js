import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React from "react";

export default function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>
    <View style={style}>
      {children}
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1, // Ensure that the screen takes up the entire available space
  },
});
