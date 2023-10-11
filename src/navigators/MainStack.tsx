import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import ExtractPagesScreen from "../screens/ExtractPagesScreen";
import MainScreen from "../screens/MainScreen";
import MergePDFScreen from "../screens/MergePDFScreen";
import SplitPDFScreen from "../screens/SplitPDFScreen";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="SplitPDFScreen"
        component={SplitPDFScreen}
        options={{
          title: "Split PDF",
        }}
      />
      <Stack.Screen
        name="ExtractPagesScreen"
        component={ExtractPagesScreen}
        options={{
          title: "Extract Pages",
        }}
      />
      <Stack.Screen
        name="MergePDFScreen"
        component={MergePDFScreen}
        options={{
          title: "Merge PDFs",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
