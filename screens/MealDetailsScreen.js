import React from "react";
import { Text, View } from "react-native";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the meals details screen!! ({mealId}) </Text>
    </View>
  );
};

export default MealDetailsScreen;
