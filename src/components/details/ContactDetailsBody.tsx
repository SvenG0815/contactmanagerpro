import React, {useState} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {DetailsComponentProps} from '../../navigation/types'
import Contacts from 'react-native-contacts'
import ContactDetailsHeaderProperty from './header/ContactDetailsHeaderProperty';
import ContactRenderItem from '../home/ContactListRenderItem';
import ContactNotes from './notes/ContactNotes'
import {ContactNotesComponentProps} from '../../navigation/types';
import {ContactPhotosComponentProps} from '../../navigation/types';
import ContactPhotos from './photos/ContactPhotos';


export interface Props{
    contactId: string;
}

const Tab = createMaterialTopTabNavigator();

const ContactDetailsBody: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name="Pictures" component={ContactPhotos} initialParams={{contactId: props.contactId}}/>
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