// Importaciones necesarias desde React y React Native
import React from 'react';
import { Platform, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

// Componente MaskedInputTelefono que muestra un campo de entrada con máscara para el teléfono
export default function MaskedInputTelefono({ telefono, setTelefono }) {
    return (
        <TextInputMask
            style={styles.Input}
            placeholder="Teléfono: "
            type={'custom'}
            options={{
                mask: '9999-9999'
            }}
            value={telefono}
            onChangeText={setTelefono}
        />
    );
}

// Estilos para el componente MaskedInputTelefono
const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#FFF',
        color: '#000', // Corregido de '#black' a '#000'
        fontWeight: '400',
        width: 350,
        height: 33,
        borderRadius: 15,
        paddingLeft: 10,
    },
});