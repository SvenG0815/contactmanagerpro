import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Note} from './ContactNotes';

export interface Props{
    note: Note;
    onPressFunction: (index: number) => void;
    index: number;
}

const NoteRenderItem: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{props.note.title}</Text>
                <Button title="remove" onPress={() => props.onPressFunction(props.index)}/> 
            </View>
            <Text style={styles.body}>{props.note.body}</Text>
            <Text style={styles.footer}>{props.note.createdOn.toString()}</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 10,
    },
    footer: {
        fontSize: 8,
    }

})

export default NoteRenderItem;