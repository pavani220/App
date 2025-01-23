import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './src/components/Navbar';

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
