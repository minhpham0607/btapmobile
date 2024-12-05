import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Categories with images
  const categories = [
    { id: '1', name: 'Nike', image: require('../mobile/img/b1.png') },
    { id: '2', name: 'Puma', image: require('../mobile/img/Group 10.png') },
    { id: '3', name: 'Under Armour', image: require('../mobile/img/Group 14.png') },
    { id: '4', name: 'Adidas', image: require('../mobile/img/Group 18.png') },
    { id: '5', name: 'Converse', image: require('../mobile/img/Group 23.png') },
  ];

  const popularShoes = [
    { id: '1', name: 'Nike Jordan', price: '$493.00', image: require('../mobile/img/Frame 250.png') },
    { id: '2', name: 'Nike Air Max', price: '$897.99', image: require('../mobile/img/b12.png') },
    { id: '3', name: 'Nike Blazer', price: '$679.99', image: require('../mobile/img/a3.png') },
    { id: '4', name: 'Nike React', price: '$799.99', image: require('../mobile/img/a2.png') },
    { id: '5', name: 'Nike Zoom', price: '$599.99', image: require('../mobile/img/Frame 294.png') },
  ];

  const newArrivals = [
    { id: '6', name: 'Nike Air Jordan', price: '$849.69', image: require('../mobile/img/Frame 294.png') },
  ];

  const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    Alert.alert(`${product.name} has been added to your cart!`);
  };

  const navigateToFavorites = () => {
    navigation.navigate('FavoritesScreen', { favorites, setFavorites });
  };

  const navigateToCartScreen = () => {
    navigation.navigate('CartScreen', { cartItems: cart, setCartItems: setCart });
  };

  // Navigate to Category Page (A.js)
  const navigateToCategory = (category) => {
    navigation.navigate('Details1', { categoryId: category.id, categoryName: category.name });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.header}>
          <Text style={styles.locationLabel}>Store location</Text>
          <Text style={styles.locationText}>Vạn Phúc, Hà Đông</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Looking for shoes" />
        </View>

        {/* Scrollable category section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryButton, selectedCategory === category.id && styles.activeCategory]}
              onPress={() => navigateToCategory(category)} // Call the navigateToCategory function here
            >
              <Image source={category.image} style={styles.categoryImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Shoes Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular Shoes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllProductsScreen')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularShoes}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { product: item })}>
              <View style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productLabel}>BEST SELLER</Text>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite(item)}>
                  <Image
                    source={favorites[item.id] ? require('../mobile/img/Group.png') : require('../mobile/img/Group.png')}
                    style={[styles.favoriteIcon, favorites[item.id] ? styles.favorited : {}]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        {/* New Arrivals Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={newArrivals}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCardLarge}>
              <Image source={item.image} style={styles.productImageLarge1} />
              <Text style={styles.productLabel1}>BEST CHOICE</Text>
              <Text style={styles.productName1}>{item.name}</Text>
              <Text style={styles.productPrice1}>{item.price}</Text>
              <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite(item)}>
                <Image
                  source={favorites[item.id] ? require('../mobile/img/Group.png') : require('../mobile/img/Group.png')}
                  style={[styles.favoriteIcon, favorites[item.id] ? styles.favorited : {}]}
                />
              </TouchableOpacity>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>

      <View style={styles.bottomNavContainer}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../mobile/img/home.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={navigateToFavorites}>
          <Image source={require('../mobile/img/Group.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <View style={styles.middleButtonContainer}>
          <TouchableOpacity style={styles.middleButton} onPress={navigateToCartScreen}>
            <Image source={require('../mobile/img/Frame.png')} style={styles.middleButtonIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('NotificationsScreen')}>
          <Image source={require('../mobile/img/Vector.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('UserProfileScreen')}>
          <Image source={require('../mobile/img/user.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  header: { marginTop: 40, alignItems: 'center' },
  locationLabel: { fontSize: 12, color: '#666' },
  locationText: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  searchContainer: { marginVertical: 16 },
  searchInput: { backgroundColor: '#EFEFEF', borderRadius: 30, paddingHorizontal: 16, paddingVertical: 10, fontSize: 16 },
  categoryScroll: { paddingVertical: 10 },
  categoryButton: { padding: 10, borderRadius: 20, borderWidth: 1, borderColor: '#DDD', marginHorizontal: 10 },
  activeCategory: { backgroundColor: '#4A90E2', borderColor: '#4A90E2' },
  categoryImage: { width: 40, height: 20, resizeMode: 'contain' }, // Reduced size to 40x40
  sectionContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  seeAllText: { fontSize: 14, color: '#4A90E2' },
  productCard: { backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginRight: 16, width: 180, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4 },
  productImage: { width:900 , height: 100, resizeMode: 'contain' },
  productLabel: { fontSize: 12, color: '#4A90E2', fontWeight: 'bold', marginTop: 8 },
  productName: { fontSize: 14, fontWeight: 'bold', color: '#333', marginTop: 4 },
  productPrice: { fontSize: 14, color: '#666', marginTop: 4 },
  addButton: { backgroundColor: '#4A90E2', width: 40, height: 30, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, right: 0, borderBottomRightRadius: 15 },
  addButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  favoriteButton: { position: 'absolute', top: 10, right: 10 },
  favoriteIcon: { fontSize: 20, color: '#4A90E2' },
  favorited: { color: 'red' },
  bottomNavContainer: {
    flexDirection: 'row', // Sắp xếp các item theo chiều ngang
    justifyContent: 'space-between', // Căn đều các phần tử
    alignItems: 'center', // Căn chỉnh các phần tử theo chiều dọc
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff', // Màu nền sáng
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Đường viền nhẹ trên thanh nav
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 }, // Shadow cho thanh điều hướng
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Shadow cho Android
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#4A90E2', // Màu icon khi không nhấn
    transition: 'all 0.3s ease', // Hiệu ứng khi thay đổi màu
  },
  navIconActive: {
    tintColor: '#4A90E2', // Màu icon khi được chọn
  },
  middleButtonContainer: {
    position: 'relative',
    top: -30, // Đưa nút lên một chút
    alignItems: 'center',
  },
  middleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    zIndex: 1, // Đảm bảo nút nổi bật hơn các phần tử khác
  },
  middleButtonIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff', // Màu icon bên trong nút
  },

  productCardLarge:{width: 400, height: 400, resizeMode: 'contain' },
  productCardLarge: {
    width: 400,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row-reverse', // Đảo ngược thứ tự của ảnh và chữ
    overflow: 'hidden',
    elevation: 3,
    alignItems: 'center', // Căn giữa các phần tử trong card
    padding: 10, // Thêm padding để các phần tử không sát nhau
  },
  productImageLarge1: {
    width: 160, // Giảm kích thước ảnh một chút
    height: 150, // Điều chỉnh chiều cao ảnh sao cho đồng nhất
    resizeMode: 'contain',
    borderRadius: 10,
  },
  productTextContainer: {
    flex: 1, // Chiếm phần còn lại của card
    paddingLeft: 15, // Khoảng cách giữa ảnh và chữ
    justifyContent: 'flex-start', // Căn chỉnh chữ từ trên xuống dưới
    flexDirection: 'column', // Đảm bảo các chữ được sắp xếp theo chiều dọc
  },
  productLabel1: {
    fontSize: 16, // Chỉnh lại font-size cho label
    color: '#4A90E2',
    fontWeight: 'bold',
    marginTop: 5, // Thêm khoảng cách trên
    left:100
    ,top:-10
  },
  productName1: {
    fontSize: 18, // Tăng kích thước chữ tên sản phẩm
    fontWeight: 'bold',
    color: '#333',
    marginTop: 40, // Khoảng cách giữa các phần tử
    left:-30
  },
  productPrice1: {
    fontSize: 16, // Điều chỉnh kích thước chữ giá
    color: '#666',
    marginTop: 5,
    top:45 // Khoảng cách giữa các phần tử
    ,left:-130
  },
  });
  



export default HomeScreen;
