import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import Input from "@/components/Input";
import Form from "@/components/Form";
import { Constant } from "@/constants/Constants";
import Btn from "@/components/Btn";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default class register extends Component {
  render() {
    return (
      <View>
        <Text style={styles.h1}>Register</Text>
        <Form>
          <Input
            iconName={"person-outline"}
            onChangeText={(text: string) => console.log(text)}
            placeHolder={"Name"}
          />
          <Input
            iconName={"person-outline"}
            onChangeText={(text: string) => console.log(text)}
            placeHolder={"User name"}
          />
          <Input
            iconName={"mail-outline"}
            onChangeText={(text: string) => console.log(text)}
            placeHolder={"E-mail"}
          />
          <Input
            iconName={"lock-closed-outline"}
            onChangeText={(text: string) => console.log(text)}
            placeHolder={"Password"}
          />
          <Btn
            text={"Submit"}
            Icon={<Ionicons name="send" size={16} color={Colors.btnText} />}
            onPress={() => console.log("Heloo")}
          />
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: Constant.h1.fontSize,
    fontWeight: "500",
    textAlign: "center",
    marginVertical: 24,
  },
});
