import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function WebViewScreen({ route, navigation }) {
  const { data } = route.params;
  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ marginTop: 2, marginLeft: 0 }}>Back</Text>
      </TouchableOpacity>
      <Text>{data.title}</Text>
      <Subtitle>By {data.by}</Subtitle>
      <WebView
        source={{ uri: data.url }}
        style={{ marginTop: 20, backgroundColor: "lightgray" }}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Text = styled.Text`
  font-size: 17px;
  margin: 12px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  margin: 12px;
  font-weight: 600;
`;

const BackgroundImage = styled.Image`
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3
`;
