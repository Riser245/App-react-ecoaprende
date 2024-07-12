// Importar Dependencias.
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Carrito = () => {

    const navigation = useNavigation();

    // Metodos de navegación.
    const irInicio = async () => {
        navigation.navigate('Inicio')
    };

    const irOrdenes = async () => {
        navigation.navigate('Ordenes')
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.subheaderText}>Categorías para lo que busques</Text>


                <Card style={styles.card}>
                    <Card.Content>
                        <Card.Cover style={styles.img} source={require('../img/libros.png')} />
                        <Text style={styles.textoTitulo} variant="titleLarge">Medicina</Text>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Card.Cover style={styles.img} source={require('../img/libros.png')} />
                        <Text style={styles.textoTitulo} variant="titleLarge">Literatura</Text>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Card.Cover style={styles.img} source={require('../img/libros.png')} />
                        <Text style={styles.textoTitulo} variant="titleLarge">Filosofía</Text>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
};

// Diseño de la pantalla.
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#777F47',
        width:'60%',
        marginTop:20
    },
    img: {
        width:'100%',
        height:100
    },
    textoTitulo: {
        color:'white',
        textAlign:'center',
        fontSize: 16,
        marginTop:20
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    container2: {
        backgroundColor: '#777F47',
        flex: 1,
        alignItems: 'center',
        padding: 5,
        marginBottom: 20,
        width: '120%'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
        backgroundColor: '#777F47',
    },
    subheaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777F47',
        width: 200,
        textAlign: 'center',
    },
});

export default Carrito;
