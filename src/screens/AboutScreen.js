import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import HeroBg from "../components/HeroBg";
import bgName from "../vendor/aboutBG.jpg";
import Footer from "../components/Footer";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Header navigation={navigation} />
        <HeroBg bgName={bgName} title={"About Us"} />
        <Text style={styles.header}>Services</Text>
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
