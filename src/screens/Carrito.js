// Importar Dependencias.
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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
                <View style={styles.container2}>
                    <Text style={styles.headerText}>Carrito de compras</Text>
                </View>
                <Text style={styles.subheaderText}>Productos listos para ser adquiridos</Text>
                <View style={styles.middle} />
                <View style={styles.productContainer}>
                    <View style={styles.productCard}>
                        <Image source={require('../img/libros.png')} style={styles.imagenProducto} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productTitle}>Libro 1</Text>
                            <Text style={styles.productSubtitle}>Precio:$20</Text>
                            <Text style={styles.productPrice}>Cantidad a comprar:2</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity style={styles.minusButton}>
                                    <FontAwesome name="minus" size={24} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>1</Text>
                                <TouchableOpacity style={styles.plusButton}>
                                    <FontAwesome name="plus" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productCard}>
                        <Image source={require('../img/libros.png')} style={styles.imagenProducto} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productTitle}>Libro 2</Text>
                            <Text style={styles.productSubtitle}>Precio:$20</Text>
                            <Text style={styles.productPrice}>Cantidad a comprar:2</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity style={styles.minusButton}>
                                    <FontAwesome name="minus" size={24} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>1</Text>
                                <TouchableOpacity style={styles.plusButton}>
                                    <FontAwesome name="plus" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Subtotal:</Text>
                        <Text style={styles.priceValue}>$ 40.00</Text>
                    </View>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Total:</Text>
                        <Text style={styles.priceValue}>$ 40.00</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.confirmButton} onPress={irOrdenes}>
                    <Text style={styles.confirmButtonText}>Comprar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addMoreButton} onPress={irInicio}>
                    <Text style={styles.addMoreText}>Continuar comprando</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

// Diseño de la pantalla.
const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 15,
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
    middle: {
        flex: 0.3,
        backgroundColor: 'black',
        borderWidth: 2,
        marginTop:20,
        marginBottom:20,
        
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
        width:200,
        textAlign:'center',
    },
    productContainer: {
        width: '110%',
    },
    productCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    imagenProducto: {
        width: 100,
        height: 100,
        borderRadius: 0,
    },
    productDetails: {
        flex: 1,
        marginLeft: 20,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productSubtitle: {
        fontSize: 14,
        color: 'black',
    },
    productPrice: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    plusButton: {
        backgroundColor: '#777F47',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
    },
    minusButton: {
        backgroundColor: '#FF5552',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
    },
    quantityText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    addMoreButton: {
        backgroundColor: '#777F47',
        padding: 15,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
        marginTop:10
    },
    addMoreText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    priceContainer: {
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 15,
        marginVertical: 20,
        width: '100%',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 5,
    },
    priceLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    priceValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777F47',
    },
    confirmButton: {
        backgroundColor: '#777F47',
        padding: 15,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Carrito;
