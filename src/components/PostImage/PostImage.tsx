import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PostImage as PostImageTypes, RouteStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type PostImageNavigationProps = NativeStackNavigationProp<
  RouteStackParams,
  "Detail"
>;

const PostImage: FC<PostImageTypes> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  date: {
    color: "#fff",
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "rgb(33,150,243)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default PostImage;
