

import React, {useState} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {DetailsComponentProps} from '../navigation/types'
import ContactDetailsHeader from './ContactDetailsHeader';


const DetailsScreen = ({route, navigation} : DetailsComponentProps) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({title: `${route.params.Contact.givenName} ${route.params.Contact.familyName}`});
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ContactDetailsHeader contact={route.params.Contact}/>
      <View style={styles.body}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f363c',
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  body: {
    flex: 5
  }
});

export default DetailsScreen;