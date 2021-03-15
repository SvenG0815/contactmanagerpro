import React from 'react'
import {PhotoIdentifier} from '@react-native-community/cameraroll'
import { Text, View, StyleSheet, Image } from 'react-native'

export interface Props{
    photo: PhotoIdentifier
}

const PhotoListRenderItem: React.FC<Props> = function(props){
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{uri: props.photo.node.image.uri}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
    },
    logo: {
      margin: 5,
      width: 120,
      height: 120,
    },
  });

export default PhotoListRenderItem;