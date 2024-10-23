import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function home() {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Text>Hello World!</Text>
            <TouchableOpacity onPress={() => router.replace('/login')}>
                <Text style={{color: '000000'}}>Go to Index</Text>
            </TouchableOpacity>
        </View>
    )
}