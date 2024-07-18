// Importar Dependencias.
import { View, StyleSheet, Image, Text,ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";
import Toast from 'react-native-toast-message';
import fetchData from '../../api/components';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de tener instalado react-native-vector-icons

const IniciarSesion = ({ logueado, setLogueado }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigation = useNavigation();

    // URL de la API para el usuario
  const USER_API = 'servicios/publica/cliente.php';

  // Manejo de inicio de sesión
  const handleLogin = async () => {
    // Verifica que los campos no estén vacíos
    if (!email || !password) {
      setAlertType(2);
      setAlertMessage(`Campos requeridos, Por favor, complete todos los campos.`);
      setAlertCallback(null);
      setAlertVisible(true);
      Toast.show({
        type: 'error',
        text1: 'Faltan datos',
        text2: 'Por favor, complete todos los campos.',
    });
    return
    } else {
      // Creación del formulario para la petición
      const formData = new FormData();
      formData.append('correoCliente', email);
      formData.append('claveCliente', password);

      try {
        // Realización de la petición de inicio de sesión
        const data = await fetchData(USER_API, 'logIn', formData);
        if (data.status) {
            setAlertType(1);
            setAlertMessage(`${data.message}`);
            setAlertCallback(() => () => setLogueado(!logueado));
            setAlertVisible(true);
            Toast.show({
                type: 'success',
                text1: 'Verificación correcta',
                text2: `${data.message}`,
            });
            irMenu();
        } else {
            console.log(data);
            setAlertType(2);
            setAlertMessage(`Error sesión: ${data.error}`);
            setAlertCallback(null);
            setAlertVisible(true);
            Toast.show({
                type: 'error',
                text1: 'Error de verificación',
                text2: `Error al iniciar la sesión: ${data.error}`,
            });
        }
      } catch (error) {
        console.log('Error: ', error);
        setAlertType(2);
        setAlertMessage(`Error: ${error}`);
        setAlertCallback(null);
        setAlertVisible(true);
        Toast.show({
            type: 'error',
            text1: 'Error de verificación',
            text2: `Error: ${error}`,
        });
      }
    }
  };

    const irMenu = () => {
        navigation.navigate("NavBottom");
    };

    const irRecuperacion = () => {
        navigation.navigate("Recup1");
    };

    const irRegistro = () => {
        navigation.navigate("Registrar");
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require("../img/login.png")} style={styles.logo} />

                <Text style={styles.textBienvenida}>¡Hola!</Text>
                <Text style={styles.textLogin}>Bienvenido a EcoAprende.</Text>

                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Correo electrónico:"
                            placeholderTextColor={"#000"}
                            style={styles.cuadroTextoG}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address" />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                placeholder="Clave:"
                                placeholderTextColor={"#000"}
                                style={styles.cuadroTextoG}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!passwordVisible}
                            />
                            <TouchableOpacity
                                onPress={() => setPasswordVisible(!passwordVisible)}
                                style={styles.eyeIcon}
                            >
                                <Icon name={passwordVisible ? "eye-slash" : "eye"} size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <Text onPress={irRecuperacion} style={styles.buttonText3}>
                            ¿Olvidó su clave?
                        </Text>
                    </View>
                </View>

                <View style={styles.container2}>
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                    <Text onPress={irRegistro} style={styles.buttonText2}>
                        ¿No tienes cuenta aún? Inicia aquí
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default IniciarSesion;

// Diseño de la pantalla.
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        marginTop: 100,
        alignItems: "center",
        marginBottom: 10,
        width: 200,
        height: 200,
    },
    container: {
        alignItems: "center",
        paddingHorizontal: 20,
    },
    container2: {
        alignItems: "center",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
        width: "100%",
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 7,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
        marginTop: 10,
    },
    eyeIcon: {
        paddingHorizontal: 10,
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
    buttonText2: {
        marginVertical: 10,
        textAlign: "center",
        color: "black",
        fontWeight: "600",
        fontSize: 10,
        marginTop: 20,
    },
    buttonText3: {
        marginVertical: 10,
        textAlign: "center",
        color: "black",
        fontWeight: "600",
        fontSize: 14,
        marginTop: 10,
        marginLeft: 220,
    },
    textLogin: {
        color: "#322C2B",
        fontWeight: "700",
        fontSize: 14,
        marginBottom: 2,
        marginRight: 110,
    },
    cuadroTextoG: {
        flex: 1,
        height: 43,
        paddingHorizontal: 10,
        color: "black",
    },
    textBienvenida: {
        fontWeight: "700",
        fontSize: 20,
        marginBottom: 5,
        marginTop: 50,
        marginRight: 220,
    },
});

