import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

const Stack = createStackNavigator();

const StackScreen: React.FC = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#bad555'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
        }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title: 'Overview'}}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
      /> 
    </Stack.Navigator>
  );
}

export default StackScreen;