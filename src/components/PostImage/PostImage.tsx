import { FC } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { PostImage as PostImageTypes } from "../../types";

const PostImage: FC<PostImageTypes> = ({ title, date }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <View>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostImage;
