import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

export default function App() {
  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkTheme ? styles.textLight : styles.textDark}>
        Hello World!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLight: {
    color: '#ffffff',
  },
  textDark: {
    color: '#000000',
  },
});
