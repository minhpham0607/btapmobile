import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CartScreen = ({ route, navigation }) => {
  const { cartItems, setCartItems } = route.params;

  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    Alert.alert("Item removed from cart!");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
  const shipping = 40.90;
  const totalCost = subtotal + shipping;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>My Cart</Text>
      
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productSize}> L</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')} style={styles.quantityButton1}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteButton}>
      <Image
        source={require('../mobile/img/t1.png')} // Link ảnh trong dự án
        style={styles.deleteIcon}
      />
    </TouchableOpacity>
          </View>
        )}
      />
      
      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryText}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Shipping</Text>
          <Text style={styles.summaryText}>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.totalText}>Total Cost</Text>
          <Text style={styles.totalText}>${totalCost.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() =>
            navigation.navigate('CheckoutScreen', {
              subtotal,
              shipping,
              totalCost
            })
          }
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: '#F8F8F8' },
  backButton: { position: 'absolute', top: 50, left: 10, zIndex: 1 }, // Increased top margin for back button
  backButtonText: { fontSize: 24, color: '#333' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 50, marginBottom: 20, textAlign: 'center' }, // Increased top margin for title
  cartItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 10, borderRadius: 8, marginVertical: 8 },
  productImage: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  itemDetails: { flex: 1 },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productSize: { fontSize: 12, color: '#666', marginBottom: 4 },
  productPrice: { fontSize: 14, color: '#666' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  quantityButton1: {
    backgroundColor: '#5B9EE1',
    padding: 10, // Tăng padding để nút to hơn
    borderRadius: 20, // Để tạo đường cong đẹp hơn cho nút
    width: 35, // Cung cấp độ rộng cố định
    height: 35, // Cung cấp chiều cao cố định
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    left:5
  },
  quantityText: { fontSize: 16, fontWeight: 'bold',left:0,top:-4 },
  quantity: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 10 },
  deleteButton: { marginLeft: 10 },
  deleteText: { fontSize: 18, color: '#FF5A5A' },
  summaryContainer: { padding: 20, backgroundColor: '#FFF', borderRadius: 8, marginTop: 20 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  summaryText: { fontSize: 16, color: '#666' },
  totalText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  checkoutButton: { 
    backgroundColor: '#4A90E2', 
    padding: 15, 
    alignItems: 'center', 
    marginTop: 20, 
    borderRadius: 30 
  },
  checkoutButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});

export default CartScreen;
