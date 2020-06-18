import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const counters = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: `rgb(${counter},${counter},${counter})`,
      }}
    >
      <TouchableOpacity onPress={() => setCounter(counter + 10)}>
        <Text style={{ color: "red" }}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter(counter - 10)}>
        <Text style={{ color: "red" }}>Decrement</Text>
      </TouchableOpacity>

      <Text style={{ color: "red" }}>{counter}</Text>

      <TouchableOpacity onPress={() => setCounter(0)}>
        <Text style={{ color: "red" }}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default counters;
