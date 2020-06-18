import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  createAppContainer,
} from "@react-navigation/native";

import HomeScreen from "./src/screens/HomeScreen";
import ValuesScreen from "./src/screens/ValuesScreen";
import ServicesScreen from "./src/screens/ServicesScreen";
import PortfolioScreen from "./src/screens/PortfolioScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ContactScreen from "./src/screens/ContactScreen";

const { Navigator, Screen } = createDrawerNavigator();

const App = function () {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Our Values" component={ValuesScreen} />
        <Screen name="Services" component={ServicesScreen} />
        <Screen name="Portfolio" component={PortfolioScreen} />
        <Screen name="About" component={AboutScreen} />
        <Screen name="Contact" component={ContactScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
