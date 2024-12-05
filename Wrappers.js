import React from 'react';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import FavoritesScreen from './FavoritesScreen';

// Wrapper for HomeScreen
export const HomeWrapper = ({ cartItems, setCartItems, favorites, setFavorites, ...props }) => (
  <HomeScreen
    {...props}
    cartItems={cartItems}
    setCartItems={setCartItems}
    favorites={favorites}
    setFavorites={setFavorites}
  />
);

// Wrapper for CartScreen
export const CartWrapper = ({ cartItems, setCartItems, ...props }) => (
  <CartScreen {...props} cartItems={cartItems} setCartItems={setCartItems} />
);

// Wrapper for FavoritesScreen
export const FavoritesWrapper = ({ favorites, setFavorites, ...props }) => (
  <FavoritesScreen {...props} favorites={favorites} setFavorites={setFavorites} />
);
