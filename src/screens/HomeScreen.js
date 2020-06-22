import React from "react";
import { StyleSheet, View } from "react-native";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import {
  Container,
  StyleProvider,
  Content,
  H1,
  H2,
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Button,
  Text,
} from "native-base";

import theme from "../../node_modules/native-base/src/theme/variables/commonColor";
import getTheme from "../../node_modules/native-base/src/theme/components";

const HomeScreen = ({ navigation }) => {
  const { button, buttonText, content, dark } = styles;
  return (
    <>
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <Headers navigation={navigation} />

          <Content>
            <View style={content}>
              <H1>We design and develop beautiful websites</H1>
              <Text>
                Modern, functional, with outstanding attention to detail.
              </Text>
              <Button style={button} info block>
                <Text style={buttonText}>View Our Portfolio</Text>
              </Button>
            </View>

            <View style={{ ...content, ...dark }}>
              <H2 style={{ color: "white" }}>A focus on quality</H2>
              <Text style={{ color: "white" }}>
                From initial concept, through to UX and online strategy, we work
                alongside our clients to deliver meticulous, industry-leading
                expertise at every stage. Projects are delivered on time, with
                minimal fuss. We have provided online services for a diverse
                range of clients, from local businesses to the 5th largest
                retailer in the world. We love what we do and we enjoy watching
                our clients succeed. To discuss your requirements or arrange a
                meeting, please call us on +44 (0)20 8144 0914 or email
                hello@nordiccreative.co.uk
              </Text>

              <Button style={button} info block>
                <Text style={buttonText}>View Our Portfolio</Text>
              </Button>
            </View>

            <View style={{ ...content, ...dark }}>
              <H2 style={{ color: "white" }}>What our clients say</H2>
              <Text style={{ color: "white" }}>
                "We are global business with a complex service offering that
                needs to be delivered internationally, with local knowledge. Our
                website needed updating and we set a very challenging brief
                requiring video content, animated graphics, and IP address
                detection to allow clients on each continent to reach a
                dedicated homepage. The team took the time and trouble to
                understand the brief fully and Michael’s input into the final
                website has left us with what I consider to be a world class
                product. "{"\n"}
              </Text>
              <Text style={{ color: "#1faacb" }}>
                Mark Wheeler, Driver Group
              </Text>
              <Text style={{ color: "white" }}>
                {"\n"}
                "We are global business with a complex service offering that
                needs to be delivered internationally, with local knowledge. Our
                website needed updating and we set a very challenging brief
                requiring video content, animated graphics, and IP address
                detection to allow clients on each continent to reach a
                dedicated homepage. The team took the time and trouble to
                understand the brief fully and Michael’s input into the final
                website has left us with what I consider to be a world class
                product. " {"\n"}
              </Text>
              <Text style={{ color: "#1faacb" }}>Nina Webb, Tesco Stores</Text>
            </View>

            <View style={styles.contact}>
              <H1>Get In Touch</H1>
              <Text>
                We’d be happy to discuss your project over the phone, via email
                or over a coffee in person. We will always do our best respond
                to email enquiries the same day.
              </Text>
            </View>
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
            <Footer />
          </Content>
        </Container>
      </StyleProvider>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  dark: {
    backgroundColor: "#333",
  },
  contact: {
    padding: 20,
  },
});

export default HomeScreen;
