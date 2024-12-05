import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/nubble-logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(14,92,76)',
  },
  logo: {
    width: 300, 
    height: 300, 
    resizeMode: 'contain',
  },
});

export default LoadingScreen;
