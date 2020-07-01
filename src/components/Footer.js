import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Footer, Text } from "native-base";

const Footers = () => {
  return (
    <Footer style={styles.footer}>
      <Image source={require("../vendor/nordicLogo.png")} style={styles.icon} />
      <View style={{ flex: 3, alignItems: "center" }}>
        <Text style={styles.footerText}>
          Registered Address: Kemp House, 152 City Road, London EC1V 2NX
        </Text>
        <Text style={{ ...styles.footerText, color: "white" }}>
          Company No. 07580121 | +44 (0) 208 144 0915 |
          hello@nordiccreative.co.uk
        </Text>
      </View>
    </Footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#1f1f1f",
    height: 120,
  },
  icon: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
  },
  footerText: {
    flex: 1,
    alignSelf: "center",
    color: "#1FAACB",
    fontSize: 12,
    paddingVertical: 10,
  },
});

export default Footers;
