import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Sign Up Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
