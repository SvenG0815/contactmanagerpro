import React, {useState} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {DetailsComponentProps} from '../navigation/types'
import Contacts from 'react-native-contacts'
import ContactDetailsHeaderProperty from './ContactDetailsHeaderProperty';
import ContactRenderItem from './ContactListRenderItem';
import ContactPictures from './ContactPictures';
import ContactNotes from './ContactNotes'
import {ContactNotesComponentProps} from '../navigation/types';


export interface Props{
    contactId: string;
}

const Tab = createMaterialTopTabNavigator();

const ContactDetailsBody: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name="Pictures" component={ContactPictures}/>
                <Tab.Screen name="Notes" component={ContactNotes} initialParams={{contactId: props.contactId}}/>
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    }
});

export default ContactDetailsBody;