import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import ProductDetails from "./screens/tabs/ProductDetails";
import Favorites from "./screens/tabs/Favorites";
import Search from "./screens/tabs/Search";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
