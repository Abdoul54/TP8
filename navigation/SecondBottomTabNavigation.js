import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactScreen from "../screens/ContactScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import CameraScreen from "../screens/CameraScreen";
import GalleryScreen from "../screens/GalleryScreen";

const Tab = createBottomTabNavigator();

const SecondTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Profile"
    screenOptions={{
      tabBarActiveTintColor: "royalblue",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Camera"
      component={CameraScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="camera" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Gallery"
      component={GalleryScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="view-gallery"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default SecondTabNavigator;
