import { StyleSheet, Text, View } from "react-native";
import React, { ChildContextProvider, ReactPortal } from "react";

const Form = ({ children }) => {
  return <View style={styles.formContainer}>{children}</View>;
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: "auto",
    marginTop: 60,
    gap: 20,
    flexWrap: "wrap",
  },
});
