import React from "react";
import {
  View,
  Text,
  Share,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
import styled from "styled-components";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";

export const Card = ({ story, job }) => {
  console.log(job);
  const CardStyle = {
    ViewBox: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.22,
      shadowRadius: 16.0,
      elevation: 24,
    },
    imageStyle: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },
    CardContainer: {
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    innerContainer: {
      flexDirection: "row",
    },
    text: {
      marginLeft: 5,
      marginTop: 3,
    },
  };
  const onShare = async (message, link) => {
    if (!link) {
      return alert("Improper information");
    }
    try {
      await Share.share({
        message: `Hacker News | ${message} click here to read more ${link}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(Object.keys(story).length);
  return (
    <>
      {story.title && (
        <>
          {Object.keys(story).length === 0 ? (
            <></>
          ) : (
            <ViewBox style={CardStyle.ViewBox}>
              {job ? (
                <></>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    story.url
                      ? Linking.openURL(story.url)
                      : alert("Improper information")
                  }
                >
                  <Image
                    source={{ uri: "https://source.unsplash.com/random" }}
                    resizeMode="cover"
                    style={CardStyle.imageStyle}
                  />
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={() => Linking.openURL(story.url)}>
                <TextBase>{story.title}</TextBase>
              </TouchableOpacity>
              <View style={CardStyle.CardContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(story.url)}>
                  <View style={CardStyle.innerContainer}>
                    <AntDesign name="hearto" size={24} color="#fa66bd" />
                    <Text style={CardStyle.text}>{story.score}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(story.url)}>
                  <View style={CardStyle.innerContainer}>
                    <MaterialIcons name="comment" size={24} color="black" />
                    {story.kids && story.kids.length > 0 ? (
                      <Text style={CardStyle.text}>{story.kids.length}</Text>
                    ) : (
                      <Text style={CardStyle.text}>0</Text>
                    )}
                  </View>
                </TouchableOpacity>

                <View style={CardStyle.innerContainer}>
                  <Text style={CardStyle.text}>
                    published {moment(story.time * 1000).fromNow()}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => onShare(story.title, story.url)}
                >
                  <View>
                    <AntDesign name="sharealt" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
            </ViewBox>
          )}
        </>
      )}
    </>
  );
};

const ViewBox = styled.View`
  background: #ffff;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
`;

const TextBase = styled.Text`
  font-size: 17px;
  font-weight: 600;
`;
