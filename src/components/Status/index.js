import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

function Statuses(props ) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('StatusShown', {image: props.uri })}>
            <View style={styles.statuses}>
                <View style={styles.statusLogoCont}>
                    <Image
                        source={{uri: props.uri}}
                        style={styles.statusLogoImage}
                    />
                </View>
                <View style={styles.statusTextCont}>
                    <Text style={styles.myStatusText}>Lorem</Text>
                    <Text style={styles.addStatusText}>30 minutes</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Statuses;


const styles = StyleSheet.create({
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusLogoImage: {
        height: 45,
        width: 45,
        borderRadius: 50
    },
});
