import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../App/components/Screen";
import ListItem from "../App/components/ListItem";
import { FlatList } from "react-native";
import color from "../App/config/color";
import Icon from "../App/components/Icon";
import ListItemSeperator from "../App/components/ListItemSeperator";

export default function AccountScreen() {
  const menuItems = [
    {
      title: "My Listing",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: color.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: color.secondary,
      },
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Aarish Faiz"
          subtitle="aarishfaiz456@gmai.com"
          image={require("../App/assets/aarish.jpg")}
        />
      </View>
      <View style={styles.container}>
        <ListItemSeperator />
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              } 
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: color.light,
  },
});
