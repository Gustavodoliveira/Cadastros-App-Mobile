import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RelativePathString, useRouter } from "expo-router";

const LinkNavigation = ({ text, page }) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.navigate(page)}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default LinkNavigation;

const styles = StyleSheet.create({});
