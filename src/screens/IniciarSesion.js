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
import back from "../img/back.png";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function IniciarSesion({ navigation }) {
  const irMenu = async () => {
    navigation.navigate("Inicio");
  };

    const irRegistro = async () => {
      navigation.navigate("Registrar");
    };

  return (
    <ScrollView>
      <ImageBackground
        source={require("../img/back.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Image source={require("../img/login.png")} style={styles.logo} />

          <Text style={styles.textBienvenida}>¡Hola!</Text>
          <Text style={styles.textLogin}>Bienvenido a EcoAprende.</Text>

          <View style={styles.rowContainer}>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Nombre" style={styles.cuadroTextoG} />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Correo electronico"
                style={styles.cuadroTextoG}
                keyboardType="email-address"
              />
              <Text onPress={irMenu} style={styles.buttonText3}>
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
      </ImageBackground>
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
    fontSize: 10,
    marginTop: 20,
    marginLeft: 210,
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
    borderRadius: 50,
    width: "100%",
    height: 33,
    paddingHorizontal: 10,
    color: "black",
    marginBottom: 10,
    marginTop: 10,
    borderColor: " #777F47",
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
