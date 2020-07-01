import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Contact from "../components/Contact";
import HeroBg from "../components/HeroBg";
import bgName from "../vendor/contactBG.jpg";
import Footer from "../components/Footer";

const ContactScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Header navigation={navigation} />
        <HeroBg bgName={bgName} title={"Contact"} />
        <Text style={styles.header}>Services</Text>
        <Text>Modern, functional, with outstanding attention to detail.</Text>

        <Contact />

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

export default ContactScreen;
