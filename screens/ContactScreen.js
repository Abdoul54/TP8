import { Button, Image, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const ContactScreen = () => {
  const title = "Contact Component";
  const navigation = useNavigation();
  const onGotoSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.textTitle}>Hello from {title}</Text>
      <Text style={GlobalStyles.textTitle}>
        Contact Type : Default
      </Text>

      <Image
        style={GlobalStyles.imageStyle}
        source={require("../assets/images/image.jpeg")}
      ></Image>

      <Button style={{}} onPress={() => onGotoSearch()} title="Search"></Button>
    </View>
  );
};

export default ContactScreen;
