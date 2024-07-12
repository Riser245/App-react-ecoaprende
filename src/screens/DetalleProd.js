// Importar Dependencias.
import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DetalleProd = () => {

    const navigation = useNavigation();

    const irCarrito = () => {
        navigation.navigate('Carrito');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
            <TouchableOpacity style={styles.botonCarrito2} onPress={irCarrito}>
                        <Text style={styles.textoBoton2}>
                            Regresar
                        </Text>
                    </TouchableOpacity>
                <View style={styles.containerImagen}>
                    <Image
                        source={require('../img/producto.png')}
                        style={styles.imagenProducto}
                    />
                </View>
                <View style={styles.productDetails}>
                    <View style={styles.containerProducto}>
                        <Text style={styles.tituloProducto}>
                            EL LIBRO DE LA MEDICINA
                            THE MEDICINE BOOK.
                            Autor: DK Big Ideas.
                        </Text>
                    </View>
                    <Text style={styles.textoProducto}>
                        Un recorrido por más de 90 de las ideas, avances e hitos más importantes de la historia médica internacional...
                    </Text>
                    <View style={styles.containerProducto}>
                    <Text>
                        Estado: Usado.
                    </Text>
                    </View>
                    <View style={styles.containerProducto2}>
                    <Text>
                        Cantidad disponible:
                    </Text>
                    <Text>
                        Cantidad disponible:
                    </Text>
                    </View>
                    <TouchableOpacity style={styles.botonCarrito} onPress={irCarrito}>
                        <Text style={styles.textoBoton}>
                            Agregar al carrito
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

// Diseño de la pantalla.
const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 20,
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    containerProducto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 4,
        alignItems: 'flex-start',
        marginTop:5,
        paddingHorizontal: 50,
    },
    containerProducto2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 4,
        alignItems: 'flex-start',
        marginTop:10,
        paddingHorizontal: 50,
    },
    containerImagen: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        marginBottom: 30,
    },
    containerImagen2: {
        backgroundColor: 'white',
        width: '20%',
        alignItems: 'center',
        marginBottom: 20,
    },
    imagenProducto: {
        width: '50%',
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
    },
    productDetails: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    tituloProducto: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 45,
        marginHorizontal: 10,
        textAlign: 'center'
    },
    precioProducto: {
        marginLeft: 45,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5EC401',
        marginTop: 40,
    },
    textoProducto: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 20,
        width:300,
        marginTop:10
    },
    botonCarrito: {
        textAlign: 'center',
        backgroundColor: '#777F47',
        width: 200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop:20
    },
    botonCarrito2: {
        textAlign: 'center',
        backgroundColor: '#777F47',
        width: 200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop:20,
        marginBottom:40,
        marginRight:150
    },
    textoBoton: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoBoton2: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    masProductosContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: '70%',
        marginTop: 20,
        marginHorizontal: 10,
    },
    masProductosTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productoRelacionado: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    productoInfo: {
        backgroundColor: 'white',
        marginLeft: 20,
    },
    productoRelacionadoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productoRelacionadoDescripcion: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
});

export default DetalleProd;
