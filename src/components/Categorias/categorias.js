
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import { Card} from 'react-native-paper';
import * as Constantes from '../../../api/contants';
//recibimos por props la imagen del producto, nombre, precio y otras propiedades de productos para mostrarlas en el componente de 
//productoCard
const ip = Constantes.IP;

export default function CategoriasView({ ip, imagenCategoria, nombreCategoria }) {

    return (

        <View style={styles.card}>
            <Card>
                <Card.Content>
                    <View style={styles.imageContainer}>
                        <Card.Cover style={styles.image} source={{ uri: `${ip}/ecoaprende/api/imagenes/categoria${imagenCategoria}` }} />
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
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 1,
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textTitle: {
        fontSize: 16,
        marginBottom: 8, fontWeight: '700'
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
        width: '85%',
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

