import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import ListItem from "../App/components/ListItem";
import ListItemSeperator from "../App/components/ListItemSeperator";
import color from "../App/config/color";
import ListItemDeleteAction from "../App/components/ListItemDeleteAction";

export default function MessageScreen() {
  const initialMessage = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      Image: require("../App/assets/aarish.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      Image: require("../App/assets/aarish.jpg"),
    },
  ];

  const [message, setMessage] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (deletedItem) => {
    const newMessage = message.filter((item) => item.id !== deletedItem.id);
    setMessage(newMessage);
  };

  return (
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
          title={item.title}
          subtitle={item.description}
          image={item.Image}
          onPress={() => console.log("Message selected", item)}
          // renderRightActions={(item)=>{
          //   <ListItemDeleteAction onPress={()=> handleDelete(item)} />
          // }}
          iconHandler={() => handleDelete(item)}
          
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 2,
              title: "T2",
              description: "D2",
              Image: require("../App/assets/aarish.jpg"),
            },
          ]);
        }}
      />
  );
}

const styles = StyleSheet.create({});
