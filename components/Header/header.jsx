import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styled from "styled-components";

export default function Headers() {
  const [greeting, setGreet] = useState("");
  const setGreeting = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();

    if (hrs < 12) {
      setGreet("Good Morning");
    } else if (hrs >= 12 && hrs <= 17) {
      setGreet("Good Afternoon");
    } else if (hrs >= 17 && hrs <= 24) {
      setGreet("Good Evening");
    }
  };
  useEffect(() => {
    setGreeting();
  });
  return (
    <View>
      <Header>
        <Text>
          Hello <Username>{greeting},</Username>
          {`\n`}
          <Text>Best News for today</Text>
        </Text>

        <Avator source={require("../../assets/images.png")} />
      </Header>
      <StatusBar style="auto" />
    </View>
  );
}

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 17px 15px 0px 15px;
`;

const Avator = styled.Image`
  width: 60px;
  height: 60px;
`;

const Text = styled.Text`
  font-size: 19px;
  font-weight: bold;
`;

const Username = styled.Text`
  color: #669cda;
`;
