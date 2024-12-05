import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const products = [
  {
    id: '1',
    name: 'Nike Jordan',
    price: '$58.7',
    image: require('../mobile/img/Group 204.png'),
    colors: ['#FFD700', '#ADD8E6', '#000000'], // Vàng, xanh nhạt, đen
  },
  {
    id: '2',
    name: 'Nike Air Max',
    price: '$37.8',
    image: require('../mobile/img/Group 178.png'),
    colors: ['#ADD8E6', '#808080'], // Xanh nhạt, xám
  },
  {
    id: '3',
    name: 'Nike Club Max',
    price: '$47.7',
    image: require('../mobile/img/u1.png'),
    colors: ['#0000FF', '#FFD700'], // Xanh dương, vàng
  },
  {
    id: '4',
    name: 'Nike Air Max',
    price: '$57.6',
    image: require('../mobile/img/Group 179.png'),
    colors: ['#00FF00', '#808080', '#800080'], // Xanh lá, xám, tím
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
  const navigation = useNavigation();

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      {/* Hình ảnh sản phẩm */}
      <Image source={item.image} style={styles.productImage} />

      {/* Nút tìm kiếm */}
      <TouchableOpacity style={styles.searchIcon}>
        <Ionicons name="" size={18} color="#007BFF" />
      </TouchableOpacity>

      {/* Thông tin sản phẩm */}
      <Text style={styles.bestSeller}>BEST SELLER</Text>
      <Text style={styles.productName}>{item.name}</Text>

      {/* Price and colors on the same row */}
      <View style={styles.priceAndColorContainer}>
        <Text style={styles.productPrice}>{item.price}</Text>

        {/* Màu sắc sản phẩm */}
        <View style={styles.colorContainer}>
          {item.colors.map((color, index) => (
            <View
              key={index}
              style={[styles.colorCircle, { backgroundColor: color }]}
            />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Nút quay lại */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" top="15" />
        </TouchableOpacity>
        <Text style={styles.title}>BEST SELLER</Text>
        {/* Nút tìm kiếm */}
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" top="15" />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2} // Hiển thị 2 cột
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 15,
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
    alignItems: 'flex-start', // Align text and other elements to the left
    elevation: 2,
  },
  productImage: {
    width: 150, // Increased size for the product image
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 2,
  },
  bestSeller: {
    fontSize: 12,
    color: '#007BFF',
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'left', // Align text to the left
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left', // Align text to the left
    marginBottom: 4,
  },
  priceAndColorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns price and color circles
    alignItems: 'center',
    width: '100%',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
    textAlign: 'left', // Align price to the left
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align color circles to the right
  },
  colorCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
});
