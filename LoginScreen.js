// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Toggle hiển thị mật khẩu
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Hàm điều hướng tới màn hình khôi phục mật khẩu
  const handlePasswordRecovery = () => {
    navigation.navigate('PasswordRecoveryScreen');
  };

  // Hàm điều hướng tới màn hình chính khi đăng nhập thành công
  const handleSignIn = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subtitle}>Welcome Back You've Been Missed!</Text>

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
          <Image source={require('../mobile/img/Eye.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handlePasswordRecovery}>
        <Text style={styles.recovery}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../mobile/img/Group 108.png')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't Have An Account?{' '}
        <Text 
          style={styles.signUpText} 
          onPress={() => navigation.navigate('CreateAccountScreen')}
        >
          Sign Up For Free
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    paddingHorizontal: 8,
  },
  iconImage: {
    width: 22, // Đặt kích thước cho icon mắt
    height: 22,
  },
  recovery: {
    textAlign: 'right',
    color: '#4A90E2',
    fontSize: 14,
    marginBottom: 20,
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 14,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DDD',
    justifyContent: 'center',
    marginBottom: 32,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: '#333',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  signUpText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
});

export default LoginScreen;
