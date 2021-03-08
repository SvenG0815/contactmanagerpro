//https://reactnavigation.org/docs/typescript/
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeScreenProps } from './screenProps/HomeScreenProps';
import { ProfileScreenProps } from './screenProps/ProfileScreenProps';
import {DetailsScreenProps} from './screenProps/DetailsScreenProps'

export type RootStackParamList = {
  Home: HomeScreenProps;
  Details: DetailsScreenProps;
  Profile: ProfileScreenProps;
};

export type DetailsComponentProps = {
  route: RouteProp<RootStackParamList, 'Details'>;
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
};

export type ProfileComponentProps = {
    route: RouteProp<RootStackParamList, 'Profile'>;
    navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
}

export type HomeComponentProps = {
  route: RouteProp<RootStackParamList, 'Home'>;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}