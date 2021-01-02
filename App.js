import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import Menu from './src/components/menu';

export default function App() {
  return (

    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Menu/>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
