import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";

const Input = ({ onChangeText, placeHolder, iconName }) => {
  return (
    <View style={style.containerInput}>
      <TextInput
        onChangeText={onChangeText}
        style={style.input}
        textAlign="left"
        placeholder={placeHolder}
      />
      {iconName ? (
        <Ionicons name={iconName} style={style.inputIcon} size={16} />
      ) : (
        ""
      )}
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    width: 210,
    height: 42,

    margin: "auto",
  },
  input: {
    borderColor: Colors.dark,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 11,
    height: "100%",
    width: "100%",
    backgroundColor: Colors.BgColor,
    paddingHorizontal: 25,
    flex: 1,
  },
  inputIcon: { position: "absolute", right: 5, top: 11 },
});
