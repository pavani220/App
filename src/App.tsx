import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'; // Import WelcomeScreen component
import HomeScreen from './screens/HomeScreen'; // Import HomeScreen component
import {NavigationContainer} from '@react-navigation/native';
function App(): React.JSX.Element {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 5000); // Show welcome screen for 5 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (showWelcomeScreen) {
    return <WelcomeScreen />;
  }
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );

};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;