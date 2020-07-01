import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ValuesScreen from "./src/screens/ValuesScreen";

import ServicesScreen from "./src/screens/ServicesScreen";
import DesignScreen from "./src/screens/ServicesPages/Design";
import DevelopmentScreen from "./src/screens/ServicesPages/Development";
import StrategyScreen from "./src/screens/ServicesPages/Strategy";
import EcommerceScreen from "./src/screens/ServicesPages/Ecommerce";
import CopywritingScreen from "./src/screens/ServicesPages/Copywriting";
import SecurityScreen from "./src/screens/ServicesPages/Security";
import HostingScreen from "./src/screens/ServicesPages/Hosting";
import SEOScreen from "./src/screens/ServicesPages/Seo";

import PortfolioScreen from "./src/screens/PortfolioScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ContactScreen from "./src/screens/ContactScreen";

const { Navigator, Screen } = createDrawerNavigator();

const {
  Navigator: NavigatorStack,
  Screen: ScreenStack,
} = createStackNavigator();

const Services = function () {
  <NavigatorStack>
    <ScreenStack name="Services" component={ServicesScreen} />
    <ScreenStack name="Design" component={DesignScreen} />
    <ScreenStack name="Development" component={DevelopmentScreen} />
    <ScreenStack name="Strategy" component={StrategyScreen} />
    <ScreenStack name="eCommerce" component={EcommerceScreen} />
    <ScreenStack name="Copywriting" component={CopywritingScreen} />
    <ScreenStack name="Security" component={SecurityScreen} />
    <ScreenStack name="Hosting" component={HostingScreen} />
    <ScreenStack name="SEO" component={SEOScreen} />
  </NavigatorStack>;
};

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
