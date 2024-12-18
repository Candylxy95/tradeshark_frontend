import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Anton_400Regular } from "@expo-google-fonts/anton";
import CustomBtn from "../../components/CustomBtn";
import AppLoading from "expo-app-loading";
import { useNavigation, Link } from "@react-navigation/native";

const FirstTimerScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/sharkbanner.png")}
          resizeMode="cover"
        />
      </View> */}
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
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <CustomBtn
          style={styles.btn}
          textStyle={styles.textStyle}
          title="Signup"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate("BizFirstTimerScreen")}
        >
          <Text style={styles.linkText}>Sign up for a business account</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    flex: 1,
    backgroundColor: "#F1F2EB",
    justifyContent: "space-between",
  },
  // imageContainer: {
  //   flex: 2,
  // },
  // image: {
  //   width: "100%",
  //   height: "100%",
  // },
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
  linkContainer: {
    marginHorizontal: 15,
    alignItems: "flex-end",
  },
  linkText: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    color: "#415D43",
  },
});

export default FirstTimerScreen;
