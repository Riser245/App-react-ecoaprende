// Importar Dependencias.
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Alert, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';
// Importa la función useFocusEffect de @react-navigation/native, 
// que permite ejecutar un efecto cada vez que la pantalla se enfoca.

import Constants from 'expo-constants';
import * as Constantes from '../../api/contants';
import Buttons from '../components/Buttons/Button';
import CarritoCard from '../components/DetailProductCart/CarritoCard';
import ModalEditarCantidad from '../components/Modals/ModalEditarCantidad';

const Carrito = ({ navigation }) => {
  // Estado para almacenar los detalles del carrito
  const [dataDetalleCarrito, setDataDetalleCarrito] = useState([]);
  // Estado para el id del detalle seleccionado para modificar
  const [idDetalle, setIdDetalle] = useState(null);
  // Estado para la cantidad del producto seleccionado en el carrito
  const [cantidadProductoCarrito, setCantidadProductoCarrito] = useState(0);
  // Estado para controlar la visibilidad del modal de edición de cantidad
  const [modalVisible, setModalVisible] = useState(false);
  // IP del servidor
  const ip = Constantes.SERVER_URL;

  // Función para navegar hacia atrás a la pantalla de productos
  const backProducts = () => {
    navigation.navigate('Inicio');
  };

  // Efecto para cargar los detalles del carrito al cargar la pantalla o al enfocarse en ella
  useFocusEffect(
    // La función useFocusEffect ejecuta un efecto cada vez que la pantalla se enfoca.
    React.useCallback(() => {
      getDetalleCarrito(); // Llama a la función getDetalleCarrito.
    }, [])
  );

  // Función para obtener los detalles del carrito desde el servidor
  const getDetalleCarrito = async () => {
    try {
      const response = await fetch(`${ip}servicios/cliente/pedido.php?action=readDetail`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data, "Data desde getDetalleCarrito")
      if (data.status) {
        setDataDetalleCarrito(data.dataset);
      } else {
        console.log("No hay detalles del carrito disponibles")
        //Alert.alert('ADVERTENCIA', data.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert('Error', 'Ocurrió un error al listar las categorias');
    }
  };

  // Función para finalizar el pedido
  const finalizarPedido = async () => {
    try {
      const response = await fetch(`${ip}servicios/cliente/pedido.php?action=finishOrder`, {
        method: 'GET',
      });
      const data = await response.json();
      if (data.status) {
        Alert.alert("Se finalizó la compra correctamente")
        setDataDetalleCarrito([]); // Limpia la lista de detalles del carrito
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al finalizar pedido');
    }
  };

  // Función para manejar la modificación de un detalle del carrito
  const handleEditarDetalle = (idDetalle, cantidadDetalle) => {
    setModalVisible(true);
    setIdDetalle(idDetalle);
    setCantidadProductoCarrito(cantidadDetalle);
  };

  // Función para renderizar cada elemento del carrito
  const renderItem = ({ item }) => (
    <CarritoCard
      item={item}
      cargarCategorias={getDetalleCarrito}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      setCantidadProductoCarrito={setCantidadProductoCarrito}
      cantidadProductoCarrito={cantidadProductoCarrito}
      idDetalle={idDetalle}
      setIdDetalle={setIdDetalle}
      accionBotonDetalle={handleEditarDetalle}
      getDetalleCarrito={getDetalleCarrito}
      updateDataDetalleCarrito={setDataDetalleCarrito} // Nueva prop para actualizar la lista
    />
  );

  return (
    <View style={styles.container}>
      {/* Componente de modal para editar cantidad */}
      <ModalEditarCantidad
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        idDetalle={idDetalle}
        setIdDetalle={setIdDetalle}
        setCantidadProductoCarrito={setCantidadProductoCarrito}
        cantidadProductoCarrito={cantidadProductoCarrito}
        getDetalleCarrito={getDetalleCarrito}
      />

      {/* Título de la pantalla */}
      <Text style={styles.title}>Carrito de Compras</Text>

      {/* Lista de detalles del carrito */}
      {dataDetalleCarrito.length > 0 ? (
        <FlatList
          data={dataDetalleCarrito}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_detalles_pedidos.toString()}
        />
      ) : (
        <Text style={styles.titleDetalle}>No hay detalles del carrito disponibles.</Text>
      )}

      {/* Botones de finalizar pedido y regresar a productos */}
      <View style={styles.containerButtons}>
        {dataDetalleCarrito.length > 0 && (
          <Buttons
              textoBoton='Finalizar Pedido'
            accionBoton={finalizarPedido}
          />
        )}
        <Buttons
          textoBoton='Regresar a productos'
          accionBoton={backProducts}
        />
      </View>
    </View>
  );
};

export default Carrito;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: 'black',
  },
  titleDetalle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 16,
    color: 'black',
  },
  containerButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
