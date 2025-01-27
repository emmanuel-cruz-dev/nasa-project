import { View, Text, Image, StyleSheet, Button } from "react-native";
import { FC } from "react";

import { PostImage } from "../../types";

const TodaysImage: FC<PostImage> = ({ date, title, url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Button title="View" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
  },
});

export default TodaysImage;
