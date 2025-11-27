import { View, Text, StyleSheet, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Recibir parámetros de la navegación
  const { itemId, itemName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Pantalla de Detalles</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>ID del Item: {itemId}</Text>
        <Text style={styles.infoText}>Nombre: {itemName}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Volver Atrás"
          color="#FF9800"
          onPress={() => navigation.goBack()}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Home"
          color="#4CAF50"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2e7d32',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '80%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  buttonContainer: {
    marginVertical: 5,
    width: '80%',
  },
});
