import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { useFonts } from "expo-font";
import { Anton_400Regular } from "@expo-google-fonts/anton";
import CustomBtn from "../../components/CustomBtn";
import AppLoading from "expo-app-loading";

const FirstTimerScreen = () => {
  const [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/sharkbanner.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to</Text>
        <Text
          style={{
            fontFamily: "Anton",
            fontSize: "50",
            textAlign: "center",
          }}
        >
          TRADESHARK
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomBtn
          style={styles.btn}
          textStyle={styles.textStyle}
          title="Login"
        />
        <CustomBtn
          style={styles.btn}
          textStyle={styles.textStyle}
          title="Signup"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F2EB",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 3,
    height: "auto",
    width: "auto",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Arial",
    color: "black",
    fontSize: 30,
    textAlign: "center",
  },
  btnContainer: {
    flex: 4,
    height: "auto",
    width: "auto",
    paddingHorizontal: 80,
  },
  btn: {
    backgroundColor: "#D8DAD3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    height: 45,
  },
  textStyle: {
    color: "black",
    fontSize: 16,
  },
});

export default FirstTimerScreen;
