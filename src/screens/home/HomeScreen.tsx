import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Home Screen</Text>
      <Button title="Press me" color="#f194ff" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: 'black',
  },
});

export default HomeScreen;

