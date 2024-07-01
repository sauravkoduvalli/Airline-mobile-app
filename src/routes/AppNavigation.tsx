import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {RootStackParamList} from './type';
import OnBoardingScreen from '../screens/on-boarding/First';
import {useEffect} from 'react';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

const isLoggedIn = true; // from redux in future
const initialLaunch = true; // from redux in future

export const AppNavigation = () => {
  useEffect(() => {
    AppNavigation;
  }, [isLoggedIn]);

  return (
    <RootStack.Navigator
      initialRouteName={initialLaunch ? 'OnBoardingScreen' : 'LoginScreen'}
      screenOptions={screenOptions}>
      {!isLoggedIn ? (
        <>
          {initialLaunch && (
            <RootStack.Screen
              name={'OnBoardingScreen'}
              component={OnBoardingScreen}
            />
          )}
          <RootStack.Screen name={'LoginScreen'} component={LoginScreen} />
          <RootStack.Screen
            name={'RegisterScreen'}
            component={RegisterScreen}
          />
        </>
      ) : (
        <>
          <RootStack.Screen name={'HomeScreen'} component={HomeScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
};
