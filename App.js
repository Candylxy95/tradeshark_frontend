import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingScreen from "./src/screens/LoadingScreen";
import FirstTimerScreen from "./src/screens/Auth/FirstTimerScreen";
import LoginScreen from "./src/screens/Auth/LoginScreen";

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
      {/* {!isLoading ? <FirstTimerScreen /> : <LoadingScreen />} */}
      <LoginScreen />
      <StatusBar style="auto" />
    </>
  );
}

export default App;
