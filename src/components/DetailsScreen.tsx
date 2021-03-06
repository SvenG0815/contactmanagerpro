

import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import {DetailsComponentProps} from '../navigation/types'


const DetailsScreen = ({route, navigation} : DetailsComponentProps) => {
  const [count, setCount] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button 
          onPress={() => setCount(c => c+1)}
          title="Increment"
        />
      }
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Hello {route.params?.Name != null ? route.params?.Name : "Anonymous"}</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {Name: "Sven"})}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailsScreen;