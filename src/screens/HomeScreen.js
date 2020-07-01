import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import Contact from "../components/Contact";
import {
  Container,
  StyleProvider,
  Content,
  H1,
  Button,
  Text,
} from "native-base";

import { ColorText } from "../components/ColorText";
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
              <Text color={"red"} size={20}>
                Modern, functional, with outstanding attention to detail.
              </Text>
              <Button
                style={button}
                onPress={() => navigation.navigate("Portfolio")}
                info
                block
              >
                <Text style={buttonText}>View Our Portfolio</Text>
              </Button>
            </View>

            <View style={{ ...content, ...dark }}>
              <ColorText size={36}>A focus on quality</ColorText>
              <ColorText style={{ color: "white" }}>
                From initial concept, through to UX and online strategy, we work
                alongside our clients to deliver meticulous, industry-leading
                expertise at every stage. Projects are delivered on time, with
                minimal fuss. We have provided online services for a diverse
                range of clients, from local businesses to the 5th largest
                retailer in the world. We love what we do and we enjoy watching
                our clients succeed. To discuss your requirements or arrange a
                meeting, please call us on +44 (0)20 8144 0914 or email
                hello@nordiccreative.co.uk
              </ColorText>

              <Button
                style={button}
                onPress={() => navigation.navigate("Services")}
                info
                block
              >
                <Text style={buttonText}>View Our Portfolio</Text>
              </Button>
            </View>
            <Featured background={"blue"} />
            <View style={{ ...content, ...dark }}>
              <ColorText size={36}>What our clients say</ColorText>
              <ColorText>
                "We are global business with a complex service offering that
                needs to be delivered internationally, with local knowledge. Our
                website needed updating and we set a very challenging brief
                requiring video content, animated graphics, and IP address
                detection to allow clients on each continent to reach a
                dedicated homepage. The team took the time and trouble to
                understand the brief fully and Michael’s input into the final
                website has left us with what I consider to be a world class
                product. "{"\n"}
              </ColorText>
              <ColorText color={"#1faacb"}>
                Mark Wheeler, Driver Group
              </ColorText>
              <ColorText>
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
              </ColorText>
              <ColorText color={"#1faacb"}>Nina Webb, Tesco Stores</ColorText>
            </View>

            <ImageBackground
              source={require("../vendor/nordicTouch.jpg")}
              style={styles.background}
            >
              <View style={content}>
                <ColorText color={"#000"} size={42}>
                  Get In Touch
                </ColorText>
                <ColorText>
                  We’d be happy to discuss your project over the phone, via
                  email or over a coffee in person. We will always do our best
                  respond to email enquiries the same day.
                </ColorText>
              </View>
              <Contact />
            </ImageBackground>
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
  dark: {
    backgroundColor: "#2d2d2d",
  },
  content: {
    padding: 20,
  },

  background: {
    height: undefined,
    width: undefined,
  },
});

export default HomeScreen;
