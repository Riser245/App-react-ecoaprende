import React, { useEffect } from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';

const SplashScreenComponent = () => {
    useEffect(() => {
        const splashTimer = setTimeout(() => SplashScreen.hide(), 5000); // Ocultar el splash después de 5 segundos
        return () => clearTimeout(splashTimer);
    }, []);

    return (
        <View style={styles.container}>
            <Video
                source={require('../../assets/SplashVideo.mp4')} // Ruta al archivo de video
                rate={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.video}
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
