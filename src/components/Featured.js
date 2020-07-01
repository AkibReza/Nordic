import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Card, CardItem, Button, Text } from "native-base";
import { ColorText } from "../components/ColorText";
import { TouchableOpacity } from "react-native-gesture-handler";

const Featured = ({ background }) => {
  const { item, image } = styles;
  return (
    <>
      <View>
        <ColorText size={30} color={"#000"}>
          Featured Projects
        </ColorText>
      </View>
      <Card>
        <CardItem style={image}>
          <Image source={require("../vendor/1.jpg")} style={image} />
        </CardItem>
        <CardItem style={item}>
          <Image source={require("../vendor/2.jpg")} style={image} />
        </CardItem>
        <CardItem>
          <Image source={require("../vendor/3.jpg")} style={image} />
        </CardItem>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    borderBottomWidth: 1,
  },
  overlay: {
    backgroundColor: "#f2f2f2",
    height: null,
    width: null,
    opacity: 1,
  },
});

export default Featured;
