import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ReorderScreen from './src/screens/ReorderScreen';
import CartScreen from './src/screens/CartScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return(
  <Stack.Navigator screenOptions={{headerShown: false,}}>
    <Stack.Screen
      name="HOME"
      component={HomeScreen}
      options={{title: ''}}
    />
    <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
  </Stack.Navigator>
)
};
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E6E',
        }}>
        <Tab.Screen
          name="HOME_STACK"
          component={MyHomeStack}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              return <Fontisto name={'home'} size={size} color={color} />; // default size is 25 and color is blue
            },
          }}
        />
        <Tab.Screen
          name="REORDER"
          component={ReorderScreen}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              return (
                <MaterialIcons name={'reorder'} size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="CART"
          component={CartScreen}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              return (
                <AntDesign name={'shoppingcart'} size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({size, color, focused}) => {
              return <EvilIcons name={'user'} size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
