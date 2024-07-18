// Importar Dependencias.
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import fetchData from '../../api/components';

const RegisterScreen = ({ navigation }) => {
    // Url de la api
    const USER_API = "servicios/cliente/clientes.php";

    // Constantes para el manejo de datos
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dui, setDUI] = useState("");
    const [clave, setClave] = useState("");

    // Función para navegar a IniciarSesion
    const irInicio = async () => {
        navigation.navigate('IniciarSesion');
    };

    // Función para manejar la creación de usuario
    const handleCreate = async () => {
        try {

            // Validacion si en caso estan vacios los campos.
            if (!nombre.trim() || !correo.trim() || !clave.trim() || !telefono.trim() || !dui.trim()) {
                Toast.show({
                    type: 'error',
                    text1: 'Faltan datos',
                    text2: 'Por favor, complete todos los campos.',
                });
                return;
            }
            const formData = new FormData();
            formData.append('nombreRegistro', nombre);
            formData.append('telefonoRegistro', telefono);
            formData.append('claveRegistro', clave);
            formData.append('correoRegistro', correo);
            formData.append('duiRegistro', dui);
            //Petición a la api para insertar un usuario
            const data = await fetchData(USER_API, "IngresoMovil", formData);
            if (data.status) {
                Alert.alert('Datos Guardados correctamente');
                navigation.navigate('IniciarSesion');
            } else {
                Alert.alert('Error', data.error || 'Error desconocido');
            }
        } catch (error) {
            console.error('Error durante la creación de usuario:', error);
            Alert.alert('Ocurrió un error al intentar crear el usuario', error.message);
        }
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textBienvenida}>¡Bienvenido a EcoAprende!</Text>
                <Text style={styles.textRegistro}>Registra tu usuario para que</Text>
                <Text style={styles.textRegistro}>disfrutes de nuestra aplicación.</Text>
                <Image
                    source={require('../img/registrar.png')}
                    style={styles.logo}
                />
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Nombre:' style={styles.cuadroTextoG} value={nombre} onChangeText={setNombre} />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Correo electrónico:' style={styles.cuadroTextoG} value={correo} onChangeText={setCorreo} keyboardType="email-address" />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Clave:' style={styles.cuadroTextoG} value={clave} onChangeText={setClave} secureTextEntry />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Telefono cliente:' style={styles.cuadroTextoG} value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='DUI:' style={styles.cuadroTextoG} value={dui} onChangeText={setDUI} />
                    </View>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity onPress={handleCreate} style={styles.button}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                    <Text onPress={irInicio} style={styles.buttonText2}> Regresar al login</Text>
                </View>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
        </ScrollView>
    );
}

// Diseño de la pantalla.
const styles = StyleSheet.create({
    logo: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 10,
        width: 200,
        height: 200,
    },
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    container2: {
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        width: '100%',
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 7,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#777F47',
        width: 160,
        height: 40,
        fontWeight: '900',
        borderRadius: 50,
    },
    buttonText: {
        marginVertical: 7,
        textAlign: 'center',
        alignItems: 'center',
        color: 'black',
        fontWeight: '600',
        fontSize: 16
    },
    buttonText2: {
        marginVertical: 10,
        textAlign: 'center',
        color: '#777F47',
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 210,
        marginTop: 20
    },
    textRegistro: {
        color: '#322C2B',
        fontWeight: '700',
        fontSize: 14,
        marginBottom: 2,
    },
    cuadroTextoG: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: '100%',
        height: 33,
        paddingHorizontal: 10,
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
        borderColor: ' #777F47',
    },
    textBienvenida: {
        color: '#777F47',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 5,
        marginTop: 50,
    }
});

export default RegisterScreen;
