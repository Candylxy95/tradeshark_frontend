import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingScreen from "./src/screens/LoadingScreen";
import AuthNavigator from "./src/navigation/AuthNavigator";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingScreenTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingScreenTimer);
  }, []);

  return (
    <>
      {/* {!isLoading ?  <AuthNavigator /> : <LoadingScreen />} */}
      <AuthNavigator />
      <StatusBar style="auto" />
    </>
  );
}

export default App;
