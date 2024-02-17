import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../App/components/AppText";
import colors from "../App/config/color";
import ListItem from "../App/components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../App/assets/jacket.jpg")}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={{ marginVertical: 50 }}>
        <ListItem
          title="Aarish Faiz"
          image={require("../App/assets/aarish.jpg")}
          subtitle="5 Listings"
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
