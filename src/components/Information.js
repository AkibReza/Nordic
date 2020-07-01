import React from "react";
import { View } from "react-native";
import { ColorText } from "../components/ColorText";

const Information = () => {
  return (
    <>
      <View
        style={{ height: 0.5, width: null, backgroundColor: "#000" }}
      ></View>
      <View style={{ paddingVertical: 20, backgroundColor: "#E4E4E4" }}>
        <View style={{ padding: 10 }}>
          <ColorText color={"#000"} size={16}>
            For more information on any of our services, including a free quote,
            please call us on +44 (0) 20 8144 0915 or email
            hello@nordiccreative.co.uk
          </ColorText>
        </View>
      </View>
    </>
  );
};

export default Information;
