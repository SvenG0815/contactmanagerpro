import React from 'react'
import { Text, View } from 'react-native'

export interface Props{
    contactId: string;
}

const ContactPictures: React.FC<Props> = (props) =>{
    return (
        <View>
            <Text>Hello From Pictures!</Text>
        </View>
    );
}

export default ContactPictures;