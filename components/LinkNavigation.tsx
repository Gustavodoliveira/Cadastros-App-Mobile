import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RelativePathString, useRouter } from "expo-router";

const LinkNavigation = ({ text, page, style }) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.navigate(page)} style={style}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default LinkNavigation;

const styles = StyleSheet.create({});
