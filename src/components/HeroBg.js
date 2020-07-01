import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { ColorText } from "../components/ColorText";

const HeroBG = ({ bgName, title }) => {
  return (
    <ImageBackground source={`${bgName}`} style={styles.background}>
      <View style={styles.overlay} />
      <Text style={styles.text}>{title}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 150,
    width: undefined,
  },
  text: {
    fontSize: 50,
    color: "#fff",
    alignSelf: "center",
    paddingTop: 36,
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.5,
  },
});

export default HeroBG;
