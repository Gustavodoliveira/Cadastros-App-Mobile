import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import React, { ComponentProps } from "react";

type InputProps = {
  onChange: (text: string) => {};
  placeHolder: string;
};

const Input = (props: InputProps) => {
  return (
    <TextInput
      onChangeText={props.onChange}
      style={styles.input}
      placeholder={props.placeHolder}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    width: 300,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#CBD5E1",
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
});
