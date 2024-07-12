import React, { useEffect } from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const SplashScreenComponent = () => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const splashTimer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 5000);

    return () => clearTimeout(splashTimer);
  }, []);

  const handleError = (error) => {
    console.error("Error loading video: ", error);
    SplashScreen.hideAsync();
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/SplashScreen.png')}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
        onError={handleError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default SplashScreenComponent;
