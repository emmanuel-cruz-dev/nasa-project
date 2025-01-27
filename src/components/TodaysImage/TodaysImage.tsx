import React, { FC } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PostImage, RouteStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<
  RouteStackParams,
  "Detail"
>;

const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.button} onPress={handleViewPress}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "rgb(33,150,243)",
    borderRadius: 32,
    paddingVertical: 10,
    paddingHorizontal: 26,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default TodaysImage;
