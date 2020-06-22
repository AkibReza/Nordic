import React from "react";
import { StyleSheet, Image } from "react-native";
import { Header, Left, Icon, Right, Button, Body } from "native-base";

const Headers = ({ navigation }) => {
  return (
    <Header style={styles.header}>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Image source={require("../vendor/nordic.png")} style={styles.icon} />
      </Body>
      <Right />
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#333",
  },
  icon: {
    flex: 1,
    width: 200,
    resizeMode: "contain",
  },
});

export default Headers;
