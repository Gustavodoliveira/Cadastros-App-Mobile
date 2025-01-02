import Btn from "@/components/Btn";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <ScrollView>
      <Image source={require("@/assets/homepage.png")} />
      <Text style={styles.h1}>Cadastro App</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem
        esse aperiam quo pariatur provident nisi illum quam vel. Nesciunt
        quisquam perferendis, adipisci dolores vitae libero ab consequatur illo
        cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Totam nisi autem vero consectetur repellendus aut. Ipsa totam delectus
        dolores facilis beatae quod in, omnis, reprehenderit vel praesentium
        eveniet sint nesciunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Placeat, ullam deserunt neque magnam maiores qui
        reprehenderit ducimus odio eos corrupti quo accusantium repudiandae
        tempore nulla dolorem praesentium ea in autem?
      </Text>
      <View style={styles.main_container_btn}>
        <Btn
          onPress={(e) => router.navigate("/register")}
          text="Conheça o App"
          Icon={
            <Ionicons
              name="arrow-forward-outline"
              size={24}
              color={Colors.btnText}
            />
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main_container: {},

  h1: {
    marginVertical: 30,
    textAlign: "center",
    fontSize: 24,
    fontWeight: 400,
  },

  text: {
    fontSize: 16,
    fontWeight: 200,
    textAlign: "left",
    marginBottom: 10,
    marginHorizontal: 30,
  },

  main_container_btn: {
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: "auto",
  },
});
