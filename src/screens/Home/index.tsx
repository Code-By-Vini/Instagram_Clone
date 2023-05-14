import { View, Text, StyleSheet } from "react-native";

export function Home()
{
  return (
    <View style={styles.container}></View>
  )
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center"
  }
}
);