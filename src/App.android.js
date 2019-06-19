import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
});

const App = createAppContainer(AppStackNavigator);
