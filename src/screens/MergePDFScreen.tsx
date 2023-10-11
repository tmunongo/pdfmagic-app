import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Button } from "react-native-paper";
import Pdf from "react-native-pdf";

export interface MergeForm {
  fileA: any;
  fileB: any;
}

export interface Document {
  uri: string;
  cache: boolean;
}

const MergePDFScreen = () => {
  const { width, height } = useWindowDimensions();
  const [form, setForm] = useState<MergeForm>();
  const [docA, setDocA] = useState<Document>({
    uri: "",
    cache: false,
  });

  const selectDocument = async (event) => {
    event.preventDefault();
    const doc = await DocumentPicker.getDocumentAsync();
    setDocA((previousValues) => ({
      ...previousValues,
      uri: doc.assets[0].uri,
    }));
    console.log(doc.assets[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayArea}>
        {docA.uri.length > 0 ? (
          <Pdf
            source={docA}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
              console.log(error);
            }}
            onPressLink={(uri) => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={{ flex: 1, width, height }}
          />
        ) : (
          <Button onPress={(event) => selectDocument(event)}>
            Select Document
          </Button>
        )}
      </View>
      <View style={styles.displayArea}>
        <Button onPress={() => DocumentPicker.getDocumentAsync()}>
          Select Document
        </Button>
      </View>
      <View>
        <Button>Submit</Button>
      </View>
    </View>
  );
};

export default MergePDFScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  displayArea: {
    borderColor: "#292929",
    borderRadius: 5,
    borderWidth: 1,
    height: "45%",
    marginVertical: 4,
    padding: 8,
    width: "95%",
  },
});
