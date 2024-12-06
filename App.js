import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import LoadingScreen from "./src/screens/LoadingScreen";
import AuthNavigator from "./src/navigation/AuthNavigator";
import UserContext from "./src/components/context/UserContext";
import UserNavigator from "./src/navigation/UserNavigator";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState("");

  const storeAccessToken = () => {
    const token = SecureStore.getItemAsync("accessToken") || "";
    setAccessToken(token);
  };

  useEffect(() => {
    storeAccessToken();
    const loadingScreenTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingScreenTimer);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ accessToken, setAccessToken }}>
        {!isLoading ? <AuthNavigator /> : <LoadingScreen />}
        {/* <AuthNavigator /> */}
        <StatusBar style="auto" />
      </UserContext.Provider>
    </>
  );
}

export default App;
