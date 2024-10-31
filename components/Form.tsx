import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [State, setState] = useState("");
  return (
    <View style={styles.formContainer}>
      <Input onChange={async (e) => setState(e)} placeHolder="E-mail" />
      <Input onChange={async (e) => setState(e)} placeHolder="User Name" />
      <Input onChange={async (e) => setState(e)} placeHolder="Password" />
      <Input
        onChange={async (e) => setState(e)}
        placeHolder="Confirm Password"
      />
      <Text>{State}</Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    alignItems: "center",
    gap: 30,
    justifyContent: "center",
    marginVertical: "50%",
  },
});
