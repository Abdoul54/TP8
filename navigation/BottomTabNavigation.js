import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactScreen from "../screens/ContactScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Profile"
    screenOptions={{
      tabBarActiveTintColor: "royalblue",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="contacts" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
