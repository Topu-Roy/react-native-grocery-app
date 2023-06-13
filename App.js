/*
//* Developer: Topu Roy
//* Country: Bangladesh
//* Age: 20
*/

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/AppNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
