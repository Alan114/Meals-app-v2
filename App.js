import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meals App</Text>
      <CategoriesScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
