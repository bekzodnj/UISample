import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Card} from './components/Card';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0f1c22' : '#0f1c22',
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.mainSection}>
        <Card />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainSection: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default App;
