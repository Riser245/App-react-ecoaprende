// Importar Dependencias.
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
} from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function IniciarSesion({ navigation }) {

    const irMenu = async () => {
        navigation.navigate("NavBottom");
    };

    const irRecuperacion = async () => {
        navigation.navigate("Recup1");
    };

    const irRegistro = async () => {
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
                            keyboardType="email-address" />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Clave:"
                            placeholderTextColor={"#000"}
                            style={styles.cuadroTextoG}
                            secureTextEntry
                        />
                        <Text onPress={irRecuperacion} style={styles.buttonText3}>
                            {" "}
                            ¿Olvidó su clave?{" "}
                        </Text>
                    </View>
                </View>

                <View style={styles.container2}>
                    <TouchableOpacity onPress={irMenu} style={styles.button}>
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                    <Text onPress={irRegistro} style={styles.buttonText2}>
                        {" "}
                        ¿No tienes cuenta aún? Inicia aquí{" "}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

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
        marginLeft: 240,
    },
    textLogin: {
        color: "#322C2B",
        fontWeight: "700",
        fontSize: 14,
        marginBottom: 2,
        marginRight: 110,
    },
    cuadroTextoG: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "100%",
        height: 43,
        paddingHorizontal: 10,
        color: "black",
        marginBottom: 10,
        marginTop: 10,
        borderColor: " #777F47",
        borderWidth: 2
    },
    textBienvenida: {
        color: "#777F47",
        fontWeight: "700",
        fontSize: 20,
        marginBottom: 5,
        marginTop: 50,
        marginRight: 220,
    },
});
