import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screen/HomeScreen";
const Tab = createMaterialTopTabNavigator();
import { NavigationContainer } from "@react-navigation/native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import HotStoriesScreen from "../screen/HotStoriesScreen";
import JobScreen from "../screen/JobScreen";

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          showIcon: true,
          activeTintColor: "#669cda",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Feather name="home" size={24} color="#669cda" />
              ) : (
                <Feather name="home" size={24} color="grey" />
              ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Hot",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="fire" size={24} color="#669cda" />
              ) : (
                <FontAwesome name="fire" size={24} color="gray" />
              ),
          }}
          name="Best"
          component={HotStoriesScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Jobs",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Feather name="briefcase" size={24} color="#669cda" />
              ) : (
                <Feather name="briefcase" size={24} color="grey" />
              ),
          }}
          name="Jobs"
          component={JobScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
