import { ActivityIndicator, View } from "react-native";
import React from "react";
import { theme } from "@/src/constants/theme";
import { LoadingProps } from "./Loading.d";

const Loading: React.FC<LoadingProps> = ({
  size = "large",
  color = theme.colors.primary,
}) => {
  return (
    <View style={{ justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
