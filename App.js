import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Headers from "./components/Header/header";
import { Stories } from "./components/Stories/Stories";
import MyTabs from "./navigation/MyTab";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import MyStack from "./navigation/StackNav";

export default function App() {
  const scheme = useColorScheme();
  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: "#9933FF",
      background: "#000023",
      card: "#000028",
      text: "#fffff",
      border: "#000028",
      notification: "#9933ff",
    },
  };
  return (
    <>
      <View style={{ marginTop: 42, marginBottom: 12 }}>
        <Headers />
      </View>
      <Container>
        <MyStack />
      </Container>
    </>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
`;
