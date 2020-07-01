import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/Header";
import HeroBg from "../components/HeroBg";
import bgName from "../vendor/valuesBG.jpg";
import Footer from "../components/Footer";
import Information from "../components/Information";
import { BlueText, DescriptionText, ColorText } from "../components/ColorText";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <Header navigation={navigation} />
        <HeroBg bgName={bgName} title={"Our Values"} />
        <View style={{ padding: 20 }}>
          <BlueText>Quality First</BlueText>
          <DescriptionText>
            We believe in putting quality first. The internet is a highly
            competitive space and outstanding website quality allows our clients
            to stand out from the crowd. We encourage Dieter Rams’ ‘less but
            better’ mindset within our team. This aims to seek out effectiveness
            by focusing on the key areas that are of the highest value to our
            clients.
          </DescriptionText>
          <BlueText>Client Success</BlueText>
          <DescriptionText>
            We try to see each project from the client’s perspective. By
            understanding their clients, and their goals, we are able to solve
            their highest level problems. This allows us to generate the
            greatest impact possible. Once we can see what our client’s success
            looks like, we can target our experience towards providing the
            highest value to each project.
          </DescriptionText>
          <BlueText>Ethics & Honesty</BlueText>
          <DescriptionText>
            We value Ethics & Honesty over profit, loss, ego or any individual
            task. We believe in taking responsibility, owning outcomes and
            always doing what is right – not what is easiest, most popular or
            most profitable.
          </DescriptionText>
          <BlueText>Improvement & Innovation</BlueText>
          <DescriptionText>
            We move forward, understanding that systems and methods can always
            be improved. Our team is encouraged to continuously challenge
            existing methods – to innovate and experiment in order to find the
            best outcomes. We don’t view failure through innovation negatively:
            it helps us to improve.
          </DescriptionText>
          <BlueText>Happiness & Wellbeing</BlueText>
          <ColorText color={"#000"}>
            We believe that the best work can only be done in a positive
            environment, based on motivation and enjoyment. Long hours and
            stress don’t produce good results. A happy team is the best team,
            which is why Happiness & Wellbeing are part of our core values.
          </ColorText>
        </View>
        <Information />
        <Footer />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
