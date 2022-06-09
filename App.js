import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { LogBox } from "react-native";
import useFonts from './hooks/useFonts';

import Providers from './navigation';

const App = () => {
  
  // Loads the Fonts 
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  // Loads the Fonts 
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
  LogBox.ignoreLogs(["expo-app-loading is deprecated in favor of expo-splash-screen"]);
  LogBox.ignoreLogs(["Found screens with the same name nested inside one another"]);
  LogBox.ignoreLogs(["Bottom Tab Navigator: 'tabBarOptions' is deprecated"]);
  LogBox.ignoreLogs(["componentWillReceiveProps has been renamed"]);
  LogBox.ignoreLogs(["Animated: `useNativeDriver` was not specified"]);
  LogBox.ignoreLogs(["expo-app-loading is deprecated in favor of expo-splash-screen:"]);
  LogBox.ignoreLogs(["Warning: Can't perform a React state update on an unmounted component."]);
  return <Providers />;
}

export default App;