import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "@/components/Input";
import Ionicons from "@expo/vector-icons/Ionicons";

const login = () => {
  return (
    <View>
      <Input
        onChangeText={(text) => console.log(text)}
        placeHolder={"E-mail"}
        iconName="mail"
      />
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
