import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/type";

export type LoginScreenNavigationProp  = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
export type HomeScreenNavigationProp  = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;