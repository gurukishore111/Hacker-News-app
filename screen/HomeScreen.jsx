import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import { Stories } from "../components/Stories/Stories";
import { getStories } from "../services/api";

export default function HomeScreen({ navigation }) {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories().then((ids) => setStoryIds(ids));
  }, []);
  return (
    <>
      {storyIds.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator />
        </View>
      ) : (
        <Container>
          <ScrollView>
            <Text>Discover Lastest News</Text>
            <Stories storyId={storyIds} job={false} navigation={navigation} />
          </ScrollView>
        </Container>
      )}
    </>
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
