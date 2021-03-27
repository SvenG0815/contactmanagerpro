import React from 'react'
import { View, Modal, Text, Pressable, StyleSheet, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { not } from 'react-native-reanimated';
import {Note} from './ContactNotes'

export interface Props{
    onCloseModal: (note?: Note) => void;
    isVisible: boolean;
}

const NoteModal: React.FC<Props> = (props) => {
    const [titleInput, setTitle] = React.useState<string>();
    const [bodyInput, setBody] = React.useState<string>();


    const closeModal= function() {
        let note : Note|undefined = undefined;
        if(titleInput != null && bodyInput != null){
            note={
                title: titleInput,
                body: bodyInput,
                createdOn: new Date()
            }
            setTitle(undefined);
            setBody(undefined);
            props.onCloseModal(note);
        }
        if(note == undefined)
            alert("Please enter data");
    }

    return (
    <View>
        <Modal
            animationType="slide"
            transparent={true}
            style={styles.centeredView}
            visible={props.isVisible}
            onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Enter Note information</Text>
                        <TextInput
                            placeholder="Title"
                            onChangeText={(text) => setTitle(text)}
                        />
                        <TextInput 
                            placeholder="Body"
                            onChangeText={text => setBody(text)}
                        />
                        <Pressable 
                            style={[styles.button, styles.buttonClose]}
                            onPress={closeModal}
                        >
                            <Text>Enter</Text>
                        </Pressable>
                        <Pressable 
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.onCloseModal()}
                        >
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                </View>        
        </Modal>
    </View>
    );
};

const styles = StyleSheet.create({
    centeredView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
})

export default NoteModal;
