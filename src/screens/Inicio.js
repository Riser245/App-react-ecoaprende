// Importar Dependencias.
import React from 'react';
import { View, Text, Image,SafeAreaView, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as Constantes from '../../api/contants';
import CategoriasView from '../components/Categorias/categorias';



const Inicio = () => {

    const ip = Constantes.IP;
    const navigation = useNavigation();
    const [nombre, setNombre] = useState(null);
    const [dataEntrenamientos, setDataCategorias] = useState([]);

    const getUser = async () => {
        try {
            const response = await fetch(`${ip}/ecoaprende/api/servicios/cliente/clientes.php?action=getUser`, {
                method: 'GET'
            });
            const data = await response.json();
            if (data.status) {
                setNombre(data.username); //Aqui asignamos el correo del usuario que ha iniciado sesion
            } else {
                Alert.alert('Error', data.error);
            }
        } catch (error) {
            Alert.alert('Error', 'Ocurrió un error al obtener el usuario');
        }
    };

    const getCategorias = async () => {
        try {
            const response = await fetch(`${ip}/ecoaprende/api/servicios/cliente/categorias.php?action=readAll`, {
                method: 'GET', //Obtenemos la información extra de La Academia
            });

            const data = await response.json();
            console.log(data);

            if (data.status) {
                setDataCategorias(data.dataset);
            } else {
                Alert.alert('Error al cargar las categorias', data.error);
            }

        } catch (error) {
            Alert.alert('Error', 'Ocurrió un error al cargar las categorias');
        }
    };

    useEffect(() => { //Se cargan los metodos
        getUser();
        getCategorias();
    }, []);


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.subheaderText}>Categorías para lo que busques</Text>

                <SafeAreaView style={styles.containerFlat}>
                    <FlatList
                        data={dataEntrenamientos}
                        keyExtractor={(item) => item.id_categoria.toString()} // Id por el que se cargan las cards
                        renderItem={({ item }) => (
                            <CategoriasView
                                ip={ip}
                                idCategoria={item.id_categoria}
                                imagenCategoria={item.imagen_categoria}
                                nombreCategoria={item.nombre_categoria}
                            />
                        )}
                        ListHeaderComponent={<></>}
                    />
                </SafeAreaView>
                <Card style={styles.card}>
                    <Card.Content>
                        <Card.Cover style={styles.img} source={require('../img/libros.png')} />
                        <Text style={styles.textoTitulo} variant="titleLarge">Literatura</Text>
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
