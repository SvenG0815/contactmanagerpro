import React from 'react'
import { ContactNotesComponentProps } from '../navigation/types';
import { Alert, FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import CameraRoll, { PhotoIdentifier } from '@react-native-community/cameraroll'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhotoListRenderItem from './PhotoListRenderItem';



const ContactPhotos = ({route, navigation}: ContactNotesComponentProps) => {
    const [photos, setPhotos] = React.useState<PhotoIdentifier[]>(new Array<PhotoIdentifier>());
    const [arePhotosLoaded, setArePhotosLoaded] = React.useState<boolean>(false);

    const loadPhotos = function(){
        if(arePhotosLoaded == false){
            const params : CameraRoll.GetPhotosParams = {
                  first: 10,
                  assetType: 'Photos',
            };
            CameraRoll.getPhotos(params)
                .then((r) => {
                    console.log(r.edges);
                    setArePhotosLoaded(true);
                    setPhotos(r.edges);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    const renderPhoto = function(photo: ListRenderItemInfo<PhotoIdentifier>){
        return <PhotoListRenderItem photo={photo.item}/>
    }

    React.useEffect(loadPhotos, [arePhotosLoaded])

    return (
    <View style={styles.container}>
        <FlatList 
            data={photos}
            renderItem={renderPhoto}
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapperStyle}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    columnWrapperStyle:{
        flex:1,
        justifyContent:'flex-start',
    }
})

export default ContactPhotos;