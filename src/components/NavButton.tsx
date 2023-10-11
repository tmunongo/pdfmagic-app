import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NavButton = ({ title, icon, to, navigate }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <MaterialCommunityIcons name={icon} color="#f58" size={26} />
        <Button onPress={() => navigate(to)}>{title}</Button>
      </View>
    </Card>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    shadowColor: "#292929",
    shadowRadius: 5,
  },
  card: {
    padding: 8,
    width: "45%",
  },
});
