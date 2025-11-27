import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Pantalla Principal</Text>
      <Text style={styles.subtitle}>¡Bienvenido al ejemplo de Stack Navigation!</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Detalles"
          onPress={() => navigation.navigate('Details', { itemId: 42, itemName: 'React Native' })}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Perfil"
          color="#2196F3"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
