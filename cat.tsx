import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

export interface Props{
  name: string;
}

const getName = function(firstname: string, lastname: string) {
    return `${firstname} ${lastname}`;   
}

const Cat: React.FC<Props> = (prop) => {
  const [isHungry, setishungry] = useState(true);
  return (
    <View>
      <Text>I am {prop.name}, and I am {isHungry ? "hungry" : "not hungry"}</Text>
      <Button 
        title={isHungry ? "feed me": "thank you!"}
        disabled={!isHungry}
        onPress={() => {setishungry(false)}}>
      </Button>
    </View>
  );
}

export default Cat;