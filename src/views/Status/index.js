import React, { useState } from 'react';
import { Button, Image, StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Statuses from '../../components/Status'

function Status() {

    const [image, setImage] = useState([]);

    const pickImage = async () => {

        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permission.granted === false) {
            alert("Permission Denied")
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage([result.assets[0].uri]);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage} style={styles.addStatusCont}>
                <View style={styles.leftSide}>
                    <View style={styles.logoCont}>
                        <Image
                            source={require('../../../assets/image.png')}
                            style={styles.logoImage}
                        />
                        <View style={styles.plusSignCont}>
                            <Text style={styles.plusSign}>+</Text>
                        </View>
                    </View>
                    <View style={styles.statusTextCont}>
                        <Text style={styles.myStatusText}>My Status</Text>
                        <Text style={styles.addStatusText}>Tap to add status update</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={styles.updatesText}>Recent Updates</Text>
            {
                image.map((item) => {
                    return <Statuses uri={item} /> 
                })
            }
            {/* <View style={styles.statuses}>
                <View style={styles.statusLogoCont}>
                    <Image
                        source={require('../../../assets/image.png')}
                        style={styles.statusLogoImage}
                    />
                </View>
                <View style={styles.statusTextCont}>
                    <Text style={styles.myStatusText}>Lorem</Text>
                    <Text style={styles.addStatusText}>30 minutes</Text>
                </View>
            </View> */}
        </View>
    );
}

export default Status;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14191F',
    },
    addStatusCont: {
        height: 90,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoCont: {
        height: 55,
        width: 60
    },
    plusSignCont: {
        position: 'absolute',
        bottom: 4,
        right: 1,
        height: 22,
        width: 22,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1EBEA5'
    },
    plusSign: {
        color: 'white',
        fontSize: 18,
    },
    logoImage: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    statusTextCont: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    myStatusText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,.9)'
    },
    addStatusText: {
        fontSize: 15,
        color: 'rgba(255,255,255,.8)'
    }
    ,
    updatesText: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    statuses: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    statusLogoCont: {
        height: 55,
        width: 60,
        borderColor: '#128C7E',
        borderWidth: 2,
        borderRadius: 50,
        alignItems:'center', 
        justifyContent: 'center'
    },
    statusLogoImage: {
        height: 45, 
        width: 45,
        borderRadius: 50
    },
});