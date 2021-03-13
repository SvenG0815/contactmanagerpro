import React from 'react';
import { Text, View } from 'react-native';


export interface Props{
    contactId: string;
}

const ContactNotes : React.FC<Props> = (props) => {
    return (
        <View>
            <Text>Hello From Notes</Text>
        </View>
    );
}

export default ContactNotes;