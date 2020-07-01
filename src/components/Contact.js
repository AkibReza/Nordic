import React from "react";
import { View } from "react-native";
import { Card, CardItem, Left, Icon, Text, Right } from "native-base";
const Contact = () => {
  return (
    <View style={{ padding: 10 }}>
      <Card>
        <CardItem>
          <Left>
            <Icon active name="logo-skype" style={{ color: "#3B579D" }} />
          </Left>
          <Text>nordiccreative</Text>
          <Right></Right>
        </CardItem>
        <CardItem>
          <Left>
            <Icon active name="mail" style={{ color: "#3B579D" }} />
          </Left>
          <Text>hello@nordiccreative.co.uk</Text>
          <Right></Right>
        </CardItem>
        <CardItem>
          <Left>
            <Icon active name="call" style={{ color: "#3B579D" }} />
          </Left>
          <Text>+44 (0) 208 144 0915</Text>
          <Right></Right>
        </CardItem>
      </Card>
    </View>
  );
};

export default Contact;
