import React from "react";
import { FlatList, Text, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;
