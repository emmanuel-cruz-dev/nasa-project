import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require("../../assets/nasa-logo.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    // flex: 1,
    alignItems: "flex-start",
  },
  rightContainer: {
    // flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Header;
