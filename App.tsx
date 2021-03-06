/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './src/navigation/StackScreen';


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>      
        <StatusBar barStyle="dark-content" />        
        <StackScreen/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
