import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Ensure this import is correct

// Make sure the `products` array is declared in the same file above the component:
const products = [
  {
    id: '1',
    name: 'Nike Jordan',
    price: '$58.7',
    image: require('../mobile/img/Group 114.png'), // Ensure the path is correct
    colors: ['#FFD700', '#ADD8E6', '#000000'],
  },
  {
    id: '2',
    name: 'Nike Air Max',
    price: '$37.8',
    image: require('../mobile/img/Group 118.png'), // Ensure the path is correct
    colors: ['#ADD8E6', '#808080'],
  },
  {
    id: '3',
    name: 'Nike Club Max',
    price: '$47.7',
    image: require('../mobile/img/e2.png'), // Ensure the path is correct
    colors: ['#0000FF', '#FFD700'],
  },
  {
    id: '4',
    name: 'Nike Air Max',
    price: '$57.6',
    image: require('../mobile/img/e2.png'), // Ensure the path is correct
    colors: ['#00FF00', '#808080', '#800080'],
  },
  {
    id: '5',
    name: 'Nike Club Max',
    price: '$47.7',
    image: require('../mobile/img/Group 180.png'),
    colors: ['#0000FF', '#FFD700'], // Xanh dương, vàng
  },
  {
    id: '6',
    name: 'Nike Air Max',
    price: '$57.6',
    image: require('../mobile/img/11.png'),
    colors: ['#00FF00', '#808080', '#800080'], // Xanh lá, xám, tím
  },
];

export default function FavouriteScreen() {
  const navigation = useNavigation(); // Hook for navigation

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <TouchableOpacity style={styles.favoriteIcon}>
        <Ionicons name="heart" size={18} color="#FF0000" />
      </TouchableOpacity>
      <Text style={styles.bestSeller}>BEST</Text>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <View style={styles.colorContainer}>
        {item.colors.map((color, index) => (
          <View key={index} style={[styles.colorCircle, { backgroundColor: color }]} />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Puma</Text>
        <TouchableOpacity>
          <Ionicons name="" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products} // Ensure this references the `products` array correctly
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    top:20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
 
  },
  productList: {
    paddingVertical: 10,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 2,top:20
  },
  bestSeller: {
    fontSize: 12,
    color: '#007BFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});
