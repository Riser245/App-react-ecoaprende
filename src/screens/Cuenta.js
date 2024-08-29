// Importar Dependencias.
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import * as Constantes from '../../api/contants';
import UsuarioModal from '../components/Modals/UsuarioModal';
import Input from '../components/InputsPerfil/Inputs';
import InputMultiline from '../components/InputsPerfil/InputMultiline';
import MaskedInputTelefono from '../components/InputsPerfil/MaskedInputTelefono';
import MaskedInputDui from '../components/InputsPerfil/MaskedInputDui';
import InputEmail from '../components/InputsPerfil/InputEmail';
import Buttons from '../components/InputsPerfil/Buttons/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import fetchData from '../../api/components';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from "react";


export default function Cuenta({ navigation }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const USER_API = 'servicios/cliente/clientes.php';
    // Estados para almacenar los datos del usuario
    const [idCliente, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [dui, setDui] = useState('');
    const [foto, setFotoCliente] = useState('');
    // URL de la API para el usuario


    const irInicio = () => {
        navigation.navigate("IniciarSesion");
    };

    const handleLogOut = async () => {
        try {
            const data = await fetchData(USER_API, "logOut");
            setTimeout(irInicio, 200);
            if (data.status) {
                console.log(data);
            } else {
                Alert.alert("Error sesión", data.error);
            }
        } catch (error) {
            console.log("Error: ", error);
            Alert.alert("Error sesión", error);
        }
    };


    const [modalType, setModalType] = useState('');

    // Estado para almacenar los datos del perfil del usuario
    const [profileData, setProfileData] = useState(null);

    const getUser = async () => {
        try {
            const response = await fetch(`${ip}servicios/cliente/clientes.php?action=readProfileMovil`, {
                method: 'GET'
            });
            console.log('Fetch response:', response);
            const data = await response.json();
            console.log('Fetch data:', data);
            if (data.status) {
                setNombre(data.name.nombre_cliente);
                setCorreo(data.name.correo_cliente);
                setDui(data.name.dui_cliente);
                setTelefono(data.name.telefono_cliente);
            } else {
                Alert.alert('Error', data.error);
                console.log(error);
            }
        } catch (error) {
            Alert.alert('Error', 'Ocurrió un error al obtener los datos del usuario');
            console.log(error);
        }
    };


    // Constante que almacena la dirección IP del servidor
    const ip = Constantes.SERVER_URL;

    // Función para obtener los datos del perfil del usuario desde el servidor

    /*
    const getProfileData = async () => {
        try {
            const response = await fetch(`${ip}servicios/cliente/clientes.php?action=readOne`, {
                method: 'GET',
                credentials: 'include' // Para enviar cookies con la solicitud
            });

            const data = await response.json();
            console.log(data);
            if (data.status) {
                // Si la solicitud es exitosa, se actualizan los estados con los datos del perfil
                setProfileData(data.dataset);
                setId(data.dataset.id_cliente);
                setNombre(data.dataset.nombre_cliente);
                setCorreo(data.dataset.correo_cliente);
                setDui(data.dataset.dui_cliente);
                setTelefono(data.dataset.telefono_cliente);
            } else {
                // Si hay un error, se muestra una alerta
                Alert.alert('Error perfil', data.error);
            }
        } catch (error) {
            // Manejo de errores en caso de que la solicitud falle
            Alert.alert('Error', 'Ocurrió un error al obtener los datos del perfil');
        }
    };

    */

    // Función para editar los datos del usuario
    const handleEditUser = async () => {
        try {
            let localUri = foto
            let fileName = ""
            let match = ""
            let type = ""
            console.log('valor de la url:', localUri)
            if (localUri == null || localUri == "") {
                Alert.alert("Selecciona una iamgen")
            }
            else {
                console.log('ejecutando filename')
                fileName = localUri.split('/').pop()
                match = /\.(\w+)$/.exec(fileName)
                type = match ? `image/${match[1]}` : `image`
                console.log(type)
            }
            const formData = new FormData();
            formData.append('idCliente', idCliente);
            formData.append('nombreCliente', nombre);
            formData.append('correoCliente', correo);
            formData.append('duiCliente', dui);
            formData.append('telefonoCliente', telefono);

            const response = await fetch(`${ip}servicios/cliente/clientes.php?action=readEditProfile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data', // Se utiliza para que acepte cualquier tipo de contenido
                    'Accept': 'application/json'
                },
                body: formData
            });

            const responseText = await response.text(); // Obtén la respuesta como texto para depuración
            console.log(responseText);

            const data = JSON.parse(responseText); // Asegúrate de parsear el texto a JSON
            console.log(data);

            if (data.status) {
                Alert.alert('Éxito', data.message);
                setIsModalVisible(false);
            } else {
                Alert.alert('Error', data.error);
            }
        } catch (error) {
            console.error('Error al editar el usuario:', error);
            Alert.alert('Error', `Ocurrió un error al editar el usuario: ${error.message}`);
        }
    };
    // Función para abrir el modal de edición
    const openEditModal = () => {
        setModalType('edit');
        setIsModalVisible(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalVisible(false);
    };

    // Función para manejar el envío del formulario según el tipo de modal
    const handleSubmit = () => {
        if (modalType === 'edit') {
            handleEditUser();
        } else if (modalType === 'password') {
            handleChangePassword();
        }
    };

    useFocusEffect(
        useCallback(() => {
            getUser();
        }, [])
    );

    // Uso del hook useEffect para obtener los datos del perfil cuando el componente se monta
    /*
    useEffect(() => {
        getProfileData();
    }, []);
    */

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../img/perfil_ecoaprende.png')}
                    style={styles.perfil}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nombre Cliente</Text>
                <Input
                    placeHolder='Nombre'
                    setValor={nombre}
                    setTextChange={setNombre}
                    editable={!isModalVisible}
                    style={isModalVisible ? styles.inactivo : {}}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Correo electronico</Text>
                <InputEmail
                    placeHolder='Email Cliente'
                    setValor={correo}
                    setTextChange={setCorreo}
                    editable={!isModalVisible}
                    style={isModalVisible ? styles.inactivo : {}}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Teléfono</Text>
                <MaskedInputTelefono
                    telefono={telefono}
                    setTelefono={setTelefono}
                    editable={!isModalVisible}
                    style={isModalVisible ? styles.inactivo : {}}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Dui</Text>
                <MaskedInputDui
                    dui={dui}
                    setDui={setDui}
                    editable={!isModalVisible}
                    style={isModalVisible ? styles.inactivo : {}}
                />
            </View>
            <TouchableOpacity accionBoton={openEditModal} style={styles.button}>
                <Text style={styles.buttonText}  >Editar datos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogOut} style={styles.button}>
                <Text style={styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>

            <UsuarioModal
                isVisible={isModalVisible}
                onClose={closeModal}
                onSubmit={handleSubmit}
                nombre={nombre}
                setNombre={setNombre}
                correo={correo}
                setCorreo={setCorreo}
                direccion={direccion}
                setDireccion={setDireccion}
                dui={dui}
                setDui={setDui}
                telefono={telefono}
                setTelefono={setTelefono}
                fotoo={foto}
                setFotoo={setFotoCliente}
                modalType={modalType}
            />

        </View>
    );
};


// Diseño de la pantalla.
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: "#777F47",
        width: 260,
        height: 40,
        fontWeight: "900",
        borderRadius: 50,
        marginLeft: 65,
        textAlign: 'center',
    },
    buttonText: {
        marginVertical: 7,
        textAlign: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingVertical: 30,
    },
    container2: {
        alignItems: 'center',
        paddingTop: 20,
        flex: 1,
        paddingBottom: 20,
    },
    container3: {
        paddingBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    perfil: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 100,
        height: 120,
        width: 120,
    },
    infoContainer: {
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        textAlign: 'center'
    },
    value: {
        paddingLeft: 3,
        textAlign: 'left',
        fontSize: 18,
        marginBottom: 15,
    },
    inputValue: {
        backgroundColor: 'white',
        width: 220,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#777F47',
        color: 'black',
        paddingLeft: 10,
        marginLeft: 50,
    },
    inputValue2: {
        backgroundColor: '#CBCBCB',
        width: 220,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#777F47',
        color: 'black',
        paddingLeft: 10,
        marginLeft: 50,
        marginRight: 50
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    editButton: {
        marginHorizontal: 59,
        backgroundColor: '#777F47',
        borderWidth: 2,
        width: 200,
        borderColor: 'white',
        alignItems: 'center',
    },
    logoutButton: {
        marginHorizontal: 59,
        alignItems: 'center',
        width: 200,
    },
    buttonGuardar: {
        backgroundColor: '#98FB98',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#98FB98',
        marginHorizontal: 10,
        height: 50,
        width: 180,
    },
    buttonCancelar: {
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: '#F08080',
        marginHorizontal: 10,
        height: 50,
        width: 150,
        borderColor: '#F08080',
    },
    buttonText2: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    titulo3: {
        fontSize: 24,
        fontWeight: '500',
        color: 'black',
    }
});
