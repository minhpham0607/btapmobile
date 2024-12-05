import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SettingsScreen = ({ navigation }) => {
  const [faceIDEnabled, setFaceIDEnabled] = useState(false);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account & Settings</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="bell" size={20} color="#555" style={styles.menuIcon} />
          <Text style={styles.menuText}>Notification Setting</Text>
          <Icon name="chevron-right" size={20} color="#CCC" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="map-pin" size={20} color="#555" style={styles.menuIcon} />
          <Text style={styles.menuText}>Shipping Address</Text>
          <Icon name="chevron-right" size={20} color="#CCC" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="credit-card" size={20} color="#555" style={styles.menuIcon} />
          <Text style={styles.menuText}>Payment Info</Text>
          <Icon name="chevron-right" size={20} color="#CCC" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="trash" size={20} color="#555" style={styles.menuIcon} />
          <Text style={styles.menuText}>Delete Account</Text>
          <Icon name="chevron-right" size={20} color="#CCC" />
        </TouchableOpacity>
      </View>

      {/* App Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Enable Face ID For Log In</Text>
          <Switch
            value={faceIDEnabled}
            onValueChange={(value) => setFaceIDEnabled(value)}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Enable Push Notifications</Text>
          <Switch
            value={pushNotificationsEnabled}
            onValueChange={(value) => setPushNotificationsEnabled(value)}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Enable Location Services</Text>
          <Switch
            value={locationServicesEnabled}
            onValueChange={(value) => setLocationServicesEnabled(value)}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={(value) => setDarkModeEnabled(value)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default SettingsScreen;
