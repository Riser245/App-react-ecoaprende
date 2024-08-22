import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

// Componente MaskedInputDui que muestra un campo de entrada con máscara para el DUI
export default function MaskedInputDui({ dui, setDui }) {
    return (
        <TextInputMask
            style={styles.Input}
            placeholder="Dui: "
            type={'custom'}
            options={{
                mask: '99999999-9'
            }}
            value={dui}
            onChangeText={setDui}
        />
    );
}

// Estilos para el componente MaskedInputDui
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
