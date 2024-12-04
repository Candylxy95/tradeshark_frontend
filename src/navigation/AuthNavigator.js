import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "../screens/LoadingScreen";
import FirstTimerScreen from "../screens/Auth/FirstTimerScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import BizFirstTimerScreen from "../screens/Auth/BizFirstTimerScreen";
import BizRegisterScreen from "../screens/Auth/BizRegisterScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  // const HeaderBackground = () => (
  //   <ImageBackground
  //     source={require("../../assets/sharkbanner.png")}
  //     style={[StyleSheet.absoluteFillObject, { height: 300 }]}
  //   />
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstTimerScreen"
          component={FirstTimerScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="BizFirstTimerScreen"
          component={BizFirstTimerScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="BizRegisterScreen"
          component={BizRegisterScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
