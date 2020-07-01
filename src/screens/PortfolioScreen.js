import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Header navigation={navigation} />
        <Text style={styles.header}>Portfolio</Text>
        <Text>Modern, functional, with outstanding attention to detail.</Text>
        <Footer />
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
