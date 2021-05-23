import React, { useState, useEffect } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import styled from "styled-components";
import { Stories } from "../components/Stories/Stories";
import { gethotStories } from "../services/api";

export default function HotScreen({ navigation }) {
  const [hotstoryIds, sethotStoryIds] = useState([]);

  useEffect(() => {
    gethotStories().then((ids) => sethotStoryIds(ids));
  }, []);
  return (
    <>
      {hotstoryIds.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator />
        </View>
      ) : (
        <Container>
          <ScrollView>
            <Text>Hot News</Text>
            <Stories
              storyId={hotstoryIds}
              job={false}
              navigation={navigation}
            />
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
