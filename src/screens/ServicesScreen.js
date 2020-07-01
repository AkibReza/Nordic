import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "../components/Header";
import HeroBg from "../components/HeroBg";
import bgName from "../vendor/servicesBG.jpg";
import Footer from "../components/Footer";
import Information from "../components/Information";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Header navigation={navigation} />
        <HeroBg bgName={bgName} title={"Services"} />
        <Text style={styles.header}>Services</Text>
        <Text>Modern, functional, with outstanding attention to detail.</Text>
        <Button
          title="Hello world"
          onPress={() => {
            navigation.navigate("Design");
          }}
        />
        <Information />
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
