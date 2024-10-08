// Importar Dependencias.
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/screens/Index';
import IniciarSesion from './src/screens/IniciarSesion';
import Registrar from './src/screens/Registrar';
import Inicio from './src/screens/Inicio';
import Carrito from './src/screens/Carrito';
import Dashboard from './src/screens/Dashboard';
import Ordenes from './src/screens/Ordenes';
import Cuenta from './src/screens/Cuenta';
import Notificaciones from './src/screens/Notificaciones';
import Recup1 from './src/screens/Recup1';
import Recup2 from './src/screens/Recup2';
import DetalleProd from './src/screens/DetalleProd';
import NavBottom from './src/navegacion/NavBottom';
import EditUsuario from './src/screens/EditUsuario';


const Stack = createNativeStackNavigator();

// Navegación entre pantallas.
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IniciarSesion">
                <Stack.Screen
                    name="Index"
                    component={Index}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="IniciarSesion"
                    component={IniciarSesion}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Registrar"
                    component={Registrar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                    options={{
                        headerShown: true,
                        title: 'Dashboard',
                        headerStyle: {
                            backgroundColor: '#3C4E0B',
                            textAlign:'center',
                            title: 'Aligned Center',
                            headerTitleAlign: 'center'
                        },
                        headerTintColor: 'white',
                    }}
                />
                <Stack.Screen
                    name="Carrito"
                    component={Carrito}
                    options={{
                        headerShown: true,
                        title: 'Carrito de compras',
                        headerStyle: {
                            backgroundColor: '#3C4E0B',
                            textAlign:'center',
                            title: 'Aligned Center',
                            headerTitleAlign: 'center'
                        },
                        headerTintColor: 'white',
                    }}
                />
                <Stack.Screen
                    name="Ordenes"
                    component={Ordenes}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cuenta"
                    component={Cuenta}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Recup1"
                    component={Recup1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Recup2"
                    component={Recup2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NavBottom"
                    component={NavBottom}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditUsuario"
                    component={EditUsuario}
                    options={{
                        headerShown: true,
                        title: 'Editar Usuario',
                        headerStyle: {
                            backgroundColor: '#3C4E0B',
                            textAlign:'center',
                            title: 'Aligned Center',
                            headerTitleAlign: 'center'
                        },
                        headerTintColor: 'white',
                    }}
                />
                <Stack.Screen
                    name="Notificaciones"
                    component={Notificaciones}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#FFC0CB',
                        },
                        headerTintColor: '#000',
                    }}
                />
                <Stack.Screen
                    name="DetalleProd"
                    component={DetalleProd}
                    options={{
                        headerShown: true,
                        title: 'Información del libro',
                        headerStyle: {
                            backgroundColor: '#3C4E0B',
                            title: 'Aligned Center',
                            headerTitleAlign: 'center'
                        },
                        headerTintColor: 'white',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
