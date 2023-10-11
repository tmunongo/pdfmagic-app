import React from "react";
import { StyleSheet, View } from "react-native";

const Divider = () => {
  return <View style={styles.line}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#292929",
    height: 1,
  },
});
