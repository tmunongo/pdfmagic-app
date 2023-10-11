import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import NavButton from "../components/NavButton";
import SplitPDFScreen from "./SplitPDFScreen";

const MainScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.buttonsGrid}>
      <View style={styles.tools}>
        <View style={styles.row}>
          <NavButton
            title="Split PDF"
            icon="file-document"
            to={"SplitPDFScreen"}
            navigate={navigate}
          />
          <NavButton
            title="Extract Pages"
            icon="file-document-multiple"
            to={"ExtractPagesScreen"}
            navigate={navigate}
          />
        </View>
        <View style={styles.row}>
          <NavButton
            title="Merge PDF"
            icon="file-document"
            to={"MergePDFScreen"}
            navigate={navigate}
          />
          <NavButton
            title="Extract Pages"
            icon="file-document-multiple"
            to={SplitPDFScreen}
            navigate={navigate}
          />
        </View>
      </View>
      <Divider />
      <View style={styles.history}>
        <Text>Your File History Will Be Here</Text>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  buttonsGrid: {
    display: "flex",
    flex: 2,
    marginHorizontal: "auto",
  },
  history: {
    padding: 8,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
    width: Dimensions.get("screen").width,
  },
  tools: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
