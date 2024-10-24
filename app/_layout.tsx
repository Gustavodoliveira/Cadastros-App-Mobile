import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarStyle: style.tabBar,
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={`${color}`} />
          ),
        }}
      />
      <Tabs.Screen name="Login" options={{ title: "Login" }} />
    </Tabs>
  );
};

const style = StyleSheet.create({
  tabBar: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    maxWidth: "85%",
    margin: "auto",
    marginVertical: 30,
    padding: 8,
    borderRadius: 100,
    shadowOffset: { width: 5, height: 10 },
    shadowColor: "001212",
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
});

export default _layout;
