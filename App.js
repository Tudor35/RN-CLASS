import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { fontAwesome, AntDesign } from "@expo/vector-icons";
import { categoriesData } from "./mockdata/category.data.js";

const App = () => {
  const height = 200;
  const width = 200;
  console.log(categoriesData);
  console.log("Is Working ");
  return (
    <View
      style={{ flex: 1, marginTop: 50, padding: 10, backgroundColor: "#FAFA" }}
    >
      <FlatList
        data={categoriesData}
        renderItem={(category) => {
          return (
            <View
              style={{
                backgroundColor: "orange",
                borderRadius: 20,
                width: 155,
                height: 167,
                marginLeft: 10,
                marginBottom: 10,
                marginRight: 10,
                justifyContent:"centre",
                alignItems:"centre"
              }}
            >
              <Image source={category.item.image} />
            </View>
          );
        }}
        keyExtractor={(category) => category.id}
        numColumns={2}
        containerStyle={{ gap: 20 }}
      />
    </View>
  );
};

export default App;
