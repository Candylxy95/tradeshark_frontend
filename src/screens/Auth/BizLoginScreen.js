import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import CustomBtn from "../../components/CustomBtn";
import { SERVER } from "@env";

const BizLoginScreen = () => {
  const [loginForm, setLoginForm] = useState({
    phone_number: "",
    password: "",
    role: "ts_seller",
  });

  const login = (inputs) => {
    console.log("Login function called with inputs:", inputs);
    return fetch(`${SERVER}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to login");
        }
        return response.json();
      })
      .then(
        setLoginForm({
          email: "",
          phone_number: "",
          password: "",
        }),

        console.log(`successfully logged in`)
      )

      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (text, value) => {
    setLoginForm((prevInput) => ({ ...prevInput, [text]: value }));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/sharkbanner.png")}
          resizeMode="cover"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.inputForm}>
          <View>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              placeholder="Phone"
              style={styles.input}
              value={loginForm.phone_number}
              onChangeText={(text) => {
                handleChange("phone_number", text);
              }}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              text="password"
              placeholder="Password"
              style={styles.input}
              value={loginForm.password}
              secureTextEntry={true}
              onChangeText={(text) => {
                handleChange("password", text);
              }}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <CustomBtn
            style={styles.btn}
            textStyle={styles.textStyle}
            title="Login"
            onPress={() => {
              console.log("Button pressed");
              console.log("SERVER:", SERVER);
              login(loginForm);
            }}
          />
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </KeyboardAvoidingView>
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
  scrollContainer: {
    flexGrow: 1,
  },
  textContainer: {
    flex: 1,
    height: "auto",
    width: "auto",
    justifyContent: "flex-start",
    paddingLeft: 40,
    paddingTop: 40,
  },
  text: {
    fontFamily: "Arial",
    color: "black",
    fontSize: 38,
    textAlign: "left",
  },
  inputForm: {
    flex: 3,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    justifyContent: "flex-start",
  },
  nameInput: {
    flexDirection: "row",
    width: "50%",
    gap: "20%",
  },
  input: {
    height: 30,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom: 15,
  },
  btnContainer: {
    flex: 4,
    height: "auto",
    width: "auto",
    paddingHorizontal: 80,
    paddingTop: 80,
    justifyContent: "flex-start",
  },
  btn: {
    backgroundColor: "#D8DAD3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    height: 45,
  },
  textStyle: {
    color: "black",
    fontSize: 16,
  },
});

export default BizLoginScreen;
