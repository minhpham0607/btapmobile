import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { subtotal, shipping, totalCost } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const handlePayment = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Checkout</Text>

      {/* Contact Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoRow}>
          <Image source={require('../mobile/img/a121.png')} style={styles.icon} />
          <Text style={styles.infoText}>huydan@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Image source={require('../mobile/img/Group 162.png')} style={styles.icon} />
          <Text style={styles.infoText}>+84-33-847-2325</Text>
        </View>
      </View>

      {/* Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.addressText}>btt11-06, Himlam, Vạn Phúc</Text>
        <Image source={require('../mobile/img/Rectangle 1066.png')} style={styles.mapImage} />
      </View>

      {/* Payment Method Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.infoRow}>
          <Image source={require('../mobile/img/Group 82.png')} style={styles.icon} />
          <Text style={styles.infoText}>Paypal Card</Text>
        </View>
        <Text style={styles.cardNumber}>**** 4629</Text>
      </View>

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
      </View>

      {/* Payment Button */}
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Payment</Text>
      </TouchableOpacity>

      {/* Payment Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../mobile/img/Frame 273.png')} style={styles.successIcon} />
            <Text style={styles.successText}>Your Payment Is</Text>
            <Text style={styles.successText}> Successful</Text>
            <TouchableOpacity
              style={styles.backButtonModal}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('HomeScreen'); // Navigate to home or shopping screen
              }}
            >
              <Text style={styles.backButtonTextModal}>Back To Shopping</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F8F8' },
  backButton: { position: 'absolute', top: 40, left: 10 },
  backButtonText: { fontSize: 24, color: '#333' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  section: { backgroundColor: '#FFFFFF', padding: 15, borderRadius: 8, marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  icon: { width: 24, height: 24, marginRight: 10 },
  infoText: { fontSize: 14, color: '#333' },
  addressText: { fontSize: 14, color: '#666', marginBottom: 10 },
  mapImage: { width: '100%', height: 100, borderRadius: 8 },
  cardNumber: { fontSize: 14, color: '#666', marginTop: 5 },
  summaryContainer: { padding: 15, backgroundColor: '#FFF', borderRadius: 8 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  summaryText: { fontSize: 16, color: '#666' },
  totalText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  paymentButton: { backgroundColor: '#4A90E2', padding: 15, alignItems: 'center', borderRadius: 30, marginTop: 20 },
  paymentButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { width: '70%', minHeight: 300, backgroundColor: '#FFF', padding: 25, borderRadius: 15, alignItems: 'center' }, // Increased height
  successIcon: { width: 200, height: 200, marginBottom: 30 },
  successText: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  backButtonModal: { backgroundColor: '#4A90E2', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 30 },
  backButtonTextModal: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default CheckoutScreen;
