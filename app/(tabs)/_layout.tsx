import { Text, View } from "react-native";
import React, { Component } from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

export default class _layout extends Component {
  render() {
    return (
      <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons size={24} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            title: "Login",
            tabBarIcon: ({ color }) => (
              <Ionicons name="log-in" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
    );
  }
}
