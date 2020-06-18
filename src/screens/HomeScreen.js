import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        <Text h1>We design & develop beautiful websites.</Text>
        <Text style={styles.h4}>
          Modern, functional, with outstanding attention to detail.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Portfolio")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            View Our Portfolio
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1faacb",
    width: 150,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  h4: {
    fontSize: 22,
  },
});

export default HomeScreen;
