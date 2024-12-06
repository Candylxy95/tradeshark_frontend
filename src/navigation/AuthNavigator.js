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
import UserNavigator from "./UserNavigator";
import ListingExtendedCard from "../components/ListingExtendedCard";
import ListingScreen from "../screens/User/ListingScreen";
import BizLoginScreen from "../screens/Auth/BizLoginScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
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
        <Stack.Screen
          name="BizLoginScreen"
          component={BizLoginScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="UserNavigator"
          component={UserNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListingScreen"
          component={ListingScreen}
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
