import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
  const {
    params: { title, date, url, explanation },
  } = useRoute<NativeStackScreenProps<RouteStackParams, "Detail">["route"]>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
  content: {
    flex: 1,
    backgroundColor: "#2c449d",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: "40%",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 32,
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    color: "#fff",
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Detail;
