import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "@/components/Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import Btn from "@/components/Btn";
import { Colors } from "../../constants/Colors";
import Form from "@/components/Form";
import LinkNavigation from "@/components/LinkNavigation";

const login = () => {
  return (
    <View>
      <Text style={styles.h1}>Login</Text>
      <Form>
        <Input
          onChangeText={(text) => console.log(text)}
          placeHolder={"E-mail"}
          iconName="mail"
        />
        <Input
          onChangeText={(text) => console.log(text)}
          placeHolder={"Password"}
          iconName="lock-closed-outline"
        />
        <Btn
          onPress={() => console.log("hello")}
          text={"Submit"}
          Icon={<Ionicons name="send" size={16} color={Colors.btnText} />}
        />
      </Form>
      <LinkNavigation text={"link up"} page={"/register"} />
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  h1: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    marginTop: 150,
  },
});
