import { ParamListBase, StackRouterOptions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import {ProfileComponentProps} from '../navigation/types'


const ProfileScreen = ({route, navigation} : ProfileComponentProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  );
}

export default ProfileScreen;