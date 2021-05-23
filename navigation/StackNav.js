import { createStackNavigator } from "@react-navigation/stack";
import HotScreen from "../screen/HotStoriesScreen";
import MyTabs from "./MyTab";
const Stack = createStackNavigator();
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WebViewScreen from "../screen/WebView";

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="webview" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
