import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroSlider from './IntroSlider';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import PasswordRecoveryScreen from './PasswordRecoveryScreen';
import AllProductsScreen from './AllProductsScreen';
import CheckoutScreen from './CheckoutScreen';
import NotificationsScreen from './NotificationsScreen';
import UserProfileScreen from './UserProfileScreen';
import { HomeWrapper, CartWrapper, FavoritesWrapper } from './Wrappers';
import SettingsScreen from './SettingsScreen';
import ProfileDetailScreen from './ProfileDetailScreen';
import Details from './Details';
import Details1 from './Details1';

const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]); // Shared cart state
  const [favorites, setFavorites] = useState({}); // Shared favorites state

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="IntroSlider">
        {/* Intro Slider */}
        <Stack.Screen name="IntroSlider" component={IntroSlider} />

        {/* Auth Screens */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="PasswordRecoveryScreen" component={PasswordRecoveryScreen} />

        {/* Main Screens */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeWrapper}
          initialParams={{ cartItems, setCartItems, favorites, setFavorites }} // Passing shared state to HomeWrapper
        />
        <Stack.Screen name="AllProductsScreen" component={AllProductsScreen} />
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesWrapper}
          initialParams={{ favorites, setFavorites }} // Passing shared favorites state to FavoritesWrapper
        />
        <Stack.Screen
          name="CartScreen"
          component={CartWrapper}
          initialParams={{ cartItems, setCartItems }} // Passing shared cart state to CartWrapper
        />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Details1" component={Details1} />
        <Stack.Screen name="ProfileDetailScreen" component={ProfileDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
