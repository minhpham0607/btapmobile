import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Start Journey With Nike',
    text: 'Smart, Gorgeous & Fashionable Collection',
    image: require('../mobile/img/a1.png'), // Update with actual image path
  },
  {
    key: '2',
    title: 'Follow Latest Style Shoes',
    text: 'There Are Many Beautiful And Attractive Shoes For Your Room',
    image: require('../mobile/img/a2.png'), // Update with actual image path
  },
  {
    key: '3',
    title: 'Summer Shoes Nike 2022',
    text: 'Amet Minim Lit Nodeseru Saku Nandu sit Alique Dolor',
    image: require('../mobile/img/a3.png'), // Update with actual image path
  },
];

const IntroSlider = ({ navigation }) => {
  const onDone = () => {
    navigation.replace('LoginScreen');
  };

  const renderNextButton = () => (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );

  const renderDoneButton = () => (
    <TouchableOpacity style={styles.buttonContainer} onPress={onDone}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 50, // Adjusted space for buttons
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 40, // Spacing between text and button
  },
  buttonContainer: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 20, // Space between button and slider content
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dotStyle: {
    backgroundColor: '#C4C4C4',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: '#4A90E2',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default IntroSlider;
