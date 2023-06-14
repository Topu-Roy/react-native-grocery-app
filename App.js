/*
//* Developer: Topu Roy
//* Country: Bangladesh
//* Age: 20
*/

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/AppNavigator";
import { Provider } from "react-redux";
import store from "./app/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
