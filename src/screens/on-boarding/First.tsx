import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useAppNavigation } from '../../utils/useAppNavigation';

const OnBoardingScreen = () => {
  const navigation = useAppNavigation();

  const onNextPress= () => {
    navigation.navigate('LoginScreen')
  }
  return (
    <View style={styles.container}>
      <Text>First</Text>
      <TouchableOpacity onPress={onNextPress}>
        <Text>Goto Next Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
