

import React, {useState} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {DetailsComponentProps} from '../navigation/types'
import Contacts from 'react-native-contacts'
import ContactDetailsHeaderProperty from './ContactDetailsHeaderProperty';
import ContactRenderItem from './ContactListRenderItem';

export interface Props{
    contact: Contacts.Contact;
}

const renderPhoneNumbers = function(numbers: Contacts.PhoneNumber[]){
    let result = new Array<JSX.Element>();
    numbers.map(number => {
        const element = <ContactDetailsHeaderProperty name={number.label} value={number.number}/>
        result.push(element);
    })
    return result;
}

const renderEmailAddresses = function(numbers: Contacts.EmailAddress[]){
    let result = new Array<JSX.Element>();
    numbers.map(number => {
        const element = <ContactDetailsHeaderProperty name={number.label} value={number.email}/>
        result.push(element);
    })
    return result;
}

const ContactDetailsHeader: React.FC<Props> = (props) => {

  return (
    <View style={styles.container}>
        <View style={styles.headerSection}>
            <ContactDetailsHeaderProperty name="Name" value={props.contact.givenName + " " + props.contact.familyName} />
            <ContactDetailsHeaderProperty name="Company" value={props.contact.company} />
        </View>
        <View style={styles.headerSection}>
            {props.contact.phoneNumbers.length != 0 ? renderPhoneNumbers(props.contact.phoneNumbers) : null }
        </View>
        <View style={styles.headerSection}>
            {props.contact.emailAddresses.length != 0 ? renderEmailAddresses(props.contact.emailAddresses) : null }
        </View>
        
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'stretch',
    //alignContent: 'stretch', --> über die ganze verfügbare Fläche
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    borderBottomColor: '#bad555',
    padding: 10,
  },
  headerSection:{
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      //alignContent: 'stretch',
      justifyContent: 'flex-start'
  }
});

export default ContactDetailsHeader;