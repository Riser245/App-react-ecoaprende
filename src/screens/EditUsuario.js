// Importar Dependencias.
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import * as Constantes from '../../api/contants';
import Input from '../components/InputsPerfil/Inputs';
import InputMultiline from '../components/InputsPerfil/InputMultiline';
import MaskedInputTelefono from '../components/InputsPerfil/MaskedInputTelefono';
import MaskedInputDui from '../components/InputsPerfil/MaskedInputDui';
import InputEmail from '../components/InputsPerfil/InputEmail';
import Buttons from '../components/InputsPerfil/Buttons/Button';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import fetchData from '../../api/components';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from "react";


export default function EditCuenta({ navigation }) {
    const USER_API = 'servicios/cliente/clientes.php';
    // Estados para almacenar los datos del usuario
    const ip = Constantes.SERVER_URL;

    // URL de la API para el usuario
    const [idCliente, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [dui, setDui] = useState('');
    const [foto, setFotoCliente] = useState('');

  // Expresiones regulares para validar DUI y teléfono
  const duiRegex = /^\d{8}-\d$/;
  const telefonoRegex = /^\d{4}-\d{4}$/;

  // Funcion para llenar los inputs con los datos del usuario
  const fillData = async () => {
    try {
        const response = await fetch(`${ip}servicios/cliente/clientes.php?action=readProfileMovil`, {
            method: 'GET'
        });
        const data = await response.json();
        console.log("Datos a actualizar", data);
        if (data.status) {
            setNombre(data.name.nombre_cliente);
            setCorreo(data.name.correo_cliente);
            setDui(data.name.dui_cliente);
            setTelefono(data.name.telefono_cliente);
        } else {
            Alert.alert('Error', data.error);
        }
    } catch (error) {
        Alert.alert('Ocurrió un error al intentar obtener los datos del usuario');
    }
  };

  // Logica para cargar los datos del usuario al cargar la pantalla
  useFocusEffect(
    React.useCallback(() => {
        fillData();
    }, [])
  );

  const editProfile = async () => {
    try {
        console.log("Datos a enviar", nombre, correo, dui, telefono)

        // Validar los campos
        if (!nombre.trim() || !correo.trim() || 
            !dui.trim() || !telefono.trim()) {
            Alert.alert("Debes llenar todos los campos");
            return;
        } else if (!duiRegex.test(dui)) {
            Alert.alert("El DUI debe tener el formato correcto (########-#)");
            return;
        } else if (!telefonoRegex.test(telefono)) {
            Alert.alert("El teléfono debe tener el formato correcto (####-####)");
            return;
        }

        // Si todos los campos son válidos, proceder con la creación del usuario
        const formData = new FormData();
        formData.append('nombreCliente', nombre);
        formData.append('correoCliente', correo);
        formData.append('telefonoCliente', telefono);
        formData.append('duiCliente', dui);

        const response = await fetch(`${ip}servicios/cliente/clientes.php?action=updateRow`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        console.log(data, "Data desde Editar Perfil OK")
        if (data.status) {
            console.log(data, 'Valor de editar perfil OK')
            Alert.alert('Perfil editado correctamente', '', [
                { text: 'OK', onPress: () => fillData() },
            ], { icon: 'success' });
        } else {
            Alert.alert('Error', data.error);
        }
    } catch (error) {
        Alert.alert('Ocurrió un error al intentar editar el usuario');
    }
  };

    const irUser = () => {
        navigation.navigate("NavBottom");
    };

    const [modalType, setModalType] = useState('');

    // Estado para almacenar los datos del perfil del usuario
    const [profileData, setProfileData] = useState(null);

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
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Correo electronico</Text>
                <InputEmail
                    placeHolder='Email Cliente'
                    setValor={correo}
                    setTextChange={setCorreo}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Teléfono</Text>
                <MaskedInputTelefono
                    telefono={telefono}
                    setTelefono={setTelefono}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Dui</Text>
                <MaskedInputDui
                    dui={dui}
                    setDui={setDui}
                />
            </View>
            <TouchableOpacity onPress={editProfile}  style={styles.button}>
                <Text style={styles.buttonText}  >Editar datos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={irUser} style={styles.button}>
                <Text style={styles.buttonText}>Regresar</Text>
            </TouchableOpacity>    
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
