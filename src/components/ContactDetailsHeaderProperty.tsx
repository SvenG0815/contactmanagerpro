import React from 'react'
import { StyleSheet, Text, View } from "react-native"

export interface Props{
    name: string;
    value: string;
}

const ContactDetailsHeaderProperty: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        fontSize: 36,
        padding: 10,
        alignContent: 'flex-start',
        textAlign: 'left'
    },
    name: {
        color: '#bada55',
        fontWeight: 'bold',
        fontSize: 20
    },
    value:{
        color:'white',
        fontWeight:'bold'
    }
})

export default ContactDetailsHeaderProperty;