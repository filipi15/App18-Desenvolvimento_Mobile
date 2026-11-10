import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    color: 'red',
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#222',
    borderRadius: 10,
    fontSize: 18,
    padding: 10,
  },
  botao: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#9fd3ff',
    borderColor: '#1a73c9',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textoBotao: {
    textAlign: 'center',
    fontSize: 20,
    color: '#1a73c9',
  },
  resultadoTitulo: {
    textAlign: 'center',
    fontSize: 24,
    color: '#1a73c9',
    marginTop: 25,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 26,
    color: '#1a73c9',
    marginTop: 5,
  },
});

export { styles };
