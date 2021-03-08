import React, {useEffect, useState} from 'react';
import { Text, View, Button, Alert, StyleSheet, TextInput, FlatList, ActivityIndicator, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/routers';
import Contacts from 'react-native-contacts'
import { HomeComponentProps } from '../navigation/types';


const HomeScreen: React.FC<HomeComponentProps> = (props) => {

  const [contacts, setContacts] = useState<Contacts.Contact[]>(new Array<Contacts.Contact>());
  const [displayedContacts, setDisplayedContacts] = useState<Contacts.Contact[]>(new Array<Contacts.Contact>());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadContacts = function() {
    if(contacts.length == 0)
      Contacts.getAll().then(onContactsLoaded);
  }

  const onContactsLoaded = function(result : Contacts.Contact[]){
    setContacts(result);
    setDisplayedContacts(result);
    setIsLoading(false);
    console.log("loaded " + contacts.length + " contacts");
    console.log(JSON.stringify(result));
  }

  const renderContact= function({item}: {item: Contacts.Contact}){
    return (
      <View style={styles.renderItem}>
        <Text style={styles.renderItemName}>
          {item.givenName} {item.familyName}
        </Text>
        <Text style={styles.renderItemNumber}>{item.phoneNumbers.length != 0 ? item.phoneNumbers[0].number : "Missing Phone Number"}</Text>
      </View>)
  }

  const filterContacts= function(contact: Contacts.Contact, searchTerm: string): boolean{
    let contactLowerCase = (contact.givenName + ' ' + contact.familyName).toLocaleLowerCase();
    let searchTermToLowerCase = searchTerm.toLowerCase();
    return contactLowerCase.indexOf(searchTermToLowerCase) > -1
  }

  const onSearchInputChanged = function(value: string){
    const filteredContacts = contacts.filter(contact => {
      return filterContacts(contact, value);
    });
    setDisplayedContacts(filteredContacts);
  }

  useEffect(() => {
    loadContacts();
  }, [isLoading])

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Contacts"
        placeholderTextColor='white'
        style={styles.contactSearchInput}
        onChangeText={onSearchInputChanged}/>
      <View style={styles.contactResults}>
        {isLoading?
          <View style={styles.isLoadingView}>
            <ActivityIndicator size='large' color='#bad555'/>
          </View>
        : null}
        <FlatList
          data={displayedContacts}
          renderItem={renderContact}
          ListEmptyComponent={() => {
            return <Text style={styles.listEmptyComponent}>No Contacts Found</Text>
          }}
        />
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contactSearchInput:{
    backgroundColor: '#2f363c',
    height:50,
    color: 'white',
    fontSize: 30,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: 'white'
  },
  contactResults:{
    flex:1,
    backgroundColor: '#2f363c'
  },
  isLoadingView:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  listEmptyComponent:{
    color: '#bad555'
  },
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

export default HomeScreen;