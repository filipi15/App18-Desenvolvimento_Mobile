import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './styles';

// Componente reutilizado nas 3 telas (Dólar, Euro e BitCoin)
// props.moeda = nome da moeda | props.cotacao = valor de 1 unidade da moeda em Reais
export default function Conversor(props) {
  const [valor, setValor] = useState('')
  const [resultado, setResultado] = useState('')

  function converter() {
    if (valor === '' || isNaN(parseFloat(valor))) {
      alert('Digite um valor válido!')
      return;
    }

    let convertido = parseFloat(valor) / props.cotacao

    setResultado(props.simbolo + ' ' + convertido.toFixed(props.casas))
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>
      <Text style={styles.subtitulo}>Real → {props.moeda}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor em R$"
        placeholderTextColor="orange"
        keyboardType="numeric"
        value={valor}
        onChangeText={(texto) => setValor(texto)}
      />

      <TouchableOpacity style={styles.botao} onPress={converter}>
        <Text style={styles.textoBotao}>Converter</Text>
      </TouchableOpacity>

      <Text style={styles.resultadoTitulo}>Resultado</Text>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}
