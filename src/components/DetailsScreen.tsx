

import React, {useState} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {DetailsComponentProps} from '../navigation/types'


const DetailsScreen = ({route, navigation} : DetailsComponentProps) => {
  const [count, setCount] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({title: `${route.params.Contact.givenName} ${route.params.Contact.familyName}`});
  }, [navigation]);

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default DetailsScreen;