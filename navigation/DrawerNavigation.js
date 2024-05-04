import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./BottomTabNavigation";
import SearchScreen from "../screens/SearchScreen";
import WeatherScreen from "../screens/WeatherScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Search" component={SearchScreen} />
    <Drawer.Screen name="Profile Contact" component={TabNavigator} />
    <Drawer.Screen name="Weather" component={WeatherScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
