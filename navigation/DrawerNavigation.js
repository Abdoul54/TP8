import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./BottomTabNavigation";
import SearchScreen from "../screens/SearchScreen";
import WeatherScreen from "../screens/WeatherScreen";
import GeolocationScreen from "../screens/GeolocationScreen";
import CameraScreen from "../screens/CameraScreen";
import SecondTabNavigator from "./SecondBottomTabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Search" component={SearchScreen} />
    <Drawer.Screen name="Profile Contact" component={TabNavigator} />
    <Drawer.Screen name="Weather" component={WeatherScreen} />
    <Drawer.Screen name="Geolocation" component={GeolocationScreen} />
    <Drawer.Screen name="Camera" component={SecondTabNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
