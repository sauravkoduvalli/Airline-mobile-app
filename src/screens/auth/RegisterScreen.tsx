import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const RegisterScreen = () => {
  const [username, setUsername] = useState('Saurav K');
  const [password, setPassword] = useState('NewPassword@123');
  const navigation = useNavigation();

  const handleLogin = () => {
    // console.log('Registering with:', {username, password});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <View style={{width: '100%'}}>
        <Button color="grey" title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default RegisterScreen;
