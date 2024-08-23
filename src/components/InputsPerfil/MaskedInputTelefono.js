import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function MaskedInputTelefono({ telefono, setTelefono }) {
    return (
        <TextInputMask
            style={styles.Input}
            placeholder="Teléfono"
            placeholderTextColor="#000"
            type={'custom'}
            options={{
                mask: '9999-9999' // Formato para el número de teléfono
            }}
            value={telefono}
            onChangeText={setTelefono}
        />
    );
}

const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#CBCBCB',
        width: 220,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#777F47',
        color: 'black',
        paddingLeft: 10,
        marginLeft: 85,
        marginRight:50
    },

});