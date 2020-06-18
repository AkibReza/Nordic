import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Header navigation={navigation} />
        <Text style={styles.header}>Services</Text>
        <Text>Modern, functional, with outstanding attention to detail.</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
  },
});

export default HomeScreen;
