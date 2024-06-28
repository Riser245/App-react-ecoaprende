// Importar Dependencias.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Buttons, TextInput } from 'react-native';
import { useState } from 'react';

export default function IniciarSesion() {

    return (
        <View style={styles.container}>
            <Text>En proceso...</Text>
        </View >
    );
}


// Diseño de la pantalla.
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});