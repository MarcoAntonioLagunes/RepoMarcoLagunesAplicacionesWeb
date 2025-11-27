import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Pantalla de Perfil</Text>
      
      <View style={styles.profileBox}>
        <Text style={styles.profileText}>Usuario: Juan Pérez</Text>
        <Text style={styles.profileText}>Email: juan@ejemplo.com</Text>
        <Text style={styles.profileText}>Nivel: Experto React Native</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ver Detalles"
          onPress={() => navigation.navigate('Details', { 
            itemId: 99, 
            itemName: 'Perfil de Usuario' 
          })}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Volver"
          color="#9C27B0"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6a1b9a',
  },
  profileBox: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    marginBottom: 30,
    width: '80%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
  },
  buttonContainer: {
    marginVertical: 5,
    width: '80%',
  },
});
