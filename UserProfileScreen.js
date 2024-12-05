import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Sử dụng Feather icon

const UserProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../mobile/img/image.png')}  // Đường dẫn tới ảnh trong thư mục assets
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Hey, 👋</Text>
        <Text style={styles.userName}>Trương Đan Huy</Text>
      </View>

      {/* Menu Section */}
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('ProfileDetailScreen')}
        >
          <Icon name="user" size={20} color="#FFF" style={styles.menuIcon} />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home" size={20} color="#FFF" style={styles.menuIcon} />
          <Text style={styles.menuText}>Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CartScreen')}>
          <Icon name="shopping-bag" size={20} color="#FFF" style={styles.menuIcon} />
          <Text style={styles.menuText}>My Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FavoritesScreen')}>
          <Icon name="heart" size={20} color="#FFF" style={styles.menuIcon} />
          <Text style={styles.menuText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="truck" size={20} color="#FFF" style={styles.menuIcon} />
          <Text style={styles.menuText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('NotificationsScreen')}>
          <Icon name="bell" size={20} color="#FFF" style={styles.menuIcon} />
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="settings" size={20} color="#FFF" style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Out Section */}
      <View style={styles.signOutContainer}>
        <TouchableOpacity style={styles.signOutButton}>
          <Icon name="log-out" size={20} color="#FFF" style={styles.menuIcon} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E1E', padding: 20 },
  header: { alignItems: 'center', marginBottom: 30 },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10, top: 10 },
  greeting: { color: '#FFF', fontSize: 18, marginBottom: 5, top: 10 },
  userName: { color: '#FFF', fontSize: 22, fontWeight: 'bold', top: 10 },
  menu: { marginTop: 20 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    // Xóa bỏ dòng gạch dưới
    // borderBottomWidth: 1, 
    // borderBottomColor: '#333',
  },
  menuIcon: { marginRight: 15 ,left:0},
  menuText: { color: '#FFF', fontSize: 18 },
  signOutContainer: { marginTop: 30, alignItems: 'left' },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,  // Giữ đường viền trên
    borderColor: 'rgba(255, 255, 255, 0.3)',  // Màu đường viền mờ
    borderRadius: 8,
  },
  signOutText: { color: '#FFF', fontSize: 18, marginLeft: -1}, // Giảm marginLeft để chữ sát lề
});

export default UserProfileScreen;
