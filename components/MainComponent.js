import React, { Component } from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeComponent";
import LogIn from "./LogInComponent";

const Stack = createStackNavigator();

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Cityview Lofts",
              headerStyle: {
                backgroundColor: "#ffb6c1",
              },
              headerTintColor: "#d7695c",
            }}
          />
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{
              title: "Cityview Lofts",
              headerStyle: {
                backgroundColor: "#ffb6c1",
              },
              headerTintColor: "#d7695c",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
