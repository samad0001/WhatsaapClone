import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')

function Settings({ route }) {
    console.log(route.params.image)
    return (
        <View style={styles.container}>
            <Image
            source={{uri: route.params.image}}
            style={styles.image} />
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        height: height,
        width: width,
        resizeMode: 'contain'
    }
})