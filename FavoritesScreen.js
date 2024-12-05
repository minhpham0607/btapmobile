import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const products = [
  {
    id: '1',
    name: 'Nike Jordan',
    price: '$58.7',
    image: require('../mobile/img/Group 114.png'),
    colors: ['#FFD700', '#ADD8E6', '#000000'], // Vàng, xanh nhạt, đen
  },
  {
    id: '2',
    name: 'Nike Air Max',
    price: '$37.8',
    image: require('../mobile/img/Group 118.png'),
    colors: ['#ADD8E6', '#808080'], // Xanh nhạt, xám
  },
  {
    id: '3',
    name: 'Nike Club Max',
    price: '$47.7',
    image: require('../mobile/img/e2.png'),
    colors: ['#0000FF', '#FFD700'], // Xanh dương, vàng
  },
  {
    id: '4',
    name: 'Nike Air Max',
    price: '$57.6',
    image: require('../mobile/img/e3.png'),
    colors: ['#00FF00', '#808080', '#800080'], // Xanh lá, xám, tím
  },
];

export default function FavouriteScreen() {
  const navigation = useNavigation(); // Sử dụng useNavigation hook để truy cập navigation

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      {/* Hình ảnh sản phẩm */}
      <Image source={item.image} style={styles.productImage} />

      {/* Nút yêu thích */}
      <TouchableOpacity style={styles.favoriteIcon}>
        <Ionicons name="heart-outline" size={18} color="#FF0000" />
      </TouchableOpacity>

      {/* Thông tin sản phẩm */}
      <Text style={styles.bestSeller}>BEST SELLER</Text>
      <Text style={styles.productName}>{item.name}</Text>
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
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Nút quay lại */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" top="15" />
        </TouchableOpacity>
        <Text style={styles.title}>Favourite</Text>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" top="15" />
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
    top:15
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
    elevation: 2,
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
