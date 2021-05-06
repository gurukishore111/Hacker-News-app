import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import styled from "styled-components";

import { Stories } from "../components/Stories/Stories";

import { getJobStories } from "../services/api";

export default function JobScreen() {
  const [jobstoryIds, setJobStoryIds] = useState([]);

  useEffect(() => {
    getJobStories().then((ids) => setJobStoryIds(ids));
  }, []);

  return (
    <>
      {jobstoryIds.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator />
        </View>
      ) : (
        <Container>
          <ScrollView>
            <Text>Lastest Job Alerts</Text>
            <Stories storyId={jobstoryIds} job={true} />
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
