import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../src/views/Home'
import SettingsScreen from '../src/views/Settings'
import ChatsScreen from '../src/views/Chats'
import StatusScreen from '../src/views/Status'
import StatusShownScreen from '../src/views/Status/StatusShownScreen'
import CallsScreen from '../src/views/Calls'



const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WhatsApp" component={TabNavigator} />
                <Stack.Screen options={{ headerShown: false }} name="StatusShown" component={StatusShownScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chats" component={ChatNavigator} />
            <Tab.Screen name="Status" component={StatusNavigator} />
            <Tab.Screen name="Calls" component={CallsScreen} />
        </Tab.Navigator>
    );
}

function ChatNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Chats" component={ChatsScreen} />
        </Stack.Navigator>
    );
}
function StatusNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Status" component={StatusScreen} />
        </Stack.Navigator>
    );
}