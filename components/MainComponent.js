import React, { Component } from "react";
import { Icon } from "react-native-elements";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Maintenance from "./MaintenanceComponent";
import PayRent from "./PayRentScreen";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";
import Contact from "./ContactComponent";
import News from "./NewsComponent";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Log In";

  switch (routeName) {
    case "Log In":
      return "Cityview Renters Portal";
    case "Pay Rent":
      return "Pay Rent";
    case "Maintenance":
      return "Maintenance Request";
    case "News":
      return "News";
    case "Contact Us":
      return "Contact Us";
  }
}

function MainTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: "#585858" },
        activeTintColor: "#e96c6c",
        inactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Log In"
        component={Login}
        options={{
          tabBarIcon: () => <Icon name="login" type="entype" color="white" />,
        }}
      />
      <Tab.Screen
        name="Pay Rent"
        component={PayRent}
        options={{
          tabBarIcon: () => (
            <Icon name="dollar" type="font-awesome" color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Maintenance"
        component={Maintenance}
        options={{
          tabBarIcon: () => (
            <Icon
              name="hammer-screwdriver"
              type="material-community"
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: () => (
            <Icon name="newspaper-o" type="font-awesome" color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={Contact}
        options={{
          tabBarIcon: () => (
            <Icon name="person-outline" type="ionicon" color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Cityview Renters Portal"
            component={MainTabs}
            options={({ route, navigation }) => ({
              headerTitle: getHeaderTitle(route),
              headerRight: () => (
                <Icon
                  name="user-plus"
                  type="font-awesome"
                  color="white"
                  iconStyle={{ marginRight: 10 }}
                  onPress={() => navigation.navigate("Register")}
                />
              ),
              headerStyle: {
                backgroundColor: "#585858",
              },
              headerTintColor: "#fff",
            })}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            headerTitle="Register"
            options={{
              headerStyle: {
                backgroundColor: "#585858",
              },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
