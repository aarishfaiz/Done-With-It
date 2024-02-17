import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/color";
import { AntDesign } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import color from "../config/color";

export default function ListItem({
  title,
  image,
  subtitle,
  onPress,
  renderRightActions,
  IconComponent,
  iconHandler,
}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        </View>
        {iconHandler && (
          <AntDesign
            onPress={iconHandler}
            style={styles.deleteicon}
            name="delete"
            size={30}
            color="black"
          />
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: color.white,
  },
  deleteicon: {
    position: "absolute",
    right: 10,
    top: 25,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
    fontSize: 18,
  },
});
