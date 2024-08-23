import { StyleSheet, TextInput } from 'react-native';

export default function Inputs({ placeHolder, setValor, contra, setTextChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      value={setValor}
      placeholderTextColor={'#000'}
      secureTextEntry={contra}
      onChangeText={setTextChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
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
