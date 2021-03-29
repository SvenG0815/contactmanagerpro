import React from 'react'
import { ContactNotesComponentProps } from '../../../navigation/types';
import { Alert, Button, FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import CameraRoll, { PhotoIdentifier, SaveToCameraRollOptions } from '@react-native-community/cameraroll'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhotoListRenderItem from './PhotoListRenderItem';
import {Callback, CameraOptions, ImagePickerResponse, launchCamera, launchImageLibrary} from 'react-native-image-picker';



const ContactPhotos = ({route, navigation}: ContactNotesComponentProps) => {
    const [photos, setPhotos] = React.useState<PhotoIdentifier[]>(new Array<PhotoIdentifier>());
    const [arePhotosLoaded, setArePhotosLoaded] = React.useState<boolean>(false);

    const loadPhotos = function(){
        if(arePhotosLoaded == false){
            const params : CameraRoll.GetPhotosParams = {
                  first: 10,
                  assetType: 'Photos',
                  groupTypes: 'Album',
                  //groupTypes: 'All',
                  groupName: route.params.contactId,
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

    const onAddPhoto = function(){
        const options : CameraOptions = {
            mediaType: 'photo',
        };
        launchImageLibrary(options,onPhotoCallback);
        
        // Not possible due to Simulator
        //launchCamera(options, onPhotoCallback);
    }

    const onPhotoCallback = function(response: ImagePickerResponse){
        if(response.didCancel){
            return;
        }
            
        if(response.errorCode){
            console.log(response.errorMessage);
            return;
        }
        const options: SaveToCameraRollOptions = {
            type: 'photo',
            album: route.params.contactId,
        }
        if(response.uri !== undefined){
            CameraRoll.save(response.uri,options).then(saveResult => {
                setArePhotosLoaded(false);
            }).catch(err => {
                console.log(err);
            })
        }
        
        console.log(response);
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
            style={styles.list}
        />
        <View style={styles.footer}>
            <View style={styles.button}>
                <Button
                    onPress={onAddPhoto}
                    title={"Add"}
                />
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-end',
    },
    list:{
        flex: 1,
    },
    columnWrapperStyle:{
        flex:1,
        justifyContent:'flex-start',
    },
    footer:{
        flex:0.2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button:{
        padding: 20,
        marginRight: 20,
    }
})

export default ContactPhotos;