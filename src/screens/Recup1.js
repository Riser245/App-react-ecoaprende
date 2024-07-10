// Importar Dependencias.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

export default function Recup1({ navigation }) {

    // Navegación entre pantallas.
    const irInicio = () => {
        navigation.navigate('InicioSesion');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> ¿Olvidaste tú clave? </Text>
            <Image
                source={require('../img/imagen_recup1.png')} // Ruta de la imagen dentro de la carpeta de activos
                style={styles.image}
            />
            <Text style={styles.textoInformativo}> Ingresa el correo electrónico, con el cuál te registraste. </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Correo electrónico:"
                    placeholderTextColor={"#000"}
                    style={styles.cuadroTextoG}
                    keyboardType="email-address" />
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Recuperar </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

// Diseño de la pantalla.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    container2: {
        alignItems: "center",
    },
    inputContainer: {
        alignItems: "center",
    },
    cuadroTextoG: {
        backgroundColor: "white",
        borderRadius: 10,
        width: 300,
        height: 43,
        paddingHorizontal: 10,
        color: "black",
        marginBottom: 10,
        marginTop: 10,
        borderColor: " #777F47",
        borderWidth: 2
    },
    button: {
        marginTop: 20,
        backgroundColor: "#777F47",
        width: 160,
        height: 40,
        fontWeight: "900",
        borderRadius: 50,
    },
    buttonText: {
        marginVertical: 7,
        textAlign: "center",
        alignItems: "center",
        color: "black",
        fontWeight: "600",
        fontSize: 16,
    },
    titulo: {
        color: '#322C2B',
        fontWeight: '500',
        fontSize: 20,
    },
    textoInformativo: {
        marginHorizontal: 50,
        textAlign: 'center',
        color: '#322C2B',
        fontWeight: '400',
        fontSize: 18,
        marginBottom: 20,
    },
    image: {
        width: 175,
        height: 175,
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#777F47',
        color: '#777F47',
        width: '100%',
        height: 40,
        borderRadius: 50,
        paddingHorizontal: 20,
    },
});
