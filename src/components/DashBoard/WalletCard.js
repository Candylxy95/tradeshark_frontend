import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomBtn from "../CustomBtn";
import { useFonts } from "expo-font";
import { Anton_400Regular } from "@expo-google-fonts/anton";
import AppLoading from "expo-app-loading";

const WalletCard = (props) => {
  const [fontsLoaded] = useFonts({
    Anton: Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Balance</Text>
      <Text style={styles.subText}>S$ {props.balance}</Text>
      <CustomBtn
        style={styles.btn}
        textStyle={styles.btnText}
        title="Deposit"
      />
    </View>
  );
};

{
  /* <TouchableOpacity style={props.style} onPress={props.onPress}>
<Text style={props.textStyle}>{props.title}</Text>
</TouchableOpacity> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DAD3",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  text: {
    color: "black",
    fontFamily: "Arial",
    fontSize: 14,
    paddingTop: 40,
    paddingBottom: 10,
  },
  subText: {
    color: "black",
    fontFamily: "Anton",
    fontSize: 50,
    paddingBottom: 20,
  },
  btn: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    height: 45,
  },
  btnText: {
    color: "#F1F2EB",
  },
});

export default WalletCard;
