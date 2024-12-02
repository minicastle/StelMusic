import React, { useEffect, useState } from "react";
import { CommonContainer, CommonText } from "../components/Common";
import LottieView from "lottie-react-native";
import { SplashScreen } from "expo-router";
import { fetchFonts } from "../functions/fetchFonts";

export default function index() {
  const [fontLoad, setFontLoad] = useState<boolean>(false);
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const loadFonts = async () => {
      await fetchFonts();
      setFontLoad(true);
      SplashScreen.hideAsync();
    };
    loadFonts();
  }, []);
  if (!fontLoad) {
    return null;
  }
  return (
    <CommonContainer>
      <CommonText size={50}>StelMusic</CommonText>
      <LottieView
        autoPlay
        style={{ width: 500, height: 500 }}
        source={require("../assets/MusicLoading.json")}
      />
    </CommonContainer>
  );
}
