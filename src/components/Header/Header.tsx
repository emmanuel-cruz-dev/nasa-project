import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View>
      <View>
        <Image source={require("../../assets/nasa-logo.png")} />
      </View>
      <View>
        <Text>Explore</Text>
      </View>
    </View>
  );
};

export default Header;
