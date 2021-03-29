import React from 'react'
import { View, Modal, Text, Pressable, StyleSheet, Alert, Button } from 'react-native'
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
            console.log("Please enter data");
            //alert("Please enter data");
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
                        <View style={styles.inputView}>
                            <Text>Enter Note information</Text>
                            <TextInput
                                    placeholder="Title"
                                    onChangeText={(text) => setTitle(text)}
                                    style={styles.title}
                            />
                            <TextInput 
                                placeholder="Body"
                                onChangeText={text => setBody(text)}
                                multiline={true}
                                style={styles.body}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <View style={styles.button}>
                                <Button 
                                    onPress={() => props.onCloseModal()}
                                    title="Close"
                                />
                            </View>
                            <View style={styles.button}>
                                <Button 
                                    onPress={closeModal}
                                    title="Enter"
                                />
                            </View>
                        </View>
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
        marginTop: 60,
    },
    modalView: {
        flex: 0.8,
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: 'flex-start',
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
        flex:1,
        elevation: 2
      },
      inputView:{
          flex:6,
      },
      title:{
          flex:1,
          fontWeight: 'bold',
      },
      body:{
          flex:6,
      },
      buttonView:{
          flex:1,
          flexDirection: 'row',
          alignContent: 'flex-end',
          justifyContent: 'flex-end',
          padding: 10,
      }
})

export default NoteModal;
