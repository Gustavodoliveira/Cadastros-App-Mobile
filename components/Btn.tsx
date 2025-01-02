import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { JSXElementConstructor, ReactElement } from "react";
import { Colors } from "@/constants/Colors";
import { Icon } from "@expo/vector-icons/build/createIconSet";

const Btn = ({ onPress, text, Icon }) => {
  return (
    <Pressable onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.textStyle}>{text}</Text>
      <Text style={styles.iconStyle}>{Icon ? Icon : ""}</Text>
    </Pressable>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    backgroundColor: Colors.btnColor,
    borderRadius: 20,
    width: 150,
    height: 42,
    position: "relative",
  },

  textStyle: {
    color: Colors.btnText,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 20,
    marginTop: 12,
  },
  iconStyle: {
    position: "absolute",
    left: 110,
    top: 10,
  },
});
