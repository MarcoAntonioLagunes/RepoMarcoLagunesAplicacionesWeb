# 📱 Ejemplo de Stack Navigation - React Native + Expo

Este es un ejemplo sencillo de cómo implementar navegación Stack en React Native usando Expo y React Navigation.

## 🚀 Instalación

Las dependencias ya están instaladas, pero si necesitas instalarlas nuevamente:

```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

## 📂 Estructura del Proyecto

```
NavegatorStack/
├── App.js                 # Configuración principal del Stack Navigator
├── screens/
│   ├── HomeScreen.js      # Pantalla principal
│   ├── DetailsScreen.js   # Pantalla de detalles (recibe parámetros)
│   └── ProfileScreen.js   # Pantalla de perfil
```

## 🎯 Conceptos Clave

### 1. **Stack Navigator**
El Stack Navigator gestiona las pantallas en una pila (stack), donde puedes:
- Navegar hacia adelante (push)
- Volver atrás (pop/goBack)
- Ir a la pantalla inicial (popToTop)

### 2. **NavigationContainer**
Envuelve toda la estructura de navegación de la app.

### 3. **Métodos de Navegación**

```javascript
// Navegar a una pantalla
navigation.navigate('NombrePantalla')

// Navegar con parámetros
navigation.navigate('Details', { itemId: 42, itemName: 'React' })

// Volver atrás
navigation.goBack()

// Ir a la pantalla inicial
navigation.popToTop()
```

### 4. **Recibir Parámetros**

```javascript
function DetailsScreen({ route, navigation }) {
  const { itemId, itemName } = route.params;
  // Usar los parámetros...
}
```

## 🎨 Características del Ejemplo

- ✅ **3 pantallas** con estilos diferentes
- ✅ **Navegación entre pantallas**
- ✅ **Paso de parámetros**
- ✅ **Header personalizado**
- ✅ **Métodos de navegación** (navigate, goBack, popToTop)

## 🏃‍♂️ Ejecutar el Proyecto

```bash
# Iniciar el servidor de desarrollo
npm start

# O para plataformas específicas:
npm run android
npm run ios
npm run web
```

## 📚 Flujo de Navegación

```
Home → Details → Profile
 ↑        ↓         ↓
 └────────┴─────────┘
   (goBack/popToTop)
```

## 💡 Tips Importantes

1. **initialRouteName**: Define la pantalla inicial del Stack
2. **screenOptions**: Configura opciones globales para todas las pantallas
3. **options**: Configura opciones específicas para cada pantalla
4. **navigation prop**: Se pasa automáticamente a cada componente de pantalla
5. **route prop**: Contiene información de la ruta, incluyendo parámetros

## 🔗 Referencias

- [React Navigation Docs](https://reactnavigation.org/)
- [Stack Navigator Guide](https://reactnavigation.org/docs/stack-navigator)
- [Expo Documentation](https://docs.expo.dev/)

---

¡Hecho con ❤️ usando React Native y Expo!
