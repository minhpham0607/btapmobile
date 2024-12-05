import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Icon name="edit-2" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <Image
          source={require('../mobile/img/image.png')}  // Đường dẫn tới ảnh trong thư mục assets
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraButton}>
          <Icon name="camera" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.userName}>Trương Đan Huy</Text>
      </View>

      {/* Profile Details */}
      <View style={styles.detailsSection}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value="Trương Đan Huy" editable={false} />

        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} value="huydan@gmail.com" editable={false} />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value="********" editable={false} secureTextEntry />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7', // Sử dụng màu nền nhẹ
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
   
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#333', // Thêm bóng cho header
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#333",
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3, // Thêm viền cho ảnh đại diện
    borderColor: '#1E88E5', // Màu viền đồng nhất với header
  },
  cameraButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#1E88E5', // Màu nền nút camera đẹp
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  detailsSection: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E88E5',
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    paddingVertical: 8,
    paddingLeft: 10,
    backgroundColor: '#FFF',
    borderRadius: 5, // Thêm bo tròn cho input
  },
});

export default ProfileDetailScreen;
