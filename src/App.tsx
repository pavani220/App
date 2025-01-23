import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen'; // Ensure the correct path
import Navbar from './components/Navbar';

const Stack = createStackNavigator();

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
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
