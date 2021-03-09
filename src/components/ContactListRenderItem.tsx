import React, {useState} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {DetailsComponentProps} from '../navigation/types'
import Contacts from 'react-native-contacts'

export interface Props{
    contact: Contacts.Contact;
}

const ContactRenderItem : React.FC<Props>= (props) => {
    return (
        <View style={styles.renderItem}>
        <Text style={styles.renderItemName}>
          {props.contact.givenName} {props.contact.familyName}
        </Text>
        <Text style={styles.renderItemNumber}>{props.contact.phoneNumbers.length != 0 ? props.contact.phoneNumbers[0].number : "Missing Phone Number"}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    renderItem:{
      minHeight: 70,
      padding: 5
    },
    renderItemName:{
      color: '#bada55',
      fontWeight: 'bold',
      fontSize: 26
    },
    renderItemNumber:{
      color:'white',
      fontWeight:'bold'
    }
  });

export default ContactRenderItem;