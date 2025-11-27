import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar las pantallas
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';

// Crear el Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Definir las pantallas del Stack */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{ title: 'Detalles' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: 'Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
