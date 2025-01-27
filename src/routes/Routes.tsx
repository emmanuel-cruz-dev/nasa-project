import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import { RouteStackParams } from "../types";
import Home from "../views/Home";
import Detail from "../views/Detail";

const Stack = createNativeStackNavigator<RouteStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "rgba(7,26,93,255)",
  },
  headerTitleStyle: {
    color: "#fff",
  },
};

const Routes = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="rgba(7,26,93,255)" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={routeScreenDefaultOptions}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={routeScreenDefaultOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
