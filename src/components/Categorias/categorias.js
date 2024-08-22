
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import { Card} from 'react-native-paper';
import * as Constantes from '../../../api/contants';
//recibimos por props la imagen del producto, nombre, precio y otras propiedades de productos para mostrarlas en el componente de 
//productoCard
const ip = Constantes.SERVER_URL;

export default function CategoriasView({ ip,idCategoria, imagenCategoria, nombreCategoria }) {

    return (

        <View >
            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.imageContainer}>
                        <Card.Cover style={styles.image} source={{ uri: `${ip}categoria/${imagenCategoria}` }} />
                    </View>

                    <Text style={styles.textTitle}>{nombreCategoria}</Text>

                </Card.Content>
            </Card>
        </View>

    );
}


const styles = StyleSheet.create({
    containerFlat: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#EAD8C0',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    card: {
        backgroundColor: '#777F47',
        width: '100%',
        marginTop: 20
    },
    textTitle: {
        fontSize: 16,
        marginBottom: 8, fontWeight: '700',
        color: 'white'
    },
    button: {
        backgroundColor: '#AF8260',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 12,
    },
    imageContainer: {
        alignItems: 'center', // Centrar imagen horizontalmente
    }, textDentro: {
        fontWeight: '400'
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6D0E0E',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    cartButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        textAlign: 'center'
    },
});

