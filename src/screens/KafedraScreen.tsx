import {Linking, Text, TouchableOpacity, View} from "react-native";
import React from "react";

function KafedraScreen ({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.example.com')}>
                <Text>Кафедра в Інтернеті</Text>
            </TouchableOpacity>
        </View>
    );
}
export default KafedraScreen;
