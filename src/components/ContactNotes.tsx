import React from 'react';
import { Button, StyleSheet, Text, View, Modal, Pressable, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ContactNotesComponentProps} from '../navigation/types';
import { FlatList } from 'react-native-gesture-handler';
import NoteRenderItem from './NoteRenderItem'
import NoteModal from './NoteModal';
import { not } from 'react-native-reanimated';


export interface Note{
    createdOn: Date;
    title: string;
    body: string;
}

const ContactNotes = ({route, navigation} : ContactNotesComponentProps) => {
    const [notes, setNotes] = React.useState<Note[]>(new Array<Note>());
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    React.useEffect(() => {
        if(isLoaded == false){
            loadNotes();
        }
    }, [isLoaded]);

    const storeNotes = async function(newNotes: Note[]){
        try{
            const jsonValue = JSON.stringify(newNotes);
            await AsyncStorage.setItem(route.params.contactId, jsonValue);
        }catch(error){
            console.log(error);
        }
    }
    
    const loadNotes = async function(){
        try{
            const jsonValue = await AsyncStorage.getItem(route.params.contactId);
            const result: Note[] = jsonValue != null ? JSON.parse(jsonValue) : null;
            if(result != null){
                setNotes(result);
                setIsLoaded(true);
            }
        } catch(error){
            console.log(error);
        }
    }

    const addNote = async function(note: Note){
        let newNotes = notes;
        newNotes.push(note);
        await storeNotes(newNotes);
        await loadNotes();
    }

    const onCloseModal = async function(note?: Note) {
        setIsModalVisible(!isModalVisible);
        if(note != undefined)
            await addNote(note);
    }

    const deleteNote = async function(index: number){
        let newNotes = notes;
        newNotes.splice(index, 1);
        await storeNotes(newNotes);
        await loadNotes();
    }

    const renderNoteListItem = function({item}: {item: Note}){
        return <NoteRenderItem note={item} index={notes.indexOf(item)} onPressFunction={deleteNote}/>
    }


    return (
        <View style={styles.container}>
            <NoteModal isVisible={isModalVisible} onCloseModal={onCloseModal}/>
            <Button onPress={() => setIsModalVisible(!isModalVisible)} title="Add Note"/>
            <FlatList 
                style={styles.noteList}
                renderItem={renderNoteListItem}
                data={notes}
                keyExtractor={(item) => item.index}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noteList:{
        flex: 1,
    },
    
})

export default ContactNotes;