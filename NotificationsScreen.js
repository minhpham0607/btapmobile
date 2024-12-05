// NotificationsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const notifications = [
  { id: '1', image: require('../mobile/img/Group 155.png'), title: 'We Have New Products With Offers', price: '$364.95', discountedPrice: '$260.00', time: '6 min ago', status: 'unread', day: 'Today' },
  { id: '2', image: require('../mobile/img/pngaaa.png'), title: 'We Have New Products With Offers', price: '$364.95', discountedPrice: '$260.00', time: '26 min ago', status: 'unread', day: 'Today' },
  { id: '3', image: require('../mobile/img/Group 157.png'), title: 'We Have New Products With Offers', price: '$364.95', discountedPrice: '$260.00', time: '4 days ago', status: 'read', day: 'Yesterday' },
  { id: '4', image: require('../mobile/img/y5.png'), title: 'We Have New Products With Offers', price: '$364.95', discountedPrice: '$260.00', time: '4 days ago', status: 'read', day: 'Yesterday' },
];

const NotificationsScreen = ({ navigation }) => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image source={item.image} style={styles.notificationImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} <Text style={styles.discountedPrice}>{item.discountedPrice}</Text></Text>
      </View>
      <View style={styles.metaContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <View style={[styles.statusDot, item.status === 'unread' && styles.unreadDot]} />
      </View>
    </View>
  );

  const renderSectionHeader = (day) => (
    <Text style={styles.sectionHeader}>{day}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {['Today', 'Yesterday'].map((day) => (
        <View key={day}>
          {renderSectionHeader(day)}
          <FlatList
            data={notifications.filter((notif) => notif.day === day)}
            keyExtractor={(item) => item.id}
            renderItem={renderNotification}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', paddingHorizontal: 16 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: { fontSize: 18, color: '#333' ,top:30},
  headerText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', flex: 1,top:30 },
  clearText: { fontSize: 14, color: '#4A90E2', paddingRight: 10,top:30 },
  sectionHeader: { fontSize: 16, fontWeight: 'bold', color: '#333', marginVertical: 10 },
  notificationItem: { flexDirection: 'row', paddingVertical: 10, alignItems: 'center' },
  notificationImage: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
  textContainer: { flex: 1 },
  title: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  price: { fontSize: 14, color: '#333' },
  discountedPrice: { fontSize: 14, color: '#4A90E2', fontWeight: 'bold' },
  metaContainer: { alignItems: 'flex-end' },
  time: { fontSize: 12, color: '#666' },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E0E0E0', marginTop: 5 },
  unreadDot: { backgroundColor: '#4A90E2' },
});

export default NotificationsScreen;
