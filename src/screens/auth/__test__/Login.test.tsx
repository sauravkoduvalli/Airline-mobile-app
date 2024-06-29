import {render} from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/type';
import {RouteProp} from '@react-navigation/native';

const navigation: NativeStackNavigationProp<RootStackParamList, 'LoginScreen'> =
  {
    navigate: jest.fn(),
    goBack: jest.fn(),
    dispatch: jest.fn(),
    reset: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: jest.fn(),
    getId: jest.fn(),
    getState: jest.fn(),
    // Add any other navigation methods your component uses
  };

// Mocked route prop
const route: RouteProp<RootStackParamList, 'LoginScreen'> = {
  key: 'mocked-key',
  name: 'LoginScreen',
  // You can add other properties if your component depends on them
};

describe('<LoginScreen/> component', () => {
  test('<LoginScreen/> should render correctly', () => {
    render(<LoginScreen navigation={navigation} route={route} />);
  });
});
