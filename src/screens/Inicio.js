// Importar Dependencias.
import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as Constantes from '../../api/contants';
import CategoriasView from '../components/Categorias/categorias';



const Inicio = () => {

    const ip = Constantes.SERVER_URL;
    const navigation = useNavigation();
    const [nombre, setNombre] = useState(null);
    const [dataCategorias, setDataCategorias] = useState([]);



    const getCategorias = async () => {
        try {
            const response = await fetch(`${ip}servicios/cliente/categorias.php?action=readAll`, {
                method: 'GET',
            });

            const data = await response.json();
            console.log(data);

            if (data.status) {
                setDataCategorias(data.dataset);
            } else {
                Alert.alert('Error al cargar las categorias', data.error);
            }

        } catch (error) {
            console.log(data);
            Alert.alert('Error', 'Ocurrió un error al cargar las categorias');
        }
    };

    useEffect(() => { //Se cargan los metodos
        getCategorias();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.subheaderText}>Categorías para lo que busques</Text>

            <SafeAreaView style={styles.containerFlat}>
                <FlatList
                    data={dataCategorias}
                    keyExtractor={(item) => item.id_categoria.toString()}
                    renderItem={({ item }) => (
                        <CategoriasView
                            ip={ip}
                            idCategoria={item.id_categoria}
                            imagenCategoria={item.imagen_categoria}
                            nombreCategoria={item.nombre_categoria}
                        />
                    )}
                />
            </SafeAreaView>
        </View>


    );
};

// Diseño de la pantalla.
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#777F47',
        width: '60%',
        marginTop: 20
    },
    img: {
        width: '100%',
        height: 100
    },
    textoTitulo: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20
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

export default Inicio;
