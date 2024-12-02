import * as Font from "expo-font";

export const fetchFonts = async () => {
  await Font.loadAsync({ Bentham: require("../assets/fonts/Bentham.ttf") });
};
