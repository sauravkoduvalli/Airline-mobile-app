import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../routes/type';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
