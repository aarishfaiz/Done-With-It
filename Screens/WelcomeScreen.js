import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import AppButton from "../App/components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../App/assets/background.jpg")}
      style={styles.imagebackground}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../App/assets/logo-red.png")}
        />
        <Text
          style={{
            fontWeight: 600,
            fontSize: 25,
            paddingVertical: 20,
          }}
        >
          Sell What You Don't Need
        </Text>
      </View>
      <View style={styles.btncontainer}>
        <AppButton title={"Login"} />
        <AppButton title={"Register"} buttonColor="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagebackground: {
    // flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  btncontainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});
