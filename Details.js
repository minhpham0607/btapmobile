import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(40);

  const sizes = [38, 39, 40, 41, 42, 43];
  const galleryImages = [
    require('../mobile/img/Group 138.png'),
    require('../mobile/img/Group 139.png'),
    require('../mobile/img/Group 140.png'),
  ];

  const renderSizeOption = (size) => (
    <TouchableOpacity
      key={size}
      style={[
        styles.sizeOption,
        selectedSize === size && styles.selectedSizeOption,
      ]}
      onPress={() => setSelectedSize(size)}
    >
      <Text style={[styles.sizeText, selectedSize === size && styles.selectedSizeText]}>{size}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Men's Shoes</Text>
        <TouchableOpacity>
          <Ionicons name="cart" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../mobile/img/Imag.png')}
          style={styles.productImage}
        />
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.bestSeller}>BEST SELLER</Text>
        <Text style={styles.productName}>Nike Air Jordan</Text>
        <Text style={styles.productPrice}>$967.800</Text>
        <Text style={styles.description}>
          Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike....
        </Text>

        {/* Gallery */}
        <Text style={styles.galleryTitle}>Gallery</Text>
        <FlatList
          data={galleryImages}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.galleryImage} />
          )}
        />

        {/* Size Options */}
        <Text style={styles.sizeTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => renderSizeOption(size))}
        </View>

        {/* Price and Add to Cart */}
        <View style={styles.footer}>
          <Text style={styles.finalPrice}>Price: $849.69</Text>
          <TouchableOpacity 
  style={styles.addToCartButton} 
  onPress={() => navigation.navigate('CartScreen')}
>
  <Text style={styles.addToCartText}>Add To Cart</Text>
</TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    top:25
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width:400,
    height: 200,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bestSeller: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  galleryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  galleryImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  sizeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  selectedSizeOption: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  sizeText: {
    fontSize: 14,
    color: '#555',
  },
  selectedSizeText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  finalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
