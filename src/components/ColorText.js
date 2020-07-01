import React from "react";
import { Text } from "react-native";

const ColorText = ({ children, color = "#fff", size = 18 }) => {
  return <Text style={{ color: `${color}`, fontSize: size }}>{children}</Text>;
};

const BlueText = ({ children, color = "#cb1aaf", size = 30 }) => {
  return <Text style={{ color: `${color}`, fontSize: size }}>{children}</Text>;
};

const DescriptionText = ({ children, color = "#000", size = 18 }) => {
  return (
    <Text style={{ color: `${color}`, fontSize: size, paddingBottom: 20 }}>
      {children}
    </Text>
  );
};

export { ColorText, BlueText, DescriptionText };
